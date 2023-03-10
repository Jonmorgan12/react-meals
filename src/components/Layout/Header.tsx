import React from "react";
import HeaderCartButton from "./HeaderCartButton/HeaderCartButton";
import styles from "../../styles/Header.module.scss";
import image from "../../assets/react-meals.jpeg";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={image} alt="A table full of food!" />
      </div>
    </>
  );
};

export default Header;
