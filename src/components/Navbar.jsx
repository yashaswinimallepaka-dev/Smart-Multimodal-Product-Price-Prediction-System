import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <nav className="bg-primary text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
          <span className="text-2xl font-bold">💰 PriceWise AI</span>
        </div>
        <div className="flex items-center space-x-6">
          <button onClick={() => navigate('/')} className="hover:text-secondary transition">Home</button>
          <button onClick={() => navigate('/about')} className="hover:text-secondary transition">About</button>
          {token ? (
            <>
              <button onClick={() => navigate('/predict')} className="hover:text-secondary transition">Predict</button>
              <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition">Logout</button>
            </>
          ) : (
            <button onClick={() => navigate('/login')} className="bg-secondary px-4 py-2 rounded hover:bg-green-600 transition">Login</button>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
