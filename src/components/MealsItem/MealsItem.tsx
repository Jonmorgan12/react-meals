import React, { useContext } from "react";
import MealItemForm from "./MealsItemForm";
import CartContext from "../store/cartContext";
import styles from "../../styles/MealsItem.module.scss";

interface MealsItemPropTypes {
  id: string;
  name: string;
  description: string;
  price: number;
}

const MealsItem = ({ id, name, description, price }: MealsItemPropTypes) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount: any) => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>${price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealsItem;
