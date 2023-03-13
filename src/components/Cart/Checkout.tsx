import React, { useRef, useState } from "react";
import styles from "../../styles/Checkout.module.scss";

interface CheckoutPropTypes {
  onCancel: () => void;
}

interface FormInputPropTypes {
  name: boolean;
  street: boolean;
  city: boolean;
  postal: boolean;
}

const isEmpty = (value: string) => value.trim() === "";
const isValidChars = (value: string) => value.trim().length === 5;

const Checkout = ({ onCancel }: CheckoutPropTypes) => {
  const [isFormInputValid, setisFormInputValid] = useState<FormInputPropTypes>({
    name: true,
    street: true,
    city: true,
    postal: true,
  });

  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const streetInputRef = useRef<HTMLInputElement | null>(null);
  const postalInputRef = useRef<HTMLInputElement | null>(null);
  const cityInputRef = useRef<HTMLInputElement | null>(null);

  const handleConfirm = (event: any) => {
    event.preventDefault();

    const enteredName = nameInputRef?.current?.value!;
    const enteredStreet = nameInputRef?.current?.value!;
    const enteredPostal = nameInputRef?.current?.value!;
    const enteredCity = nameInputRef?.current?.value!;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalIsValid = !isValidChars(enteredPostal);

    setisFormInputValid({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postal: enteredPostalIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalIsValid;

    if (!formIsValid) {
      return;
    }
  };

  const controlClasses = (formInputField: any) => {
    return `${styles.control} ${
      isFormInputValid[formInputField] ? "" : styles.invalid
    }`;
  };

  return (
    <form className={styles.form} onSubmit={handleConfirm}>
      <div className={controlClasses("name")}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!isFormInputValid.name && <p>Please enter a valid name.</p>}
      </div>
      <div className={styles.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!isFormInputValid.name && <p>Please enter a valid street.</p>}
      </div>
      <div className={styles.control}>
        <label htmlFor="postal">Postal</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!isFormInputValid.name && <p>Please enter a valid postal.</p>}
      </div>
      <div className={styles.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!isFormInputValid.name && <p>Please enter a valid city.</p>}
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button className={styles.submit} onClick={handleConfirm}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
