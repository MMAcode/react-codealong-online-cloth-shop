import React from 'react'
import './CollectionItem.scss'
import MiroMouseEntryOverlay from '../MiroMouseEntryOverlay'
import Button1 from '../reusable/button/Button1'
// import '../../images/shop-img/'

//redux
import {addItem} from '../../redux/cart/cart.actions'
import { connect } from 'react-redux'

function CollectionItem({ name, id, imageUrl, price, title, addItem }) {
  return (
    <div className='collection-item'>
      <MiroMouseEntryOverlay imageUrl={imageUrl} />

      <div className='info'>
        <p>{`${name}`}</p>
        <p>{`£${price}`}</p>
      </div>

      <Button1 addToCartStyle onClick={() => addItem({ name, price, imageUrl })}>Add to Cart.</Button1>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem)
