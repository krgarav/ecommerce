import React from "react";

const CartContext = React.createContext({
    cartItems:[],
    quantity:0,
    addToCartItems:()=>{},
    removeFromCartItems:()=>{}
});

export default CartContext;