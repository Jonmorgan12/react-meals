import React from "react";
import Card from "../UI/Card.tsx";
import { DummyMealsType } from "../../types/dummyMeals";
import styles from "../../styles/AvailableMeals.module.scss";

const DUMMY_MEALS: DummyMealsType[] = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal, id) => {
            return <li key={id}>{meal.name}</li>;
          })}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
