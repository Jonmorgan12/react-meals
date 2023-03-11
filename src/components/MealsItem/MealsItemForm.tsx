import React, { useRef, useState } from "react";
import Input from "../UI/Input";
import styles from "../../styles/MealsItemForm.module.scss";

const MealsItemForm = () => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  // NOTE: fix event
  const submitHandler = (event: any) => {
    event.preventDefault();

    // NOTE: Fix ts error here
    const enteredAmount = amountInputRef.current.value;
    // NOTE: Converts string to number +
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealsItemForm;
