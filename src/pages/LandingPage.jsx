import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

function LandingPage() {
  const navigate = useNavigate()

  const scrollToPredict = () => {
    const token = localStorage.getItem('token')
    if (token) {
      navigate('/predict')
    } else {
      navigate('/login')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-primary mb-6">
          Know Your Product's Worth Instantly
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          AI-powered price prediction for e-commerce sellers
        </p>
        <button
          onClick={scrollToPredict}
          className="bg-secondary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition shadow-lg"
        >
          Get Started
        </button>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="text-5xl mb-4">📸</div>
            <h3 className="text-xl font-semibold mb-2">Step 1: Upload Image</h3>
            <p className="text-gray-600">Upload a clear product image</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="text-5xl mb-4">✍️</div>
            <h3 className="text-xl font-semibold mb-2">Step 2: Enter Description</h3>
            <p className="text-gray-600">Provide product details and specifications</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-2">Step 3: Get Price</h3>
            <p className="text-gray-600">Receive instant AI-powered price prediction</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="font-semibold mb-2">AI Powered Prediction</h3>
            <p className="text-sm text-gray-600">Advanced machine learning models</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-3">🔄</div>
            <h3 className="font-semibold mb-2">Multimodal Analysis</h3>
            <p className="text-sm text-gray-600">Combines text and image data</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-semibold mb-2">Instant Results</h3>
            <p className="text-sm text-gray-600">Get predictions in 2 seconds</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="font-semibold mb-2">25,000+ Products</h3>
            <p className="text-sm text-gray-600">Trained on real Amazon data</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
