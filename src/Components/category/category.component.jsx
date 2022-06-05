import "./category.styles.scss";
import { useParams } from "react-router-dom";
import { React, useContext } from "react";
import { CategoriesContext } from "../../Contexts/categories.context";
import ProductCard from "../../Components/product-card/product-card.compnent";
function Category() {
  const { categoriesMap } = useContext(CategoriesContext);
  const { categoryPath } = useParams();
  //console.log(categoryPath);
  return (
    <section className="category-container container-xxl">
      <div className="row">
        {categoriesMap[categoryPath] &&
          categoriesMap[categoryPath].map((item) => (
            <ProductCard key={item.id} data={item} />
          ))}
      </div>
    </section>
  );
}

export default Category;
