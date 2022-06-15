import "./checkout.styles.scss";
import { React, useContext } from "react";
import { CartsContext } from "../../Contexts/cartsList.context";
import CheckoutItem from "../../Components/checkout-item/checkoutItem.component";
import PaymentForm from "../../Components/payment-form/payment-form.component";
function Checkout() {
  const { cartsList, totalPrice } = useContext(CartsContext);

  return (
    <section className="container-xxl checkout-items-container">
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Description</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartsList.map((item) => (
              <CheckoutItem key={item.id} info={item} />
            ))}
          </tbody>
        </table>
        <p className="total-price">Total: ${totalPrice}</p>
      </div>
      <PaymentForm />
    </section>
  );
}

export default Checkout;
