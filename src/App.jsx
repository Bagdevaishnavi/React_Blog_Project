import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import BlogDetails from './pages/BlogDetails'
import CreateBlog from './pages/CreateBlog'
import EditBlog from './pages/EditBlog'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'

import ProtectedRoute from './components/ProtectedRoute'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <>
      <Navbar />

      <ToastContainer />

      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/blog/:id' element={<BlogDetails />} />

        <Route
          path='/create'
          element={
            <ProtectedRoute>
              <CreateBlog />
            </ProtectedRoute>
          }
        />

        <Route
          path='/edit/:id'
          element={
            <ProtectedRoute>
              <EditBlog />
            </ProtectedRoute>
          }
        />

        <Route path='/login' element={<Login />} />

        <Route path='/register' element={<Register />} />

        <Route
          path='/dashboard'
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App