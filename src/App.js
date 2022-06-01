import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Homepage from "./Pages/homepage/homepage.component";
import Navigation from "./Components/navigation/navigation.component";
import Authentication from "./Pages/authentication/authentication.component";
import Shop from "./Pages/shop/shop.component";
import Checkout from "./Pages/checkout/checkout.component";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Homepage />} />
          <Route path="authentication" element={<Authentication />} />
          <Route path="shop" element={<Shop />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
