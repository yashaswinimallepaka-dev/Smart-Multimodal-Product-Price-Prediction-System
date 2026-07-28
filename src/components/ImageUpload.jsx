import { useState } from 'react'

function ImageUpload({ onImageSelect, preview }) {
  const [dragActive, setDragActive] = useState(false)

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onImageSelect(e.dataTransfer.files[0])
    }
  }

  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      onImageSelect(e.target.files[0])
    }
  }

  return (
    <div
      className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition ${
        dragActive ? 'border-secondary bg-green-50' : 'border-gray-300 hover:border-secondary'
      }`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      onClick={() => document.getElementById('fileInput').click()}
    >
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="hidden"
      />
      {preview ? (
        <img src={preview} alt="Preview" className="max-h-64 mx-auto rounded" />
      ) : (
        <div>
          <p className="text-4xl mb-2">📸</p>
          <p className="text-gray-600">Drag and drop product image here</p>
          <p className="text-sm text-gray-400 mt-2">or click to browse</p>
        </div>
      )}
    </div>
  )
}

export default ImageUpload
