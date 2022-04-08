import { Avatar } from '@mui/material'
import React from 'react'
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom'
import './Sidebar.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
function Sidebar() {
  const user = useSelector(selectUser)
  // console.log(user)
  const recentItem = (topic) => {
    return (
      <div className='sidebar_recent__item'>
        <span className='sidebar_hash'>
          <FamilyRestroomIcon />
        </span>
        <p>{topic}</p>
      </div>
    )
  }

  return (
    <div className='sidebar'>
      <div className='sidebar_top'>
        <img
          src='https://images.pexels.com/photos/133633/pexels-photo-133633.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          alt='cover_img'
        />
        <Avatar src={user.photoUrl} className='sidebar_avatar'>
          {user.photoUrl || user.displayName[0].toUpperCase()}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className='sidebar_stats'>
        <div className='sidebar_stat'>
          <p>Who viewed you </p>
          <p className='sidebar_stat__number'>62</p>
        </div>
        <div className='sidebar_stat'>
          <p>Views of your post</p>
          <p className='sidebar_stat__number'>902</p>
        </div>
      </div>

      <div className='sidebar_botton'>
        <p>Recent</p>
        {recentItem('Reactjs')}
        {recentItem('Programming')}
        {recentItem('Software Developer')}
        {recentItem('Design')}
        {recentItem('Developer')}
      </div>
    </div>
  )
}

export default Sidebar
