import "./cart-dropdown.scss";
import { React, useContext } from "react";
import CartItem from "../cart-item/cartitem.component";
import { CartsContext } from "../../Contexts/cartsList.context";

function CartDropDown() {
  const { cartsList } = useContext(CartsContext);
  console.log(cartsList);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartsList.map((item) => (
          <CartItem key={item.id} cartInfo={item} />
        ))}
      </div>
      <button>Go to checkout</button>
    </div>
  );
}

export default CartDropDown;
