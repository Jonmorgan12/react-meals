import React from "react";
import styles from "../../styles/Checkout.module.scss";

interface CheckoutPropTypes {
  onCancel: () => void;
}

const Checkout = ({ onCancel }: CheckoutPropTypes) => {
  const handleConfirm = (event: any) => {
    event.preventDefault();
  };

  return (
    <form className={styles.form}>
      <div className={styles.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </div>
      <div className={styles.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" />
      </div>
      <div className={styles.control}>
        <label htmlFor="postal">Postal</label>
        <input type="text" id="postal" />
      </div>
      <div className={styles.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button className={styles.submit} onClick={handleConfirm}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
