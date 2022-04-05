import React from 'react'
import './Login.css'
function Login() {
  const register = () => {}
  const loginSubmit = () => {}
  return (
    <div className='login'>
      <img
        src='https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks'
        alt='LinkedIn_logo'
      />
      <form action=''>
        <input type='text' placeholder='Full name (required if registering)' />
        <input type='text' placeholder='Profile pic Url (optional)' />
        <input type='email' placeholder='Email (required if registering)' />
        <input type='password' placeholder='Password' />
        <button type='submit' onClick={loginSubmit}>
          Sign In
        </button>
        <p>
          Not a member?{' '}
          <span className='login_register' onClick={register}>
            Register Now
          </span>{' '}
        </p>
      </form>
    </div>
  )
}

export default Login
