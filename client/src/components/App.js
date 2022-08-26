import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AboutUs from "./AboutUs";
import ShopPage from "./ShopPage";
import WelcomePage from "./WelcomePage";
import GlobalStyles from "../styles/GlobalStyles";


const App = () => {
  return (
    <BrowserRouter>
    <GlobalStyles/>
      <Switch>
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route exact path="/shop">
          <ShopPage />
        </Route>
        <Route exact path="/shop/items/:itemId">
          itemid
        </Route>
        <Route exact path="/checkout">
          checkout
        </Route>
        <Route exact path="/shop/categories/:categoryId">
          catagory
        </Route>
        <Route exact path="/company/:companyId">
          company
        </Route>
        <Route exact path="/previous-purchases">
          previous purchases
        </Route>
        <Route exact path="/about-us">
          <AboutUs />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
