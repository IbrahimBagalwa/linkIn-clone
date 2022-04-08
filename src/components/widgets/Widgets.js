import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
function Widgets() {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className='widgets_article'>
        <div className='widgets_article__left'>
          <FiberManualRecordIcon />
        </div>
        <div className='widgets_article__right'>
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    )
  }
  return (
    <div className='widgets'>
      <div className='widgets_header'>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {/* {newsArticle('JavaScript Developer', 'company internet')} */}
    </div>
  )
}

export default Widgets
