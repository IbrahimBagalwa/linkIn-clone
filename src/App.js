import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Sidebar from './components/siderbar/Sidebar'

function App() {
  return (
    <div className='app'>
      <Header />
      <div className='app_body'>
        <Sidebar />
        {/* feed */}
        {/* widgets */}
      </div>
    </div>
  )
}

export default App
