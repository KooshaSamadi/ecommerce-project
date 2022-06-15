import "./cart-dropdown.scss";
import { React, useContext } from "react";
import CartItem from "../cart-item/cartitem.component";
import { CartsContext } from "../../Contexts/cartsList.context";
import { Link } from "react-router-dom";

function CartDropDown() {
  const { cartsList } = useContext(CartsContext);
 // console.log(cartsList);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartsList.length !== 0 ? (
          cartsList.map((item) => <CartItem key={item.id} cartInfo={item} />)
        ) : (
          <span className="empty-message">This cart is empty</span>
        )}
      </div>
      <Link to="checkout">
        <button>Go to checkout</button>
      </Link>
    </div>
  );
}

export default CartDropDown;
