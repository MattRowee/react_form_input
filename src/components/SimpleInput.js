import { useState } from "react";

const SimpleInput = (props) => {
  //set a ref on the input and just read when we need it (delete the import and the hook from Prod code)
  // const nameInputRef = useRef();
  // setup initial state
  const [enteredName, setEnteredName] = useState("");
  //boolean useState value can add error message
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  //use this in combo w/ the above to have cleaner functionality
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  

  //monitor input values, (bind function to onChange event on input)
  // this gives us event object describing event. from there entered value
  const nameInputChangeHandler = (event) => { 
    setEnteredName(event.target.value);
  
    if (event.target.value.trim() !== "") {
      setEnteredNameIsValid(true);
    };
  };

  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
    };
  };
  
  //default behavior is sending an httpRequest to the server,
  //so we preventDefault
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (enteredName.trim() == "") {
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);

    console.log(enteredName);
    //grab the value from the ref w/ current !! REMOVE THIS CODE IF WE'RE NOT USING IT
    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);

    //reset the value after submission by binding state to value prop and resetting
    //at the end of the function
    setEnteredName("");
  };


  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched

  //variable & terniary expression for assigning correct CSS classes to inputs/labels
  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          // ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
