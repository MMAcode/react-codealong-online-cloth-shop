import React from 'react'
import './CollectionsOverview.style.scss'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { shopData } from '../../redux/shopData/shopData.selectors'
import PreviewCollection from '../PreviewCollection'

const CollectionsOverview = ({ shopData, ...restOfProps }) => {
  // console.log("collections overview props: ", restOfProps);
  let shopSection = restOfProps.match.params.categoryId;
  // console.log("category id: ", shopSection);

  let collection = shopData[shopSection];

  console.log("collection: ", collection);
  return <div>
    {/* {shopData.map(collection =>
      <PreviewCollection key={collection.id} {...collection} ></PreviewCollection>
    )} */}

      <PreviewCollection key={collection.id} {...collection} ></PreviewCollection>
  </div>
}

const mapStateToProps = createStructuredSelector({
  shopData: shopData
})

export default connect(mapStateToProps)(CollectionsOverview)