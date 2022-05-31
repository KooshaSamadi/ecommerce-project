import "./cartitem.styles.scss";
import { React } from "react";
function CartItem({ cartInfo }) {
  const { name, price, imageUrl, quantity, id } = cartInfo;

  return (
    <div className="cart-item">
      <img src={imageUrl} alt="" srcset="" />
      <div className="cart-itemDetail">
        <h2>{name} </h2>
        <p>
          <b> {quantity}</b> &#215; &#36;{price}
        </p>
      </div>
    </div>
  );
}

export default CartItem;
