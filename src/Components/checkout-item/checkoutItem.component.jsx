import "./checkoutItem.styles.scss";
import { React, useContext, Fragment } from "react";
import { CartsContext } from "../../Contexts/cartsList.context";
function CheckoutItem({ info }) {
  const { name, price, imageUrl, quantity, id } = info;
  const {
    cartsList,
    itemAdderHelper,
    decrementItemHandler,
    clearItemHandler,
  
  } = useContext(CartsContext);

  return (
    <Fragment>
      <tr>
        <th>
          <img src={imageUrl} alt={name} />
        </th>
        <td>{name}</td>
        <td>
          <img
            src="https://img.icons8.com/ios-glyphs/15/undefined/less-than.png"
            onClick={() => {
              decrementItemHandler(info);
            }}
          />{" "}
          <span>{quantity}</span>{" "}
          <img
            src="https://img.icons8.com/ios-glyphs/15/undefined/more-than.png"
            onClick={() => {
              itemAdderHelper(info);
            }}
          />
        </td>
        <td>{quantity * price}</td>
        <td>
          <img
            src="https://img.icons8.com/ios-glyphs/30/undefined/filled-trash.png"
            onClick={() => {
              clearItemHandler(info);
            }}
          />
        </td>
      </tr>
    </Fragment>
  );
}

export default CheckoutItem;
