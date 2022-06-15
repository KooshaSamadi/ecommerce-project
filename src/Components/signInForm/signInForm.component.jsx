import "./signInForm.styles.scss";
import FormInput from "../formInput/formInput.component";
import { React, useState, Fragment } from "react";
import { signUsernWithEmailAndPassword } from "../../Utils/firebase/firebase.utils";
import Modal from "../modal/modal.component";

const primaryValues = { email: "", password: "" };

function SignInForm({ logGoogleUser }) {
  const [formFields, setFormFields] = useState(primaryValues);
  const { email, password } = formFields;
  //getting function from user Context

  //console.log(formFields);
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(() => primaryValues);
  };

  //For modal
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const submitHandler = async (event) => {
    event.preventDefault();
    const response = await signUsernWithEmailAndPassword(email, password);
   // console.log(response);
    switch (response.code) {
      case "auth/wrong-password":
        setIsOpen(true);
        setMessage("Wrong Password");
        break;
      case "auth/network-request-failed":
        setIsOpen(true);
        setMessage("Connection Failed");
        break;
      case "auth/user-not-found":
        setIsOpen(true);
        setMessage("There is no user with this credentials");
        //if everything is correct
        break;
      case undefined:
        break;
      default:
        setIsOpen(true);
        setMessage("Error occured");
        console.log(response.message);
        break;
    }
    resetFormFields();
  };
  //modal state

  return (
    <section className="col-md-6">
      <div className="signin-container">
        <Modal setIsOpen={setIsOpen} isOpen={isOpen} message={message} />
        <div>
          <h2>Already have an account?</h2>
          <span>Sign in with your email and password</span>
        </div>
        <form onSubmit={submitHandler}>
          <FormInput
            label="Email"
            type="email"
            required
            name="email"
            id="email"
            onChange={changeHandler}
            value={email}
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            id="password"
            required
            value={password}
            onChange={changeHandler}
          />
          <div className="button-container">
            <button type="submit" className="button inverted">
              Sign In
            </button>
            <button
              type="button"
              onClick={logGoogleUser}
              className="button google-sign-in"
            >
              Sign in with google
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SignInForm;
