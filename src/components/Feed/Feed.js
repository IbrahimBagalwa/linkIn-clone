import React from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create'
function Feed() {
  return (
    <div className='feed'>
      <div className='feed_inout__container'>
        <div className='feed_input'>
          <CreateIcon />
          <form action=''>
            <input type='text' />
            <button type='submit'>Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Feed
