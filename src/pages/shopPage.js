import React from 'react'
// import collectionsData from './shopPageData'
// import PreviewCollection from '../components/PreviewCollection'
import CollectionsOverview from '../components/CollectionsOverview/CollectionsOverview'
import ShopNavigation from '../components/ShopNavigation/ShopNavigation'
import '../components/PreviewCollection.style.scss'

import { connect } from 'react-redux'
import { shopData } from '../redux/shopData/shopData.selectors'
import { createStructuredSelector } from 'reselect'
import { Route } from 'react-router-dom'


const shopPage = (props) => {
  console.log("shop props:", props);
  return <div className='preview-collection'>
    <Route path={`${props.match.path}/:categoryId`} component={ShopNavigation} />
    <Route path={`${props.match.path}/:categoryId`} component={CollectionsOverview} />
  </div>
}

const mapStateToProps = createStructuredSelector({
  shopData: shopData
})

export default connect(mapStateToProps)(shopPage)
