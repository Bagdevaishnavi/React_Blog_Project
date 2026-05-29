import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getSingleBlog, updateBlog } from '../services/api'

const EditBlog = () => {
  const { id } = useParams()

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    title: '',
    category: '',
    author: '',
    image: '',
    description: '',
  })

  const fetchBlog = async () => {
    const response = await getSingleBlog(id)
    setFormData(response.data)
  }

  useEffect(() => {
    fetchBlog()
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    await updateBlog(id, formData)

    alert('Blog Updated')

    navigate('/dashboard')
  }

  return (
    <div className='container py-5'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='title'
          value={formData.title}
          className='form-control mb-3'
          onChange={handleChange}
        />

        <input
          type='text'
          name='category'
          value={formData.category}
          className='form-control mb-3'
          onChange={handleChange}
        />

        <input
          type='text'
          name='author'
          value={formData.author}
          className='form-control mb-3'
          onChange={handleChange}
        />

        <input
          type='text'
          name='image'
          value={formData.image}
          className='form-control mb-3'
          onChange={handleChange}
        />

        <textarea
          name='description'
          rows='5'
          value={formData.description}
          className='form-control mb-3'
          onChange={handleChange}
        ></textarea>

        <button className='btn btn-dark w-100'>
          Update Blog
        </button>
      </form>
    </div>
  )
}

export default EditBlog
