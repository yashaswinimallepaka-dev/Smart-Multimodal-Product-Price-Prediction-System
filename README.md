# PriceWise AI - Smart Product Price Prediction System

AI-powered price prediction for e-commerce sellers using multimodal analysis.Determining the correct selling price of a product is a major challenge in e-commerce, especially for small and new sellers who lack market knowledge. Traditional pricing methods rely on manual market research and competitor comparison, which are time-consuming, inconsistent, and often inaccurate.
To overcome these limitations, an intelligent and automated solution is required that can analyse both product text descriptions and images to predict accurate and competitive selling prices.
The Smart Multimodal Product Price Prediction System uses the pretrained CLIP ViT-B/32 model to extract 512-dimensional embeddings from both product text and images. These embeddings are combined using a Gated Fusion mechanism and reduced using PCA from 512 to 256 dimensions. Three regression models :  XGBoost, Random Forest, and MLP Neural Network are trained and compared using SMAPE, MAE, and R² metrics. The best performing model is deployed as a full-stack web application using FastAPI backend and React.js frontend, enabling sellers to receive instant price recommendations.


## Features

- 🤖 AI-powered price prediction using CLIP + XGBoost
- 🔄 Multimodal analysis (text + image)
- ⚡ Instant results in 2 seconds
- 📊 Trained on real Amazon products
- 🎨 Modern React UI with Tailwind CSS
- 🔐 Simple demo authentication

## Tech Stack

**Frontend:**
(Node js)
-react
-react-dom
-tailwindcss
-axios


**Backend:**
(PYTHON)
-fastapi
-uvicorn
-transformers
-torch
-xgboost
-scikit-learn
-Pillow
-numpy
-pandas
-joblib
-python-multipart
-Requests


## Installation
-Backend
For installing all required backend packages, run the following command in the terminal:
pip install -r requirements.txt
The requirements.txt file is provided along with the project folder.

-Frontend
For installing all required frontend packages, run the following command in the terminal:
npm install

## Demo Credentials

- Email: seller@pricewise.com
- Password: seller123

## Usage

1. Open http://localhost:3000
2. Click "Get Started" or "Login"
3. Login with demo credentials
4. Upload product image
5. Enter product description
6. Click "Predict Price"
7. View instant price prediction with category

## How It Works

1. **CLIP Model**: Generates embeddings for text and images
2. **Gated Fusion**: Intelligently combines both modalities
3. **PCA**: Reduces dimensionality from 512 to 256
4. **XGBoost**: Predicts final price from fused features

## Project Structure

mp2_product_pricing/
│
├── backend/
│   ├── main.py                  - FastAPI server
│   ├── predict.py               - ML prediction pipeline
│   ├── requirements.txt         - Python dependencies
│   └── models/
│       ├── best_model.joblib    - Trained XGBoost model
│       ├── feature_scaler.joblib - StandardScaler
│       └── pca_reducer.joblib   - PCA reducer
├── frontend/
│   ├── src/
│   │   ├── App.js               - Main React component
│   │   └── components/          - UI components
│   ├── package.json             - Node dependencies
│   └── tailwind.config.js       - Tailwind configuration
│
└── training/
    └── amazon_price_prediction.py - Google Colab training script

```

## Executing the Program

Download the project folder and follow the steps below. Both frontend and backend must be started separately using two different terminals.
Step 1: Run Backend
Open terminal 1 and execute the following commands:
cd mp2_product_pricing/backend
pip install -r requirements.txt
uvicorn main:app --reload
The backend server will start at: http://localhost:8000

Step 2: Run Frontend
Open terminal 2 and execute the following commands:
cd mp2_product_pricing/frontend
npm install
npm start
The frontend will start and run on: http://localhost:3000

Step 3: Using the Application
Open http://localhost:3000/predict in your browser
Upload a product image using the upload button
Enter the product description in the text area in the following format:
Item Name: Product Name Here
Value: 72.0
Unit: Ounce
Click the Predict Price button
The system will display the predicted price with a category label

## Output of the Program

The output will display:
Predicted selling price in dollars ($)
Category label — Budget / Mid-range / Premium / Luxury
Quality message based on predicted price range

## Model Training (Google Colab)

To retrain the models, upload the training script to Google Colab and follow these steps:
-Upload train.csv to Colab
-Run all cells from Step 1 to Step 8
-Models will be saved automatically to Google Drive at: /content/drive/MyDrive/AmazonMLChallenge/
Files saved after training:
-best_model.joblib — Best performing model
-feature_scaler.joblib — StandardScaler
-pca_reducer.joblib — PCA reducer
-model_comparison.csv — Results table
Download these files and place them in the backend/models/ folder before running the backend.

## Dataset

Training samples: 25,000 products
Test samples: 100 products (sample_test.csv)
Fields: sample_id, catalog_content, image_link, price

## Important Notes
Make sure both frontend and backend are running simultaneously for proper execution.
The backend must have the three model files (best_model.joblib, feature_scaler.joblib, pca_reducer.joblib) in the models/ folder before starting.
Internet connection is required for the first run to download the CLIP model from Hugging Face (approximately 605 MB).
After the first download, CLIP model is cached locally and loads instantly on subsequent runs.

## TEAM MEMBERS

M. Yashashwini (23251A05B8)
M. Joycy (23251A0588)
S. Krithika (24255A0510)

