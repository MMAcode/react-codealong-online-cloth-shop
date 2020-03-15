import React from 'react'
import './CartView.style.scss'
import CartItem from '../CartItem/cartItem'
import Button1 from '../reusable/button/Button1'
import { selectCartItems } from '../../redux/cart/cart.selectors'

import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

function CartView({ cartItems, cartVisible, toggleCartHidden }) {
  // let itemsIdCounter = 0;
  console.log("cart hidden", cartVisible);
  let cartViewStyle = cartVisible ? { transform: 'translateX(120%)' } : { transform: 'translateX(0)' }

  return (
    <div
      id='cardView-wrapper'
      style={cartViewStyle}
    >
      <div id='items-wrapper'>
        {cartItems.length > 0 ?
          (
            cartItems.map((item, index) => {
              return <CartItem key={index + 1} {...item} />
            })
          ) : (<div style={{ textAlign: 'center', marginTop: '10px' }}>Your Cart is empty.</div>)
        }
      </div>
      {/* here we will have cart-items elements, which will also be formatted by class-name */}
      <Link to='/checkOut'>
        <Button1
          id='checkOut-button'
          // onClick={() => toggleCartHidden()}
          onClick={toggleCartHidden}
        >Go to CHECKOUT
        </Button1>
      </Link>

    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = (state) => ({
  // cartItems: state.cart.cartItems,
  cartItems: selectCartItems(state)
})



export default connect(mapStateToProps, mapDispatchToProps)(CartView)
