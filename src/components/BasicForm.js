import { wait } from "@testing-library/dom";
import useInput2 from "../hooks/use-input2";

const BasicForm = (props) => {
  const {
    input: firstName,
    valid: firstNameValid,
    reset: resetNameInput,
    hasError: firstNameHasError,
    blurHandler: firstNameBlurHandler,
    inputHandler: inputFirstNameHandler,
  } = useInput2((value) => value.trim() !== "");

  const {
    input: lastName,
    valid: lastNameValid,
    reset: resetLastNameInput,
    hasError: lastNameHasError,
    blurHandler: lastNameBlurHandler,
    inputHandler: inputLastNameHandler,
  } = useInput2((value) => value.trim() !== "");

  const {
    input: email,
    valid: emailValid,
    reset: resetEmailInput,
    hasError: emailHasError,
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

  const nameInputClass = firstNameHasError ? "form-control invalid" : "form-control";
  const lastNameInputClass = lastNameHasError ? "form-control invalid" : "form-control";
  const emailInputClass = emailHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={nameInputClass}>
          <label htmlFor="name">First Name</label>
          <input
            onChange={inputFirstNameHandler}
            onBlur={firstNameBlurHandler}
            type="text"
            id="name"
            value={firstName}
          />
          {firstNameHasError && (
            <p className={"error-text"}>Input valid first name</p>
          )}
        </div>
        <div className={lastNameInputClass}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastName}
            onChange={inputLastNameHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && (
            <p className={"error-text"}>Input valid last name</p>
          )}
        </div>
      </div>
      <div className={emailInputClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={inputEmailHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
            <p className={"error-text"}>Input valid email</p>
          )}
      </div>
      <div className="form-actions">
        <button >Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
