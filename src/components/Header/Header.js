import React from 'react'
import './Header.style.scss'
import { ReactComponent as Logo } from '../../images/crown.svg'
import { Link } from 'react-router-dom'
//higher order component "connect"
import { connect } from 'react-redux'
import ShoppingCart from '../ShoppingCart/ShoppingCart'

import { auth } from '../../firebase/firebase.utils'

//getting user selector
import {selectUser} from '../../redux/user/user.selectors'

function Header({user}) {
  return (
    <div className='header'>
      <Link to='/'>
        <Logo className='logo shine' />
      </Link>
      {user && <p>Hi {user.displayName}</p>}
      <div className='menu'>
        <Link to='/' className='shine'>Shop</Link>
        <Link to='/shop' className='shine'>Contact</Link>
        {user ?
          <div className='shine' onClick={() => auth.signOut()}>Sign-Out</div>
          :
          <Link to='/user' className='shine'>Sign-In</Link>
        }
        <Link to='/checkOut' className='shine'> Go to CHECKOUT </Link>  
      </div>
      <ShoppingCart />
      
    </div>
  )
}

const mapStateToProps = state => ({
  // user: state.user.currentUser
  user: selectUser(state)

})

export default connect(mapStateToProps)(Header)


