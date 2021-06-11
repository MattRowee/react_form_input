import { wait } from "@testing-library/dom";
import useInput2 from "../hooks/use-input2";

const BasicForm = (props) => {
  const {
    input: firstName,
    valid: firstNameValid,
    reset: resetNameInput,
    blurHandler: firstNameBlurHandler,
    inputHandler: inputFirstNameHandler,
  } = useInput2((value) => value.trim() !== "");
  const {
    input: lastName,
    valid: lastNameValid,
    reset: resetLastNameInput,
    blurHandler: lastNameBlurHandler,
    inputHandler: inputLastNameHandler,
  } = useInput2((value) => value.trim() !== "");
  const {
    input: email,
    valid: emailValid,
    reset: resetEmailInput,
    inputHandler: inputEmailHandler,
    blurHandler: emailBlurHandler,
  } = useInput2((value) => value.includes("@"));

  let formIsValid = false;

  if (firstNameValid && lastNameValid && emailValid) {
    formIsValid = true;
    console.log("form is valid")
  }

  const formSubmitHandler = () => {
    if (!formIsValid === true) {
      return;
    }
    console.log(firstName, lastName, email, "all valid!");
    setTimeout(() => {console.log(firstName, lastName, email, "all valid!");}, 3000);

    resetNameInput();
    resetEmailInput();
    resetLastNameInput();
  };

  // const inputClasses = firstNameValid ? "form-control" : "form-control invalid";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            onChange={inputFirstNameHandler}
            onBlur={firstNameBlurHandler}
            type="text"
            id="name"
            value={firstName}
          />
          {/* {!firstNameValid && (
            <p className={inputClasses}>Input valid first name</p>
          )} */}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastName}
            onChange={inputLastNameHandler}
            onBlur={lastNameBlurHandler}
          />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={inputEmailHandler}
          onBlur={emailBlurHandler}
        />
      </div>
      <div className="form-actions">
        <button >Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
