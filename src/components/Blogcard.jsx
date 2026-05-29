import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({ blog }) => {
  return (
    <div className='col-md-4 mb-4'>
      <div className='card h-100 shadow'>
        <img
          src={blog.image}
          className='card-img-top'
          height='250px'
          style={{ objectFit: 'cover' }}
        />

        <div className='card-body'>
          <h5>{blog.title}</h5>

          <p>{blog.category}</p>

          <p>{blog.description.slice(0, 100)}...</p>

          <Link
            className='btn btn-dark w-100'
            to={`/blog/${blog.id}`}
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
