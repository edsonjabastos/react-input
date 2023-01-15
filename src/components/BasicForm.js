import useInputX from "../hooks/use-inputx";

const BasicForm = (props) => {
  const {
    enteredValue: enteredFirstName,
    isValid: fnameIsValid,
    hasError: fnameHasError,
    enteredValueHandler: fnameEnteredValueHandler,
    blurHandler: fnameBlurHandler,
    reset: fnameReset,
  } = useInputX((value) => value.trim() !== "");
  const {
    enteredValue: enteredLastName,
    isValid: lnameIsValid,
    hasError: lnameHasError,
    enteredValueHandler: lnameEnteredValueHandler,
    blurHandler: lnameBlurHandler,
    reset: lnameReset,
  } = useInputX((value) => value.trim() !== "");
  const {
    enteredValue: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    enteredValueHandler: emailEnteredValueHandler,
    blurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInputX((value) => value.includes("@"));

  let formIsValid = false;
  if (fnameIsValid && lnameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!fnameIsValid && !lnameIsValid && !emailIsValid) {
      return;
    }
    console.log("Submitted!");
    console.log(`
    First Name: ${enteredFirstName}\n
    Last Name: ${enteredLastName}\n
    E-mail: ${enteredEmail}
    `);
    fnameReset();
    lnameReset();
    emailReset();
  };

  const firstNameInputClasses = fnameHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameInputClasses = lnameHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={fnameEnteredValueHandler}
            onBlur={fnameBlurHandler}
            value={enteredFirstName}
          />
          {fnameHasError && <p>Ta errado!</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            onChange={lnameEnteredValueHandler}
            onBlur={lnameBlurHandler}
            value={enteredLastName}
          />
          {lnameHasError && <p>Ta errado!</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailEnteredValueHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailHasError && <p>Ta errado!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
