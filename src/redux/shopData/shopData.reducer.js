import shopData from '../../pages/shopPageData'

const INITIAL_STATE = {
  shopData: shopData
  // sectionActive: ''
}

const shopDataReducer = (state = INITIAL_STATE, action) => {
  console.log("shop action fired");
  switch (action.type) {
    case 'SET_ACTIVE_SECTION':

      return { ...state, sectionActive: action.payload }

    default: return state;
  }
}

export default shopDataReducer;