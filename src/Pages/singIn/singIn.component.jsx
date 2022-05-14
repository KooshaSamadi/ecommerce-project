import React from "react";
import "./singIn.styles.scss";
import {
  signInWithGooglePopup,
  db,
  createUserDocumentFromAuth,
} from "../../Utils/firebase/firebase.utils";
function SingIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      I am singIn
      <button onClick={logGoogleUser}>Sign in with google</button>
    </div>
  );
}

export default SingIn;
