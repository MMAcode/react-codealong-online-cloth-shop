import React from 'react'
import './ShopNavigation.style.scss'

import { connect } from 'react-redux'
import { shopCollectionsNamesURLsInArray } from '../../redux/shopData/shopData.selectors'
import { Link } from 'react-router-dom'
// import { setThisSectionAsActive } from '../../redux/shopData/shopData.actions'
// import { sectionActive } from '../../redux/shopData/shopData.selectors'

const ShopNavigation = ({
  collectionsNames,
  // sectionActiveNow,
  // dispatch,
  ...props }) => {
  let sectionId = props.match.params.categoryId;
  console.log("shop nav props: ", props);
  console.log("id: ", sectionId);
  // dispatch(setThisSectionAsActive(categoryId));
  return <div id='shop-navigation-wrapper'>
    {collectionsNames.map((name) =>
      <Link
        to={`/shop/${name}`}
        key={name}
        // onClick={() => dispatch(setThisSectionAsActive(name))}
        onClick={() => window.scrollTo(0,0)}
        // className={sectionActiveNow === name ? 'current-section' : ''}
        className={sectionId === name ? 'current-section' : ''}

      > {name}
      </Link>)}
  </div>
}

const mapStateToProps = (state) => ({
  collectionsNames: shopCollectionsNamesURLsInArray(state)
  // sectionActiveNow: sectionActive(state)
})



export default connect(mapStateToProps)(ShopNavigation)
// export default ShopNavigation
