import React from 'react'
import './CheckOut.style.scss'
import CheckOutItem from '../CheckOutItem/CheckOutItem'

import { cartTotalToPay, selectCartItems } from '../../redux/cart/cart.selectors'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'


function CheckOutPage({ totalToPay, cartItems }) {
  return (
    <div>
      <h1 className='title'>CheckOut</h1>
      <div id='checkOut-Container'>
        <div id='checkOut-Grid'>
          <div id='checkOut-headings'>
            <p>Image</p>
            <p>Name</p>
            <p>Amount</p>
            <p>Price</p>
            <p>Remove</p>

          </div>
          {cartItems.length > 0 && (cartItems.map((item, index) => <CheckOutItem key={index + 1} cartItem={item} />))}
        </div>
        {cartItems.length > 0 ? <h2 id='to-pay'> To pay:  £{totalToPay}</h2> : <p className='centerText paddingAround'>Your cart is empty.</p>}
      </div>
      
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  totalToPay: cartTotalToPay,
  cartItems: selectCartItems
  //, cartCounter: cartItemsCount
})

export default connect(mapStateToProps)(CheckOutPage);