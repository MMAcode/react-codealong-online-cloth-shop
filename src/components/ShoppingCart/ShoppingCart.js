import React from 'react'
// import { ReactComponent as CartImage } from './shopping-bag.svg'
import './ShoppingCart.style.scss'
import CartView from './CartView'

//importing functionality to enable toggling cartView
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

//use cart selectors to prevent unnecessary re-rendering when different parts of the sate changes
import { cartItemsCount, cartHidden } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'


function ShoppingCart({ toggleCartHidden, cartHidden, cartCounter }) {
  return (
    <div>
      <div className='shoppingCard-wrapper' onClick={toggleCartHidden}>
        {/* <CartImage className='icon'/> - icon removed and instead placed into the background of this shopping-cart wrapper as background image*/}
        <span id='cart-counter'>{cartCounter}</span>

      </div>
      {/* <div className='xx'>lots of text</div> */}
      {/* {cartHidden ? null : <CartView />} */}
      <CartView cartVisible={cartHidden}/>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector ({
    cartHidden: cartHidden,
    cartCounter: cartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
