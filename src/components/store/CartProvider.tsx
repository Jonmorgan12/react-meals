import React, { useReducer } from "react";
import CartContext from "./cartContext";
// NOTE: Went with useReducer here instead of usestate because the logic to manage state will be complex

enum ACTION_TYPES {
  ADD = "ADD_ITEM_TO_CART",
  REMOVE = "REMOVE_ITEM_FROM_CART",
}

interface ItemsType {
  items: [];
}

interface DefaultCartStateTypes {
  items: ItemsType[];
  totalAmount: number;
}

interface CartProviderPropTypes {
  children: React.ReactNode;
}

// NOTE: Default store state for cart
const defaultCartState: DefaultCartStateTypes = {
  items: [],
  totalAmount: 0,
};

// NOTE: Fix this ts error
const cartReducer = (state: any, action: any) => {
  if (action.type === ACTION_TYPES.ADD) {
    const existingCartItemIndex = state.items.findIndex(
      (item: any) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === ACTION_TYPES.REMOVE) {
    const existingCartItemIndex = state.items.findIndex(
      (item: any) => item.id === action.id
    );

    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item: any) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };

      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

// NOTE: This is where we manage our cart data
const CartProvider = ({ children }: CartProviderPropTypes) => {
  // NOTE: cartState is out initial state, dispatchCartAction is our function to update what kind of event is happening
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCart = (item: any) => {
    // NOTE: Same as item: item
    dispatchCartAction({ type: ACTION_TYPES.ADD, item });
  };

  const removeItemFromCart = (id: string) => {
    // NOTE: Same as id: id
    dispatchCartAction({ type: ACTION_TYPES.REMOVE, id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
