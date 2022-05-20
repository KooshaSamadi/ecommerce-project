import "./singUpForm.styles.scss";
import { useState, React } from "react";
import {
  createUserDocumentFromEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../Utils/firebase/firebase.utils";

import FormInput from "../formInput/formInput.component";

//Primary value of inputs which is null
const primaryFormFields = {
  displayName: "",
  email: "",
  passsword: "",
  confirmPassword: "",
};

function SingUpForm() {
  const [formFields, setFormFields] = useState(primaryFormFields);
  const { displayName, email, passsword, confirmPassword } = formFields;
  //  console.log(formFields);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (passsword !== confirmPassword) {
      alert("Password and Confirm Password do not match");
      return;
    }

    try {
      const { user } = await createUserDocumentFromEmailAndPassword(
        email,
        passsword
      );
      // console.log(user);
      createUserDocumentFromAuth(user, { displayName });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <section className="signup-container col-6">
      <div>
        <h2>I do not have a account?</h2>
        <span>Sign up with your email and password</span>
      </div>
      <form onSubmit={submitHandler}>
        <FormInput
          label="Display Name"
          type="text"
          required
          value={displayName}
          name="displayName"
          id="displayName"
          onChange={changeHandler}
        />

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
          name="passsword"
          id="passsword"
          required
          value={passsword}
          onChange={changeHandler}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          onChange={changeHandler}
          required
          value={confirmPassword}
        />

        <button type="submit" className="button-container">
          Sign Up
        </button>
      </form>
    </section>
  );
}

export default SingUpForm;
