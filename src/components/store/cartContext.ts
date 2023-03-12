import { createContext } from "react";

interface CartItemsType {
  id: string;
  items: [];
  name: string;
  amount: number;
  price: number;
}

interface CartContextTypes {
  items: CartItemsType[];
  totalAmount: number;
  addItem: (item: any) => void;
  removeItem: (id: string) => void;
}

const CartContext = createContext<CartContextTypes>({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
