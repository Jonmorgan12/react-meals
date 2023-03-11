import React, { forwardRef } from "react";
import styles from "../../styles/Input.module.scss";

export interface InputTypes {
  id: "amount";
  type: "number";
  min: "1";
  max: "5";
  step: "1";
  defaultValue: "1";
}

export interface InputPropTypes {
  label: string;
  input: InputTypes;
}

const Input = forwardRef<HTMLInputElement, InputPropTypes>(
  ({ label, input }, ref) => {
    return (
      <div className={styles.input}>
        <label htmlFor={input.id}>{label}</label>
        <input ref={ref} {...input} />
      </div>
    );
  }
);

export default Input;
