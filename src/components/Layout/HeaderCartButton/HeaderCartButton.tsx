import React, { useContext } from "react";
import CartIcon from "../../Cart/CartIcon";
import CartContext from "../../store/cartContext";
import styles from "../../../styles/HeaderCartButton.module.scss";

interface HeaderPropTypes {
  clickEvent: () => void;
}

const HeaderCartButton = ({ clickEvent }: HeaderPropTypes) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);

  return (
    <button className={styles.button} onClick={clickEvent}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
