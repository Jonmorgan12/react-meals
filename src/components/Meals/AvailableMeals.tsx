import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import MealsItem from "../MealsItem/MealsItem";
import styles from "../../styles/AvailableMeals.module.scss";

interface MealsDataType {
  id: string;
  name: string;
  description: string;
  price: number;
}

const AvailableMeals = () => {
  const [mealsData, setMealsData] = useState<MealsDataType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [httpError, sethttpError] = useState<undefined>(undefined);

  useEffect(() => {
    const fetchMealsData = async () => {
      const response = await fetch(
        "https://react-meals-85140-default-rtdb.firebaseio.com/Meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      const loadedMeals = Array();

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMealsData(loadedMeals);
      setIsLoading(false);
    };

    fetchMealsData().catch((error) => {
      setIsLoading(false);
      sethttpError(error.message);
    });
  }, []);

  const mealsList = mealsData?.map((meal: MealsDataType) => {
    return (
      <MealsItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });

  if (isLoading) {
    return (
      <section className={styles.mealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={styles.mealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
