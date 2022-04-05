import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import HomeIcon from '@mui/icons-material/Home'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import ChatIcon from '@mui/icons-material/Chat'
import NotificationsIcon from '@mui/icons-material/Notifications'
import './Header.css'
import HeaderOptions from './HeaderOptions'
function Header() {
  return (
    <div className='header'>
      <div className='header_left'>
        <img
          src='https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1649154525~hmac=d01b946853689d0c52a1588ad9da8c39'
          alt=''
        />
        <div className='header_search'>
          <SearchIcon />
          <input type='text' placeholder='Search' />
        </div>
      </div>
      <div className='header_right'>
        <HeaderOptions Icon={HomeIcon} title='Home' />
        <HeaderOptions Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderOptions Icon={BusinessCenterIcon} title='Job' />
        <HeaderOptions Icon={ChatIcon} title='Messaging' />
        <HeaderOptions Icon={NotificationsIcon} title='Notifications' />
        <HeaderOptions
          avatar='https://media-exp1.licdn.com/dms/image/C5603AQEZThAOgL1JGw/profile-displayphoto-shrink_100_100/0/1636141773181?e=1654732800&v=beta&t=uuomiI5ABG_vrL56KUX7j24BfKZNjq-Rq2MgGlIbzDs'
          title='Me'
        />
      </div>
    </div>
  )
}

export default Header
