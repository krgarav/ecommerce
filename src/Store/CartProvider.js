import React, { useReducer, useContext, useEffect, useState } from "react";
import CartContext from "./cart-context";
import AuthContext from "./auth-context";

let defaultCartState = { cartItems: [], quantity: 0 };

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const existingItemIndex = state.cartItems.findIndex((item) => {
      return item[0].title === action.item.title;
    });

    const existingItem = state.cartItems[existingItemIndex];
    let updatedItem = [];
    if (existingItem) {
      const updateItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItem = [...state.cartItems];

      updatedItem[existingItemIndex] = updateItem;
    } else {
      const newItem = {
        ...[action.item],
        quantity: 1,
      };
      updatedItem = state.cartItems.concat(newItem);
    }

    const mailId = localStorage.getItem("mail");
    const mail = mailId.replace(/@|\./g, "");

    const response = fetch(
      "https://ecommerse-f1258-default-rtdb.firebaseio.com/" + mail + ".json",
      {
        method: "POST",
        body: JSON.stringify(updatedItem),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return {
      cartItems: updatedItem,
    };
  }
  if (action.type === "REMOVE") {
    const updatedItem = state.cartItems.filter(
      (item) => item[0].title != action.id
    );
    const mailId = localStorage.getItem("mail");
    const mail = mailId.replace(/@|\./g, "");

    const response = fetch(
      "https://ecommerse-f1258-default-rtdb.firebaseio.com/" + mail + ".json",
      {
        method: "POST",
        body: JSON.stringify(updatedItem),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return {
      cartItems: updatedItem,
    };
  }
  if (action.type === "LOAD") {
    const item = action.item;
    const updatedItem = action.item;

    return { cartItems: updatedItem };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    const fetchData = async () => {
      const mailId = localStorage.getItem("mail");
      const mail = mailId.replace(/@|\./g, "");
      const response = await fetch(
        "https://ecommerse-f1258-default-rtdb.firebaseio.com/" + mail + ".json"
      );
      const data = await response.json();

      const dat = await data;

      const length = Object.keys(data).length;
      const items = Object.entries(data)[length - 1];

      // console.log(items[1]);
      dispatchCartState({ type: "LOAD", item: items[1] });
    };
    fetchData();
  }, []);

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
