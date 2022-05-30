import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener } from "../Utils/firebase/firebase.utils";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unSubscribe = onAuthStateChangedListener((user) => {
     // console.log(user);
      setCurrentUser(user);
    });

    // console.log(unSubscribe);
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
