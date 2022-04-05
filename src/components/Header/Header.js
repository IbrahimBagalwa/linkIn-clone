import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import './Header.css'
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
      <div className='header_right'></div>
    </div>
  )
}

export default Header
