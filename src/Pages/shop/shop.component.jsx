import "./shop.styles.scss";
import { React, useContext, Fragment } from "react";
import { CategoriesContext } from "../../Contexts/categories.context";
import CategotyPreview from "../../Components/category-preview/category-preview.component";
function Shop() {
  const { categoriesMap } = useContext(CategoriesContext);
  // console.log(products);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => (
        //  console.log(categoriesMap),
        <CategotyPreview key={title} title={title}></CategotyPreview>
      ))}
     
    </Fragment>
  );
}
export default Shop;
