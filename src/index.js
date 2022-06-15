import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Elements } from "@stripe/react-stripe-js";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./Contexts/user.context";
import { CategoriesProvider } from "./Contexts/categories.context";
import { CartsProvider } from "./Contexts/cartsList.context";
import { stripePromise } from "./Utils/stripe/stripe.utils";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartsProvider>
            <Elements stripe={stripePromise}>
              <App />
            </Elements>
          </CartsProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
