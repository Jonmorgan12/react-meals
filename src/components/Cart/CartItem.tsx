import React from "react";
import styles from "../../styles/CartItem.module.scss";

interface CartItemPropTypes {
  price: number;
  name: string;
  amount: number;
  onRemove: () => void;
  onAdd: () => void;
}

const CartItem = ({
  price,
  name,
  amount,
  onRemove,
  onAdd,
}: CartItemPropTypes) => {
  const itemPrice = `$${price.toFixed(2)}`;

  return (
    <li className={styles["cart-item"]}>
      <div>
        <h2>{name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>{itemPrice}</span>
          <span className={styles.amount}>x {amount}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
