import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser, getUsers } from '../services/api'

import { toast } from 'react-toastify'

const Register = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await getUsers()

    const userExists = response.data.find(
      (user) => user.email === formData.email
    )

    if (userExists) {
      toast.error('Email Already Exists')
      return
    }

    await registerUser(formData)

    toast.success('Registration Successful')

    navigate('/login')
  }

  return (
    <div className='container py-5'>
      <div className='row justify-content-center'>
        <div className='col-md-5'>
          <div className='card shadow'>
            <div className='card-body'>

              <h2 className='text-center mb-4'>
                Register
              </h2>

              <form onSubmit={handleSubmit}>

                <input
                  type='text'
                  name='name'
                  placeholder='Enter Name'
                  className='form-control mb-3'
                  onChange={handleChange}
                  required
                />

                <input
                  type='email'
                  name='email'
                  placeholder='Enter Email'
                  className='form-control mb-3'
                  onChange={handleChange}
                  required
                />

                <input
                  type='password'
                  name='password'
                  placeholder='Enter Password'
                  className='form-control mb-3'
                  onChange={handleChange}
                  required
                />

                <button className='btn btn-dark w-100'>
                  Register
                </button>

                <p className='mt-3 text-center'>
                  Already have account?

                  <Link to='/login'>
                    Login
                  </Link>
                </p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register