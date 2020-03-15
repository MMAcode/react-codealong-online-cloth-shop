import React from 'react'
import './CheckOutItem.style.scss'

// import { cartTotalToPay, selectCartItems } from '../../redux/cart/cart.selectors'
import { connect } from 'react-redux'
import { addItem, remove1Item, removeAllItem } from '../../redux/cart/cart.actions'
// import { createStructuredSelector } from 'reselect'

const CheckOutItem = ({ cartItem: { name, price, imageUrl, count }, dispatch }) => {
  console.log("ahoj count", count);
  return <div id='checkOut-item'>
    <img className='checkOut-cart-image' src={imageUrl} alt='icon' />
    <h3>{name}</h3>
    <div>
      <p className='increase-decrease' onClick={() => dispatch(addItem({ name, price, imageUrl }))}>
        <span role='img' aria-label='add'>&#10133;</span>
      </p>
      <p className='centerText'> {count}</p>
      <p className='increase-decrease' onClick={() => dispatch(remove1Item({ name, count }))}>
        <span role='img' aria-label='add'>&#10134;</span>
      </p>
    </div>
    <p>£{price} each</p>
    <p className='increase-decrease' onClick={() => dispatch(removeAllItem({ name }))}>
      <span role='img' aria-label='add'> &#10060; </span>
    </p>
  </div>
}
export default connect(null)(CheckOutItem)
// export default CheckOutItem