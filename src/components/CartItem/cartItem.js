import React from 'react'
import './CartItem.style.scss'
import { connect } from 'react-redux'
import {addItem,remove1Item} from '../../redux/cart/cart.actions'

function CartItem({ name, price, imageUrl, count,dispatch }) {
  return (
    <div className='cart-item'>
      <img className='cart-image' src={imageUrl} alt='icon' />
      <div className='cart-item-info'>
        <p>{name}</p>
        <div>
          <span className='increase-decrease' onClick={()=>dispatch(remove1Item({ name, count }))}>-</span>
          <span> {count} x £{price}</span>
          <span className='increase-decrease' onClick={() => dispatch(addItem({ name, price, imageUrl }))}>+</span>
        </div>
        {/* <span className='increase-decrease' onClick={()=>dispatch(remove1Item({ name, count }))}>-</span>
      <span> {count}</span>
      <span className='increase-decrease' onClick={()=>dispatch(addItem({ name, price, imageUrl }))}>+</span> */}
      </div>
    </div>
  )
}

export default connect(null)(CartItem);