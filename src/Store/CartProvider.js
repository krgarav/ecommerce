import React, { useReducer, useContext, useEffect } from "react";
import CartContext from "./cart-context";
import AuthContext from "./auth-context";

let defaultCartState = { cartItems: [], quantity: 0 };
let key;
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const existingItemIndex = state.cartItems.findIndex((item) => {
      return item[0].title === action.item.title;
    });

    const existingItem = state.cartItems[existingItemIndex];
    let updatedItem = [];
    if (existingItem) {
      console.log(key);
      const updateItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItem = [...state.cartItems];

      updatedItem[existingItemIndex] = updateItem;
      if (state.cartItems.length != 0) {
        const putData = async () => {
          const mailId = localStorage.getItem("mail");
          const mail = mailId.replace(/@|\./g, "");
          const response = await fetch(
            "https://ecommerse-f1258-default-rtdb.firebaseio.com/" +
              mail +
              "/" +
              key.name +
              "/" +
              ".json",
            {
              method: "PUT",
              body: JSON.stringify(updatedItem),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        };
        putData();
      } else {
        const postData = async () => {
          const mailId = localStorage.getItem("mail");
          const mail = mailId.replace(/@|\./g, "");
          const response = await fetch(
            "https://ecommerse-f1258-default-rtdb.firebaseio.com/" +
              mail +
              ".json",
            {
              method: "POST",
              body: JSON.stringify(updatedItem),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const data = await response.json();
          key = data;
        };
        postData();
      }
    } else {
      const newItem = {
        ...[action.item],
        quantity: 1,
      };
      updatedItem = state.cartItems.concat(newItem);
      if (state.cartItems.length !== 0) {
        const putData = async () => {
          const mailId = localStorage.getItem("mail");
          const mail = mailId.replace(/@|\./g, "");
          const response = await fetch(
            "https://ecommerse-f1258-default-rtdb.firebaseio.com/" +
              mail +
              "/" +
              key.name +
              "/" +
              ".json",
            {
              method: "PUT",
              body: JSON.stringify(updatedItem),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        };
        putData();
      } else {
        const postData = async () => {
          const mailId = localStorage.getItem("mail");
          const mail = mailId.replace(/@|\./g, "");
          const response = await fetch(
            "https://ecommerse-f1258-default-rtdb.firebaseio.com/" +
              mail +
              ".json",
            {
              method: "POST",
              body: JSON.stringify(updatedItem),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const data = await response.json();
          key = data;
        };
        postData();
      }
    }

    return {
      cartItems: updatedItem,
    };
  }
  if (action.type === "REMOVE") {
    const updatednewItem = state.cartItems.filter(
      (item) => item[0].title != action.id
    );

    const mailId = localStorage.getItem("mail");
    const mail = mailId.replace(/@|\./g, "");
    if (state.cartItems.length === 1) {
      const response = fetch(
        "https://ecommerse-f1258-default-rtdb.firebaseio.com/" +
          mail +
          "/" +
          key +
          "/" +
          ".json",
        {
          method: "DELETE",
        }
      );
    } else {
      const postData = async () => {
        const response = await fetch(
          "https://ecommerse-f1258-default-rtdb.firebaseio.com/" +
            mail +
            "/" +
            key +
            "/" +
            ".json",
          {
            method: "PUT",
            body: JSON.stringify(updatednewItem),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      };

      postData();
    }

    return {
      cartItems: updatednewItem,
    };
  }
  if (action.type === "LOAD") {
    const updatedItem = action.item;

    return { cartItems: updatedItem };
  }
  if (action.type === "RESET") {
    const mailId = localStorage.getItem("mail");
    const mail = mailId.replace(/@|\./g, "");
    const response = fetch(
      "https://ecommerse-f1258-default-rtdb.firebaseio.com/" +
        mail +
        "/" +
        key +
        "/" +
        ".json",
      {
        method: "DELETE",
      }
    );
    localStorage.clear();
    return defaultCartState;
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
      const keyGot = Object.keys(data)[0];
      key = keyGot;
      console.log(keyGot);
      const length = Object.keys(data).length;
      const items = Object.entries(data)[length - 1];
      if (items[1]) {
        dispatchCartState({ type: "LOAD", item: items[1] });
      }
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
  const resetCartItemsHandler = () => {
    dispatchCartState({ type: "RESET" });
  };
  const cartContext = {
    cartItems: cartState.cartItems,
    quantity: cartState.quantity,
    addToCartItems: addToCartItemsHandler,
    removeFromCartItems: removeFromCartItemsHandler,
    resetCartItems: resetCartItemsHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
