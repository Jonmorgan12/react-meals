import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../../Cart/CartIcon";
import CartContext from "../../store/cartContext";
import styles from "../../../styles/HeaderCartButton.module.scss";

interface HeaderPropTypes {
  clickEvent: () => void;
}

const HeaderCartButton = ({ clickEvent }: HeaderPropTypes) => {
  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);

  const buttonClasses = `${styles.button} ${
    buttonIsHighlighted ? styles.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) return;
    setButtonIsHighlighted(true);

    const timeOut = setTimeout(() => {
      setButtonIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timeOut);
    };
  }, [items]);

  return (
    <button className={buttonClasses} onClick={clickEvent}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
