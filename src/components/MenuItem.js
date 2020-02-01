import './MenuItem.style.scss'
import React from 'react'

function MenuItem({ title, imageUrl, size }) {
  console.log(`${size}`)
  return (
    <div
      className={`${size} menu-item`}
    >
      <div
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
        className='bg-img'
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'> SHOP NOW</span>
      </div>
    </div>

  )
}

export default MenuItem
