import { React, createContext, useState, useEffect } from "react";

export const CartsContext = createContext();

const addItemToCartsList = (cartsList, productToadd) => {
  //if new product is available
  const isExisted = cartsList.find(
    (cartlist) => cartlist.id === productToadd.id
  );
  if (isExisted) {
    const modifiedArray = cartsList.map((cartlist) =>
      cartlist.id === productToadd.id
        ? { ...cartlist, quantity: cartlist.quantity + 1 }
        : cartlist
    );
    return modifiedArray;
  }

  return [...cartsList, { ...productToadd, quantity: 1 }];
};
const decrementItemfromCartsList = (cartsList, productTodecrement) => {
  const removeItem = cartsList.find(
    (item) => item.id === productTodecrement.id
  );
  //console.log(removeItem);
  if (removeItem.quantity === 1) {
    //console.log("1");
    return cartsList.filter((item) => item.id !== removeItem.id);
  }
  return cartsList.map((cartlist) =>
    cartlist.id === productTodecrement.id
      ? { ...cartlist, quantity: cartlist.quantity - 1 }
      : cartlist
  );
};

const clearItemfromCartsList = (cartsList, productToRemove) => {
  return cartsList.filter((item) => item.id !== productToRemove.id);
};

export const CartsProvider = ({ children }) => {
  const [cartsList, setCartsList] = useState([]);
  var [totalPrice, setTotalPrice] = useState(0);
  var [totalQuant, setTotalQuant] = useState(0);
  const [cartToggle, setCartToggle] = useState(false);

  cartsList.map(({ quantity }) => (totalQuant += quantity));

  const itemAdderHelper = (productToadd) => {
    setCartsList(() => addItemToCartsList(cartsList, productToadd));
  };
  const decrementItemHandler = (productTodecrement) => {
    setCartsList(() =>
      decrementItemfromCartsList(cartsList, productTodecrement)
    );
  };
  const clearItemHandler = (productToRemove) => {
    setCartsList(() => clearItemfromCartsList(cartsList, productToRemove));
  };

  useEffect(() => {
    const total = cartsList.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.quantity * currentValue.price,
      0
    );
    setTotalPrice(total);
  }, [cartsList]);

  const value = {
    cartsList,
    itemAdderHelper,
    totalQuant,
    decrementItemHandler,
    clearItemHandler,
    totalPrice,
    cartToggle,
    setCartToggle,
  };

  return (
    <CartsContext.Provider value={value}>{children}</CartsContext.Provider>
  );
};
