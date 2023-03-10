import React from "react";
import { InputPropTypes } from "../../types/Input";
import styles from "../../styles/Input.module.scss";

const Input = ({ label, input }: InputPropTypes) => {
  return (
    <div className={styles.input}>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} />
    </div>
  );
};

export default Input;
