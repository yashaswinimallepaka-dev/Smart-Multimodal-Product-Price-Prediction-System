function PriceResult({ price, category, message, onReset }) {
  const categoryColors = {
    Budget: 'bg-green-100 text-green-800',
    'Mid-range': 'bg-yellow-100 text-yellow-800',
    Premium: 'bg-orange-100 text-orange-800',
    Luxury: 'bg-red-100 text-red-800'
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 text-center animate-fadeIn">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Predicted Price</h2>
      <div className="text-6xl font-bold text-primary mb-4">
        ${price.toFixed(2)}
      </div>
      <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${categoryColors[category]}`}>
        {category}
      </span>
      <p className="text-gray-600 mt-4 mb-6">{message}</p>
      <button
        onClick={onReset}
        className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
      >
        Try Another Product
      </button>
    </div>
  )
}

export default PriceResult
