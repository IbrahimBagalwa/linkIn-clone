import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import './HeaderOption.css'
function HeaderOptions({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser)
  return (
    <div onClick={onClick} className='headerOption'>
      {Icon && <Icon className='headerOption_icon' />}
      {avatar && (
        <Avatar className='headerOption_icon' src={user?.photoUrl}>
          {user.email[0].toUpperCase}
        </Avatar>
      )}
      <h4 className='headerOption_title'>{title}</h4>
    </div>
  )
}

export default HeaderOptions
