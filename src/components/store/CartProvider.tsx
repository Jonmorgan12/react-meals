import React from "react";
import CartContext from "./cartContext";

const CartProvider = (props: any) => {
  const addItemToCart = (item: any) => {};

  const removeItemFromCart = (id: string) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
