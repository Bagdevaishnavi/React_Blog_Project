import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:3000',
})

export const getBlogs = () => API.get('/blogs')

export const getSingleBlog = (id) => API.get(`/blogs/${id}`)

export const createBlog = (data) => API.post('/blogs', data)

export const updateBlog = (id, data) =>
  API.put(`/blogs/${id}`, data)

export const deleteBlog = (id) =>
  API.delete(`/blogs/${id}`)

export const registerUser = (data) =>
  API.post('/users', data)

export const getUsers = () => API.get('/users')
