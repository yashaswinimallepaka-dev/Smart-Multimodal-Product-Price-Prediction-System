import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    setError('')

    if (email === 'seller@pricewise.com' && password === 'seller123') {
      localStorage.setItem('token', 'demo-jwt-token')
      localStorage.setItem('userName', 'Demo Seller')
      navigate('/predict')
    } else {
      setError('Invalid credentials. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20 flex justify-center">
        <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-primary text-center mb-6">Login to PriceWise AI</h2>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                placeholder="seller@pricewise.com"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                placeholder="Enter password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-secondary text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition"
            >
              Login
            </button>
          </form>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600 text-center">
              <strong>Demo Credentials:</strong><br />
              Email: seller@pricewise.com<br />
              Password: seller123
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
