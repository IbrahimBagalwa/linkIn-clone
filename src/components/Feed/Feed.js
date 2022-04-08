import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create'
import InputOptions from './InputOptions'
import ImageIcon from '@mui/icons-material/Image'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import EventNoteIcon from '@mui/icons-material/EventNote'
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay'
import Posts from './Posts'
import { db } from '../../Firebase'
import firebase from 'firebase/compat/app'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import FlipMove from 'react-flip-move'
function Feed() {
  const user = useSelector(selectUser)
  const [msg, setMsg] = useState('')
  const [post, setPost] = useState([])
  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setPost(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      )
  }, [])
  const handleSendPost = (e) => {
    e.preventDefault()
    db.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message: msg,
      photoUrl: user.photoUrl || '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setMsg('')
  }
  return (
    <div className='feed'>
      <div className='feed_inout__container'>
        <div className='feed_input'>
          <CreateIcon />
          <form action=''>
            <input
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              type='text'
            />
            <button onClick={handleSendPost} type='submit'>
              Send
            </button>
          </form>
        </div>
        <div className='feed_input__options'>
          <InputOptions Icon={ImageIcon} title='Photo' color='#70B5F9' />
          <InputOptions
            Icon={SubscriptionsIcon}
            title='Video'
            color='#E7A33E'
          />
          <InputOptions Icon={EventNoteIcon} title='Event' color='#C0CBCD' />
          <InputOptions
            Icon={CalendarViewDayIcon}
            title='Write article'
            color='#7FC15E'
          />
        </div>
      </div>
      <FlipMove>
        {post.map(({ id, data: { name, description, message, photoUrl } }) => {
          return (
            <Posts
              key={id}
              name={name}
              description={description}
              message={message}
              photoUrl={photoUrl}
            />
          )
        })}
      </FlipMove>
      {/* <Posts
        name='Ibrahim Bagalwa'
        description='This is a test'
        message='Woah this worked'
      /> */}
    </div>
  )
}

export default Feed
