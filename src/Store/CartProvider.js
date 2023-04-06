import React, { useReducer } from "react";
import CartContext from "./cart-context";
const defaultCartState = { cartItems: [], quantity: 0 };
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
  
    const existingItemIndex = state.cartItems.findIndex((item) => {
   
      return item[0].title === action.item.title;
    });
   
    const existingItem = state.cartItems[existingItemIndex];
    let updatedItem = [];
    if (existingItem) {
      // console.log("Item Exist")
      console.log()
      const updateItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItem = [...state.cartItems];

      updatedItem[existingItemIndex] = updateItem;
    
    } else {
     
      const newItem ={
       ...[action.item],
        quantity:1
      }
      updatedItem = state.cartItems.concat(newItem);
    }

    return {
      cartItems: updatedItem,
    };
  }
  if (action.type === "REMOVE") {
    //  const itemf= state.cartItems.findIndex((item)=>{return item.title===action.id})
    // const existingCartItem = state.cartItems[itemf]
    const updatedItem = state.cartItems.filter(
      (item) => item.title != action.id
    );
    console.log(updatedItem);
    return {
      cartItems: updatedItem,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addToCartItemsHandler = (item) => {
    dispatchCartState({ type: "ADD", item: item });
  };
  const removeFromCartItemsHandler = (id) => {
    dispatchCartState({ type: "REMOVE", id: id });
  };
  const cartContext = {
    cartItems: cartState.cartItems,
    quantity: cartState.quantity,
    addToCartItems: addToCartItemsHandler,
    removeFromCartItems: removeFromCartItemsHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
