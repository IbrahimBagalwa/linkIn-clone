import { Avatar } from '@mui/material'
import React from 'react'

function Posts({ name, description, message, photoUrl }) {
  return (
    <div className='posts'>
      <div className='post_header'>
        <Avatar />
        <div className='post_info'>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className='post_body'>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default Posts
