import useInput from "../hooks/use-input";

const isNotEmpty = value => value.trim() !== "";
const isEmail = value => value.includes("@");

const BasicForm = (props) => {
  const {
    value: firstName,
    isValid: firstNameValid,
    reset: resetNameInput,
    hasError: firstNameHasError,
    inputBlurHandler: firstNameBlurHandler,
    valueChangeHandler: inputFirstNameHandler,
  } = useInput(isNotEmpty);

  const {
    value: lastName,
    isValid: lastNameValid,
    reset: resetLastNameInput,
    hasError: lastNameHasError,
    inputBlurHandler: lastNameBlurHandler,
    valueChangeHandler: inputLastNameHandler,
  } = useInput(isNotEmpty);

  const {
    value: email,
    isValid: emailValid,
    reset: resetEmailInput,
    hasError: emailHasError,
    valueChangeHandler: inputEmailHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput(isEmail);

  let formIsValid = false;

  if (firstNameValid && lastNameValid && emailValid) {
    formIsValid = true;
    console.log("form is valid")
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
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
