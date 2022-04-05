import React from 'react'
import { useSelector } from 'react-redux'
import './App.css'
import Feed from './components/Feed/Feed'
import Header from './components/Header/Header'
import Sidebar from './components/siderbar/Sidebar'
import { selectUser } from './features/userSlice'
import Login from './page/Login/Login'

function App() {
  const user = useSelector(selectUser)
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
