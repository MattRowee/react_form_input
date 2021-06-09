import { useRef, useState } from "react";

const SimpleInput = (props) => {
  //set a ref on the input and just read when we need it
  const nameInputRef = useRef();
  // setup initial state
  const [enteredName, setEnteredName] = useState("");

  //monitor input values, we bind function to onChange event on input
  // this gives us event object describing event. from there entered value
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  //default behavior is sending an httpRequest to the server,
  //so we preventDefault
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    console.log(enteredName);
    //grab the value from the ref w/ current
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);

    
    //reset the value after submission by binding state to value prop and resetting
    //at the end of the function
    setEnteredName('');
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
