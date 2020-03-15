import './MenuItem.style.scss'
import React from 'react'
import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import { setThisSectionAsActive } from '../redux/shopData/shopData.actions'
// import { createLogger } from 'redux-logger'

function MenuItem({ title, imageUrl, size, history, linkUrl, match, dispatch }) {  //sort linkUrl
  // console.log(`${size}`)
  // console.log("match:", match.url)
  // console.log("linkkURL:", linkUrl)
  return (
    <div
      className={`${size ? size : ''} menu-item`} //"size" is for making men and woman photos/items bigger
      onClick={() => {
        // console.log("LINK URL:", linkUrl);
        // console.log("LINK URL:", linkUrl.slice(5, linkUrl.length));
        dispatch(setThisSectionAsActive(linkUrl.slice(5, linkUrl.length)))
        window.scrollTo(0, 0);
        return history.push(`${match.url}${linkUrl}`)
      }}

    >
      <div className='mouseLayer' />

      <div
        style={{ background: `url(${imageUrl}) no-repeat center center/cover` }}
        className='bg-img'
      />

      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'> SHOP NOW</span>
      </div>
    </div>

  )
}

export default withRouter(connect(null)(MenuItem))
