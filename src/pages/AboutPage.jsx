import Navbar from '../components/Navbar'

function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary text-center mb-12">About PriceWise AI</h1>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Project Overview */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Project Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              PriceWise AI is an intelligent product price prediction system designed for e-commerce sellers. 
              Using advanced machine learning and multimodal AI, we analyze both product images and descriptions 
              to provide accurate price predictions instantly.
            </p>
          </div>

          {/* How It Works */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">How the AI Model Works</h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start">
                <span className="text-secondary font-bold mr-3">1.</span>
                <div>
                  <strong>CLIP Model:</strong> Uses OpenAI's CLIP ViT-B/32 to understand both text and images together, 
                  creating unified embeddings that capture semantic meaning.
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-secondary font-bold mr-3">2.</span>
                <div>
                  <strong>Gated Fusion:</strong> Intelligently combines text and image embeddings using a learned gate 
                  mechanism that determines the optimal weight for each modality.
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-secondary font-bold mr-3">3.</span>
                <div>
                  <strong>XGBoost Prediction:</strong> A powerful gradient boosting model predicts the final price 
                  based on the fused multimodal features.
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-secondary font-bold mr-3">4.</span>
                <div>
                  <strong>Training Data:</strong> Trained on 25,000 real Amazon products to ensure accurate and 
                  reliable predictions across various product categories.
                </div>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Technology Stack</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-3 text-secondary">Machine Learning</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• CLIP ViT-B/32</li>
                  <li>• XGBoost</li>
                  <li>• Gated Fusion</li>
                  <li>• PCA Dimensionality Reduction</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3 text-secondary">Development</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• FastAPI (Backend)</li>
                  <li>• React.js (Frontend)</li>
                  <li>• Tailwind CSS (Styling)</li>
                  <li>• PyTorch & Transformers</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Team */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Team</h2>
            <p className="text-gray-700">
              Developed as a college project to demonstrate the power of multimodal AI in solving 
              real-world e-commerce challenges. This system showcases how combining computer vision 
              and natural language processing can create practical business solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
