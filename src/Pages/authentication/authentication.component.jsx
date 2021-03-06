import { React, useContext } from "react";
import "./authentication.styles.scss";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../Utils/firebase/firebase.utils";
import SingUpForm from "../../Components/singUpForm/singUpForm.component.jsx";
import SignInForm from "../../Components/signInForm/signInForm.component";
import { UserContext } from "../../Contexts/user.context";

function Authentication() {
  const { setCurrentUser } = useContext(UserContext);
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <section className="authentication container-xxl">
      <div className="row">
        <SignInForm logGoogleUser={logGoogleUser} />
        <SingUpForm />
      </div>
    </section>
  );
}

export default Authentication;
