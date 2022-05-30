import "./singUpForm.styles.scss";
import { useState, React } from "react";
import {
  createUserDocumentFromEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../Utils/firebase/firebase.utils";
import Modal from "../modal/modal.component";
import FormInput from "../formInput/formInput.component";

//Primary value of inputs which is null
const primaryFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SingUpForm() {
  const [formFields, setFormFields] = useState(primaryFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  //For modal
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const resetFormFields = () => {
    setFormFields(() => primaryFormFields);
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setIsOpen(true);
      setMessage("Password and Confirm Password do not match");
      return;
    }

    try {
      const { user } = await createUserDocumentFromEmailAndPassword(
        email,
        password
      );
      // console.log(user);
      createUserDocumentFromAuth(user, { displayName });
    } catch (error) {
      setIsOpen(true);
      setMessage(error.message);
    }
    resetFormFields();
  };

  return (
    <section className="signup-container col-md-6 ">
      <Modal setIsOpen={setIsOpen} isOpen={isOpen} message={message} />
      <div>
        <h2>I do not have an account?</h2>
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
          name="password"
          id="password"
          required
          value={password}
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
