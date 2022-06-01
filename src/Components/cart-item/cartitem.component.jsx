import "./cartitem.styles.scss";
import logo from "../../Assets/deleteIcon.png";
import { React, useContext } from "react";
import { CartsContext } from "../../Contexts/cartsList.context";
function CartItem({ cartInfo }) {
  const { name, price, imageUrl, quantity, id } = cartInfo;
  const { decrementItemHandler } = useContext(CartsContext);

  return (
    <div className="cart-item">
      <img src={imageUrl} alt="" />
      <div className="cart-itemDetail">
        <h2>{name} </h2>
        <p>
          <b> {quantity}</b> &#215; &#36;{price}
        </p>
      </div>

      <img
        onClick={() => decrementItemHandler(cartInfo)}
        src="https://img.icons8.com/external-line-icons-royyan-wijaya/64/undefined/external-delete-gloria-interface-line-line-icons-royyan-wijaya-2.png"
        className="delete-btn"
      />
    </div>
  );
}

export default CartItem;
