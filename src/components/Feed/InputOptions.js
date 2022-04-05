import React from 'react'

function InputOptions({ Icon, title, color }) {
  return (
    <div className='input_option'>
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  )
}

export default InputOptions
