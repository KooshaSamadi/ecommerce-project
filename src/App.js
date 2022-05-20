import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Homepage from "./Pages/homepage/homepage.component";
import Navigation from "./Components/navigation/navigation.component";
import Authentication from "./Pages/authentication/authentication.component";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Homepage />} />
          <Route path="authentication" element={<Authentication />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
