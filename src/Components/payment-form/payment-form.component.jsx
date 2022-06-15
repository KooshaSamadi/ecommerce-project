import "./payment-form.styles.scss";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

function PaymentForm() {
  const stripe = useStripe();
  const element = useElements();

  const PaymentHandlder = (event) => {
    if (!stripe || !element) {
      return;
    }
  };
  return (
    <div className="payment-form">
      <h2>Credit Card Payment:</h2>
      <form onSubmit={PaymentHandlder}>
        <CardElement className="payment-card" />
        <button type="submit" className="btn btn-outline-info btn-payment">
          Pay now
        </button>
      </form>
    </div>
  );
}

export default PaymentForm;
