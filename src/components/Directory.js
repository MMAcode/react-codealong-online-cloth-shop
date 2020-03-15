import './Directory.style.scss'
import React from 'react'
import MenuItem from './MenuItem'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectMainMenu } from '../redux/mainMenu/mainMenu.selectors'


const Directory = ({ selectMainMenuSections, ...props }) => {
  return (
    <div className='directory-menu'>
      {selectMainMenuSections.map(({ id, ...otherSectionProps }) => {
        return (
          <MenuItem key={id} {...otherSectionProps} />
        )
      })}
    </div>
  )
}

// const mapStateToProps = state => ({
//   // selectMainMenuSections: state.mainMenu.sections
// })
// const mapStateToProps = state => ({
//   selectMainMenuSections: selectMainMenuSections(state)
// })
const mapStateToProps = createStructuredSelector({
  selectMainMenuSections: selectMainMenu
})

export default connect(mapStateToProps)(Directory)
