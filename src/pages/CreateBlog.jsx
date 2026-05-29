import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { createBlog } from '../services/api'

import { toast } from 'react-toastify'

const CreateBlog = () => {
  const navigate = useNavigate()

  const user = JSON.parse(
    localStorage.getItem('user')
  )

  const [formData, setFormData] = useState({
    title: '',
    category: '',
    image: '',
    description: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newBlog = {
      ...formData,
      author: user.name,
    }

    await createBlog(newBlog)

    toast.success('Blog Added Successfully')

    navigate('/dashboard')
  }

  return (
    <div className='container py-5'>

      <div className='row justify-content-center'>

        <div className='col-md-8'>

          <div className='card shadow'>

            <div className='card-body'>

              <h2 className='text-center mb-4'>
                Add Blog
              </h2>

              <form onSubmit={handleSubmit}>

                <input
                  type='text'
                  name='title'
                  placeholder='Blog Title'
                  className='form-control mb-3'
                  onChange={handleChange}
                  required
                />

                <input
                  type='text'
                  name='category'
                  placeholder='Category'
                  className='form-control mb-3'
                  onChange={handleChange}
                  required
                />

                <input
                  type='text'
                  name='image'
                  placeholder='Image URL'
                  className='form-control mb-3'
                  onChange={handleChange}
                  required
                />

                <textarea
                  name='description'
                  rows='6'
                  placeholder='Description'
                  className='form-control mb-3'
                  onChange={handleChange}
                  required
                ></textarea>

                <button className='btn btn-dark w-100'>
                  Add Blog
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default CreateBlog