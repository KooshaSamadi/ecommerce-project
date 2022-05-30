import { React } from "react";
import { ReactComponent as ShoppingIcon } from "../../Assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

function CardIcon() {
  return (
    <div className="card-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">10</span>
    </div>
  );
}

export default CardIcon;
