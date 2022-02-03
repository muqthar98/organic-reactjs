import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Vegetable from "./components/Vegetable";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Slide from "./components/Slide";
import Fruits from "./components/Fruits";
import DailyProducts from "./components/DailyProducts";
import OrganicBox from "./components/OrganicBox";
import Product from "./components/Product";
import Contact from "./components/Contact";
import ProductDetail from "./components/ProductDetail";
import SideNav from "./components/SideNav/SideNav";
import Signup from "./components/Signup";

function Routes() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
        <Route path='/product/:id'>
        <ProductDetail/>
        </Route>
          <Route path="/products">
            <h1>Products</h1>
            <Product/>
          </Route>
          <Route path="/signout">
            <h2>Signout</h2>
          </Route>
          <Route path="/wishlist">
            <h2>Wishlist</h2>
          </Route>
          <Route path="/cart">
            <h2>Cart</h2>
          <SideNav/>
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/organic">
            <OrganicBox />
          </Route>
          <Route path="/daily products">
            <DailyProducts />
          </Route>
          <Route path="/fruits">
            <Fruits />
          </Route>
          <Route path="/vegetable">
            <Vegetable />
          </Route>
          <Route path="/">
            <Slide />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
