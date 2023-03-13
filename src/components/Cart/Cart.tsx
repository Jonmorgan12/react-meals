import React, { useContext, useState } from "react";
import CartContext from "../store/cartContext";
import Modal from "../UI/Modal";
import CartItem from "../Cart/CartItem";
import Checkout from "../Cart/Checkout";
import styles from "../../styles/Cart.module.scss";

interface CartPropTypes {
  onClose: () => void;
}

const Cart = ({ onClose }: CartPropTypes) => {
  const [isOrdered, setIsOrdered] = useState<boolean>(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id: string) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item: object) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const handleOrder = () => {
    setIsOrdered(true);
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={styles.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      {isOrdered && <Checkout onCancel={onClose} />}
      {!isOrdered && (
        <div className={styles.actions}>
          <button className={styles["button--alt"]} onClick={onClose}>
            Close
          </button>
          {hasItems && (
            <button className={styles.button} onClick={handleOrder}>
              Order
            </button>
          )}
        </div>
      )}
    </Modal>
  );
};

export default Cart;
