import io
import re
import html as html_module
import numpy as np
from PIL import Image
import torch
from transformers import CLIPProcessor, CLIPModel
import joblib
from pathlib import Path

MODEL_DIR  = Path("models")
clip_model = None
clip_processor = None
xgb_model = None
scaler    = None
pca       = None

def load_models():
    global clip_model, clip_processor, xgb_model, scaler, pca
    
    if clip_model is None:
        print("Loading CLIP model...")
        clip_model     = CLIPModel.from_pretrained(
                         "openai/clip-vit-base-patch32")
        clip_processor = CLIPProcessor.from_pretrained(
                         "openai/clip-vit-base-patch32")
    
    if xgb_model is None:
        print("Loading XGBoost model...")
        xgb_model = joblib.load(MODEL_DIR / "best_model.joblib")
        scaler    = joblib.load(MODEL_DIR / "feature_scaler.joblib")
        pca       = joblib.load(MODEL_DIR / "pca_reducer.joblib")

def clean_text(text):
    if not isinstance(text, str):
        return ''
    
    # Same as training!
    text = html_module.unescape(text)
    text = re.sub(
        r'(Bullet Point \d+:|Item Name:|Product Description:|Value:|Unit:)',
        ' ', text
    )
    text = re.sub(r'\s+', ' ', text).strip()
    return text  # return full cleaned text

def get_category(price):
    if price < 10:
        return "Budget", "Great value for budget shoppers"
    elif price < 50:
        return "Mid-range", "Quality product at reasonable price"
    elif price < 150:
        return "Premium", "High-quality premium product"
    else:
        return "Luxury", "Luxury item with exceptional features"

def predict_price(image_bytes, description):
    load_models()
    
    image      = Image.open(io.BytesIO(image_bytes)).convert("RGB")
    clean_desc = clean_text(description)
    
    # Exactly same as training!
    inputs = clip_processor(
        text=[clean_desc],
        images=image,
        return_tensors="pt",
        padding=True,
        truncation=True,  # same as training!
        max_length=77     # same as training!
    )
    
    with torch.no_grad():
        outputs   = clip_model(**inputs)
        text_emb  = outputs.text_embeds.numpy()
        image_emb = outputs.image_embeds.numpy()
    
    # Normalize same as training!
    text_emb  = text_emb  / np.linalg.norm(
                text_emb,  axis=1, keepdims=True)
    image_emb = image_emb / np.linalg.norm(
                image_emb, axis=1, keepdims=True)
    
    # Gated fusion same as training!
    gate  = 1 / (1 + np.exp(-np.sum(
            text_emb * image_emb, axis=1, keepdims=True)))
    fused = gate * text_emb + (1 - gate) * image_emb
    
    # PCA → Scale → Predict
    fused_reduced = pca.transform(fused)
    scaled        = scaler.transform(fused_reduced)
    pred_log      = xgb_model.predict(scaled)
    price         = round(float(np.expm1(pred_log)[0]), 2)
    price         = max(price, 0.01)
    
    category, message = get_category(price)
    
    return {
        "predicted_price": price,
        "category":        category,
        "message":         message
    }
