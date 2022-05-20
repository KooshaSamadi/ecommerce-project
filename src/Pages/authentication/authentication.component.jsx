import React from "react";
import "./authentication.styles.scss";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  createUserDocumentFromEmailAndPassword,
} from "../../Utils/firebase/firebase.utils";
import SingUpForm from "../../Components/singUpForm/singUpForm.component.jsx";
function Authentication() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <section className="authentication container-xxl">
      <div className="row">
        {" "}
        <div className="col-6">
          <button onClick={logGoogleUser}>Sign in with google</button>
        </div>
        <SingUpForm />
      </div>
    </section>
  );
}

export default Authentication;
