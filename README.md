# PriceWise AI - Smart Product Price Prediction System

AI-powered price prediction for e-commerce sellers using multimodal analysis.

## Features

- 🤖 AI-powered price prediction using CLIP + XGBoost
- 🔄 Multimodal analysis (text + image)
- ⚡ Instant results in 2 seconds
- 📊 Trained on 25,000 real Amazon products
- 🎨 Modern React UI with Tailwind CSS
- 🔐 Simple demo authentication

## Tech Stack

**Frontend:**
- React.js
- Tailwind CSS
- Vite
- React Router
- Axios

**Backend:**
- FastAPI
- PyTorch & Transformers (CLIP)
- XGBoost
- Scikit-learn

## Setup Instructions

### Backend Setup

1. Navigate to backend folder:
```bash
cd backend
```

2. Create virtual environment:
```bash
python -m venv venv
venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Place model files in `backend/models/`:
   - xgb_model.joblib
   - feature_scaler.joblib
   - pca_reducer.joblib

5. Run the server:
```bash
python main.py
```

Backend will run on http://localhost:8000

### Frontend Setup

1. Navigate to frontend folder:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

Frontend will run on http://localhost:3000

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

## Project Structure

```
PriceWise-AI/
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
├── backend/
│   ├── main.py
│   ├── predict.py
│   ├── requirements.txt
│   └── models/
└── README.md
```

## How It Works

1. **CLIP Model**: Generates embeddings for text and images
2. **Gated Fusion**: Intelligently combines both modalities
3. **PCA**: Reduces dimensionality from 512 to 256
4. **XGBoost**: Predicts final price from fused features

## Price Categories

- Budget: < $10
- Mid-range: $10 - $50
- Premium: $50 - $150
- Luxury: > $150
