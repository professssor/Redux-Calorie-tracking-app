import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Store/Store.js";
// react router dom cover
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Exercises from "./Screens/Exercises.jsx";

import Goal from "./Screens/Goal.jsx";
import Food from "./Screens/Food.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        {" "}
        <Routes>
          <Route path="/" element={<App />} />
          {/* exercise Route */}
          <Route path="/exercise" element={<Exercises />} />
          {/* food routes */}
          <Route path="/food" element={<Food />} />
          <Route path="/goal" element={<Goal />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
