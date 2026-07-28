import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../components/Navbar'
import ImageUpload from '../components/ImageUpload'
import PriceResult from '../components/PriceResult'

function PredictionPage() {
  const [image, setImage] = useState(null)
  const [preview, setPreview] = useState(null)
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/login')
    }
  }, [navigate])

  const handleImageSelect = (file) => {
    setImage(file)
    setPreview(URL.createObjectURL(file))
    setError('')
  }

  const handlePredict = async () => {
    if (!image || !description.trim()) {
      setError('Please upload an image and enter a description')
      return
    }

    setLoading(true)
    setError('')

    const formData = new FormData()
    formData.append('image', image)
    formData.append('description', description)

    try {
      const response = await axios.post('http://localhost:8000/predict', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      setResult(response.data)
    } catch (err) {
      setError(err.response?.data?.detail || 'Prediction failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setImage(null)
    setPreview(null)
    setDescription('')
    setResult(null)
    setError('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary text-center mb-12">Price Prediction</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Side - Input */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-700">Product Image</h2>
              <ImageUpload onImageSelect={handleImageSelect} preview={preview} />
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-700">Product Description</h2>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary resize-none"
                rows="6"
                placeholder="Enter product title, brand, quantity, specifications&#10;&#10;Example: Oreo Chocolate Cookies 500g Pack of 2 Rich Creamy Filling"
              />
            </div>

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}

            <button
              onClick={handlePredict}
              disabled={loading}
              className="w-full bg-secondary text-white py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Predicting...
                </span>
              ) : (
                'Predict Price'
              )}
            </button>
          </div>

          {/* Right Side - Result */}
          <div>
            {result ? (
              <PriceResult
                price={result.predicted_price}
                category={result.category}
                message={result.message}
                onReset={handleReset}
              />
            ) : (
              <div className="bg-white rounded-lg shadow-lg p-8 text-center h-full flex items-center justify-center">
                <div className="text-gray-400">
                  <p className="text-6xl mb-4">💰</p>
                  <p className="text-xl">Your prediction result will appear here</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PredictionPage
