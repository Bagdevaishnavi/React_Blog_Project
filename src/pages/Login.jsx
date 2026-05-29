import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { getUsers } from '../services/api'

import { toast } from 'react-toastify'

const Login = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await getUsers()

    const user = response.data.find(
      (u) =>
        u.email === email &&
        u.password === password
    )

    if (user) {
      localStorage.setItem(
        'user',
        JSON.stringify(user)
      )

      toast.success('Login Successful')

      navigate('/')
    } else {
      toast.error('Invalid Credentials')
    }
  }

  return (
    <div className='container py-5'>
      <div className='row justify-content-center'>
        <div className='col-md-5'>
          <div className='card shadow'>
            <div className='card-body'>

              <h2 className='text-center mb-4'>
                Login
              </h2>

              <form onSubmit={handleSubmit}>

                <input
                  type='email'
                  placeholder='Enter Email'
                  className='form-control mb-3'
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  required
                />

                <input
                  type='password'
                  placeholder='Enter Password'
                  className='form-control mb-3'
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  required
                />

                <button className='btn btn-dark w-100'>
                  Login
                </button>

                <p className='mt-3 text-center'>
                  Don't have account?

                  <Link to='/register'>
                    Register
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

export default Login