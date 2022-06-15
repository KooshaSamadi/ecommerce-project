import { React, createContext, useState, useEffect } from "react";
import { getCategoriesnAndDocuments } from "../Utils/firebase/firebase.utils";
export const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  // console.log(categoriesMap);
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesnAndDocuments();
      //console.log(categoryMap);
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);
  const value = { categoriesMap, setCategoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
