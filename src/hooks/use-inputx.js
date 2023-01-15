import { useState } from "react";

const useInputX = (validateFunc) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validateFunc(enteredValue);
  const hasError = !isValid && isTouched

  const enteredValueHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const blurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  }

  return {
    enteredValue,
    isValid,
    hasError,
    enteredValueHandler,
    blurHandler,
    reset,
  };
};

export default useInputX;
