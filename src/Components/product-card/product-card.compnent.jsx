import "./product-card.styles.scss";

function ProductCard({ data }) {
  const { name, imageUrl, price } = data;
  return (
    <div className="col-md-4 col-lg-3 col-sm-6">
      <div className="product-card-container">
        <img src={imageUrl} alt={name} />
        <div className="footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>
        <button>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
