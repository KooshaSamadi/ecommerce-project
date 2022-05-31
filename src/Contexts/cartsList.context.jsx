import { React, createContext, useState, useEffect } from "react";

export const CartsContext = createContext();

const addItemToCartsList = (cartsList, productToadd) => {
  //if new product is available
  const isExisted = cartsList.find(
    (cartlist) => cartlist.id === productToadd.id
  );
  if (isExisted) {
    console.log("true");
    const modifiedArray = cartsList.map((cartlist) =>
      cartlist.id === productToadd.id
        ? { ...cartlist, quantity: cartlist.quantity + 1 }
        : cartlist
    );
    return modifiedArray;
  }

  return [...cartsList, { ...productToadd, quantity: 1 }];
};

export const CartsProvider = ({ children }) => {
  const [cartsList, setCartsList] = useState([]);
  //Handling total Quantity of card items in cart drop down menu
  var totalQuant = 0;
  cartsList.map(({ quantity }) => (totalQuant += quantity));

  const itemAdderHelper = (productToadd) => {
    setCartsList(() => addItemToCartsList(cartsList, productToadd));
  };

  const value = { cartsList, itemAdderHelper, totalQuant };

  return (
    <CartsContext.Provider value={value}>{children}</CartsContext.Provider>
  );
};
