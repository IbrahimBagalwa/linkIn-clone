import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar_top'>
        <img src='' alt='' />
        <Avatar className='sidebar_avatar' />
        <h1>Ibrahim Bagalwa</h1>
        <h4>software Engineer</h4>
      </div>

      <div className='sidebar_stats'>
        <div className='sidebar_stat'>
          <p>Who viewed your prifile</p>
          <p className='sidebar_stat__number'>62</p>
        </div>
        <div className='sidebar_stat'>
          <p>Views of your post</p>
          <p className='sidebar_stat__number'>902</p>
        </div>
      </div>

      <div className='sidebar_bottons'>
        <p>Recent</p>
      </div>
    </div>
  )
}

export default Sidebar
