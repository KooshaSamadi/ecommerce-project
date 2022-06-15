import { createContext, useState, useEffect, useReducer } from "react";
import { onAuthStateChangedListener } from "../Utils/firebase/firebase.utils";
export const UserContext = createContext();

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const userReducer = (prevState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...prevState, currentUser: payload };
    default:
      throw new Error("Error in userReducer");
  }
};
export const INITIAL_STATE = {
  currentUser: null,
};

export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
  };
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
