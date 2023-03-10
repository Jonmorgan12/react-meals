import React from "react";
import CartIcon from "../../Cart/CartIcon";
import styles from "../../../styles/HeaderCartButton.module.scss";

interface HeaderPropTypes {
  clickEvent: () => void;
}

const HeaderCartButton = ({ clickEvent }: HeaderPropTypes) => {
  return (
    <button className={styles.button} onClick={clickEvent}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
