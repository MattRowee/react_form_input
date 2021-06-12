import { useState } from "react";

const useInput2 = (validateValue) => {
  const [input, setInput] = useState("");
  const [inputTouched, setInputTouched] = useState(false);

  const valueIsValid = validateValue(input); 
  const hasError = !valueIsValid && inputTouched;

  const inputHandler = (event) => {
    setInput(event.target.value);
  };

  const blurHandler = (event) => {
    setInputTouched(true);
  };

  const reset = (event) => {
    setInput("");
    setInputTouched(false);
  };

  return {
    input,
    valid: valueIsValid,
    hasError,
    reset,
    inputHandler,
    blurHandler,
  };
};

export default useInput2;
