import React from "react";
import styles from "../../styles/Card.module.scss";

const Card = (props: any) => {
  return <div className={styles.card}>{props.children}</div>;
};

export default Card;
