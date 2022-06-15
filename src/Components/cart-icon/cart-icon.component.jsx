import { React, useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../Assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { CartsContext } from "../../Contexts/cartsList.context";
function CardIcon() {
  const { totalQuant, setCartToggle, cartToggle } = useContext(CartsContext);

  return (
    <div
      className="card-icon-container"
      onClick={() => setCartToggle(!cartToggle)}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{totalQuant}</span>
    </div>
  );
}

export default CardIcon;
