from fastapi import FastAPI, File, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
from predict import predict_price
import uvicorn

app = FastAPI(title="PriceWise AI API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "PriceWise AI API is running"}

@app.post("/predict")
async def predict(
    image: UploadFile = File(...),
    description: str = Form(...)
):
    try:
        image_bytes = await image.read()
        result = predict_price(image_bytes, description)
        return result
    except Exception as e:
        from fastapi import HTTPException
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
