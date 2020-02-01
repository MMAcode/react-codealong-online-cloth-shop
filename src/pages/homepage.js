import React from 'react'
import './Homepage.style.scss'

import Directory from '../components/Directory'


function Homepage() {
  return (
    <div className='homepage'>
      <Directory className='directory-menu'/>
    </div>
  )
}

export default Homepage
