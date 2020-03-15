import { createSelector } from 'reselect';

const getShop = (state) => state.shop;
// export const shopData = createSelector(getShop,shop=>shop.shopData )
export const shopData = createSelector(getShop, shop => shop.shopData)

export const shopCollectionsNamesURLsInArray = createSelector(getShop, shop => {
  // console.log("shopDATA:", shop.shopData);
  // console.log("shopDATA keys:", Object.keys(shop.shopData));
  return (Object.keys(shop.shopData))
  // return ({ keys: "ahoj" })
}
)

export const sectionActive = createSelector(getShop, shop=> shop.sectionActive)

