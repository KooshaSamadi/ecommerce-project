import "./category-preview.styles.scss";
import { React, useContext } from "react";
import { Link } from "react-router-dom";
import { CategoriesContext } from "../../Contexts/categories.context";
import ProductCard from "../../Components/product-card/product-card.compnent";
function CategotyPreview({ title }) {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <section className="category-preview-container container-xxl">
      <h2>
        <Link to={title.toLowerCase()}>{title.toUpperCase()}</Link>
      </h2>
      <div className="row">
        {categoriesMap[title]
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
      </div>
    </section>
  );
}
export default CategotyPreview;
