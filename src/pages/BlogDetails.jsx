import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleBlog } from '../services/api'

const BlogDetails = () => {
  const { id } = useParams()

  const [blog, setBlog] = useState({})

  const fetchBlog = async () => {
    const response = await getSingleBlog(id)
    setBlog(response.data)
  }

  useEffect(() => {
    fetchBlog()
  }, [])

  return (
    <div className='container py-5'>
      <div className='card shadow'>
        <img
          src={blog.image}
          height='500px'
          style={{ objectFit: 'cover' }}
          className='card-img-top'
        />

        <div className='card-body'>
          <h1>{blog.title}</h1>

          <p className='text-muted'>
            {blog.category} | {blog.author}
          </p>

          <p>{blog.description}</p>
        </div>
      </div>
    </div>
  )
}

export default BlogDetails
