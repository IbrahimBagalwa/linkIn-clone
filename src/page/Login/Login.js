import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../features/userSlice'
import { auth } from '../../Firebase'
import './Login.css'
function Login() {
  const [person, setPerson] = useState({
    name: '',
    photoUrl: '',
    email: '',
    password: '',
  })
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setPerson({ ...person, [name]: value })
  }
  const dispatch = useDispatch()
  const register = () => {
    if (person.name && person.email && person.password) {
      auth
        .createUserWithEmailAndPassword(person.email, person.password)
        .then((userAuth) => {
          userAuth.user
            .updateProfile({
              displayName: person.name,
              photoURL: person.photoUrl,
            })
            .then(() => {
              dispatch(
                login({
                  email: userAuth.user.email,
                  uid: userAuth.user.displayName,
                  displayName: person.name,
                  photoURL: person.photoUrl,
                })
              )
            })
        })
        .catch((err) => alert(err.message))
    } else {
      console.log('false')
    }
  }
  const loginSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className='login'>
      <img
        src='https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks'
        alt='LinkedIn_logo'
      />
      <form action=''>
        <input
          type='text'
          value={person.name}
          name='name'
          onChange={handleChange}
          placeholder='Full name (required if registering)'
        />
        <input
          type='text'
          value={person.photoUrl}
          name='photoUrl'
          onChange={handleChange}
          placeholder='Profile pic Url (optional)'
        />
        <input
          type='email'
          value={person.email}
          name='email'
          onChange={handleChange}
          placeholder='Email (required if registering)'
        />
        <input
          type='password'
          value={person.password}
          name='password'
          onChange={handleChange}
          placeholder='Password'
        />
        <button type='submit' onClick={loginSubmit}>
          Sign In
        </button>
        <p>
          Not a member ?{' '}
          <span className='login_register' onClick={register}>
            Register Now
          </span>
        </p>
      </form>
    </div>
  )
}

export default Login
