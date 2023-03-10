import React from "react";
import { MealsItemPropTypes } from "../../types/mealsItems";
import styles from "../../styles/MealsItem.module.scss";

const MealsItem = ({ name, description, price }: MealsItemPropTypes) => {
  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>${price.toFixed(2)}</div>
      </div>
      <div></div>
    </li>
  );
};

export default MealsItem;
