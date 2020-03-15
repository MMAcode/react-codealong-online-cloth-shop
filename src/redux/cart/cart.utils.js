export const addItemToCartArrayReturnCartState = (itemToAdd, cartState) => {
  let existingArray = cartState.cartItems;

  // let { existingArray, cartCounter } = state;
  // let itemExistsInArrayAlready = false;
  // let item;
  // for (let item of existingArray) {
  //   if (item.name === itemToAdd.name) {
  //     item.count++;
  //     itemExistsInArrayAlready = true;
  //     break;
  //   }
  // }
  // if (!itemExistsInArrayAlready) {
  //   itemToAdd.count = 1;
  //   existingArray.push(itemToAdd);
  // }


  // USING FIND METHOD INSTEAD OF 'FOR LOOP'
  let itemExistsInArray = existingArray.find(item => item.name === itemToAdd.name);
  if (itemExistsInArray) { itemExistsInArray.count++; }
  else {
    itemToAdd.count = 1;
    existingArray.push(itemToAdd);
  }

  //MAKING NEW ARRAY To enable DOM re-rendering
  // let newArray = existingArray.map(item => ({ ...item }));
  // cartState.cartItems = [...existingArray];
  // cartState.cartItems = [...cartState.cartItems];
  cartState.cartItems = cartState.cartItems.map(item => ({ ...item }));  //best because it considers changes within the item (like item count) too!!!



  // cartState.cartCounter++;


  // return existingArray;
  // return {...cartState};
  return cartState;

};


export const remove1item = (itemToRemove, items) => {
  // let newArray = items.map(item => { 
  //   if (itemToRemove.name === item.name) {
  //     item.count--;
  //     return item.count === 0 ? null : {...item}; 
  //    }
  //   else return item;
  // })
  // return newArray;

  if (itemToRemove.count === 1) return items.filter(item => item.name !== itemToRemove.name);
  else {
    console.log("more than 1 item found...")
    let newArray = items.map(item => item.name === itemToRemove.name ? { ...item, count: item.count - 1 } : item)
    // console.log(newArray)
    return newArray;

    ////following code doesn't work because it doesn't make new object/array - new item and therefore doesn;t update DOM
    // itemFound.count--;
    // console.log(items)
    // return [...items];
  }
}