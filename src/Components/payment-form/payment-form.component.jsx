import "./payment-form.styles.scss";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { React, useState } from "react";

function PaymentForm() {
  const [isPaymentFinished, setIsPaymentFinished] = useState(true);
  const stripe = useStripe();
  const elements = useElements();

  const PaymentHandlder = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    
    setIsPaymentFinished(false);
    //deconstruct nested object
    const {
      paymentIntent: { client_secret },
    } = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: 100000 }),
    }).then((res) => res.json());

    // console.log(client_secret);
    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: { name: "Koosha" },
      },
    });
    setIsPaymentFinished(true);
    console.log(paymentResult);
    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("payment succeeded");
      }
    }
  };
  return (
    <div className="payment-form">
      <h2>Credit Card Payment:</h2>
      <form onSubmit={PaymentHandlder}>
        <CardElement className="payment-card" />
        <button
          type="submit"
          className={`${
            !isPaymentFinished ? "disabled" : ""
          } btn btn-outline-info btn-primary btn-payment`}
        >
          {!isPaymentFinished ? (
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
          ) : (
            ""
          )}
          Pay
        </button>
      </form>
    </div>
  );
}

export default PaymentForm;
