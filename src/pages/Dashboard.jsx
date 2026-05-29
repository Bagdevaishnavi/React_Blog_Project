import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteBlog, getBlogs } from '../services/api'

const Dashboard = () => {
  const [blogs, setBlogs] = useState([])

  const fetchBlogs = async () => {
    const response = await getBlogs()
    setBlogs(response.data)
  }

  useEffect(() => {
    fetchBlogs()
  }, [])

  const handleDelete = async (id) => {
    await deleteBlog(id)

    fetchBlogs()
  }

  return (
    <div className='container py-5'>
      <h1 className='mb-4'>Dashboard</h1>

      <table className='table table-bordered table-hover'>
        <thead className='table-dark'>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {blogs.map((blog) => (
            <tr key={blog.id}>
              <td>
                <img
                  src={blog.image}
                  width='100px'
                  height='70px'
                  style={{ objectFit: 'cover' }}
                />
              </td>

              <td>{blog.title}</td>

              <td>{blog.category}</td>

              <td>
                <Link
                  to={`/edit/${blog.id}`}
                  className='btn btn-primary me-2'
                >
                  Edit
                </Link>

                <button
                  className='btn btn-danger'
                  onClick={() => handleDelete(blog.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Dashboard
