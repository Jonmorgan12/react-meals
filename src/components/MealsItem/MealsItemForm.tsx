import React from "react";
import Input from "../UI/Input";
import styles from "../../styles/MealsItemForm.module.scss";

const MealsItemForm = (props: any) => {
  return (
    <form className={styles.form}>
      <Input
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
    </form>
  );
};

export default MealsItemForm;
