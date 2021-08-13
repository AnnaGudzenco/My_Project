import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Selected from "../pages/Selected/Selected";
import Cart from "../pages/Cart/Cart";
import Nav from "../components/Nav/Nav";
import Home from "../pages/Home/Home";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Nav />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
      <Route exact path="/selected">
        <Selected />
      </Route>
    </BrowserRouter>
  );
}

export default AppRoutes;
