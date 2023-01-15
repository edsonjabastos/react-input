import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }
  if (action.type === "RESET") {
    return initialInputState;
  }
  return initialInputState;
};

const useInputX = (validateFunc) => {
  const [inputState, dispatchInputState] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const isValid = validateFunc(inputState.value);
  const hasError = !isValid && inputState.isTouched;

  const enteredValueHandler = (event) => {
    dispatchInputState({ type: "INPUT", value: event.target.value });
  };

  const blurHandler = (event) => {
    dispatchInputState({ type: "BLUR" });
  };

  const reset = () => {
    dispatchInputState({ type: "RESET" });
  };

  return {
    enteredValue: inputState.value,
    isValid,
    hasError,
    enteredValueHandler,
    blurHandler,
    reset,
  };
};

export default useInputX;
