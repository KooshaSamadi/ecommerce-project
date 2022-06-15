import "./category.styles.scss";
import { useParams } from "react-router-dom";
import { React, useContext, useState } from "react";
import { CategoriesContext } from "../../Contexts/categories.context";
import ProductCard from "../../Components/product-card/product-card.compnent";
function Category() {
  const { categoriesMap } = useContext(CategoriesContext);
  const { categoryPath } = useParams();
  const [title, setTitle] = useState(categoryPath);
  //console.log(categoryPath);
  return (
    <section className="category-container container-xxl">
      <h1>
        <span>{categoriesMap[categoryPath] && title.toUpperCase()}</span>
      </h1>
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
