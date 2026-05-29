import React, { useEffect, useState } from 'react'
import { getBlogs } from '../services/api'
import BlogCard from '../components/BlogCard'

const Home = () => {
  const [blogs, setBlogs] = useState([])
  const [search, setSearch] = useState('')

  const fetchBlogs = async () => {
    const response = await getBlogs()
    setBlogs(response.data)
  }

  useEffect(() => {
    fetchBlogs()
  }, [])

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className='container py-5'>
      <h1 className='text-center mb-4'>All Blogs</h1>

      <input
        type='text'
        placeholder='Search blog...'
        className='form-control mb-4'
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className='row'>
        {filteredBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  )
}

export default Home
