import "./shop.styles.scss";
import { React, useContext } from "react";
import { ProductsContext } from "../../Contexts/products.context";
import ProductCard from "../../Components/product-card/product-card.compnent";
function Shop() {
  const { products } = useContext(ProductsContext);
  // console.log(products);
  return (
    <section className="shop container-xxl">
      <div className="row">
        {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </section>
  );
}
export default Shop;
