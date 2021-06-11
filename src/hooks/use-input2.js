import { useState } from "react";

const useInput2 = () => {
  const [input, setInput] = useState("");
  const [inputValid, setInputValid] = useState(false);
const [inputTouched, setInputTouched] = useState(false);

  const inputHandler = (event) => {
    setInput(event.target.value);
  };

  const blurHandler = (event) => {
    setInputTouched(true);
  };

  const reset = (event) => {
    setInput("");
    setInputValid(false);
  };

  return {
    input,
    valid: inputValid,
    reset,
    inputHandler,
    blurHandler
  };
};

export default useInput2;
