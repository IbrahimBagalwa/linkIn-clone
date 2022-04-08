import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Feed from './components/Feed/Feed'
import Header from './components/Header/Header'
import Sidebar from './components/siderbar/Sidebar'
import { login, logout, selectUser } from './features/userSlice'
import { auth } from './Firebase'
import Login from './page/Login/Login'

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user iis logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        )
      } else {
        // user is logged out
        dispatch(logout())
      }
    })
  }, [])

  return (
    <div className='app'>
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className='app_body'>
          <Sidebar />
          <Feed />
          {/* widgets */}
        </div>
      )}
    </div>
  )
}

export default App
