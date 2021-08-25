import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import {
  UserOutlined,
  ShoppingCartOutlined,
  HeartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import DarkModeToggle from "./darkMode/DarkMode";

export default function Header() {
  return (
    <div>
      <div className="header">
        <Link to="/">
          {/* Logo  */}
          <img
            className="header_logo"
            src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png"
            alt=""
          />
        </Link>
        {/*Search Box */}
        <div className="header_searchbox">
          <input className="header_input" />
          <SearchIcon className="header_search" />
        </div>
        {/* NavBar */}
        <div className="links">
          <nav className="navbar navbar-expand-lg navbar-light ">
            <div class="navBarnav" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item ml-3">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-item ml-3">
                  <Link to="/vegetable">Vegetable</Link>
                </li>
                <li className="nav-item ml-3">
                  <Link to="fruits">Fruits</Link>
                </li>
                <li className="nav-item ml-3">
                  <Link to="daily products">Daily Products</Link>
                </li>
                <li className="nav-item ml-3">
                  <Link to="organic">Organic Box</Link>
                </li>
                <li className="nav-item ml-3">
                  <Link to="contact">Contact Us </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        {/* Material Icons */}
        <div className="icons">
          <Link to="/login">
            <UserOutlined className="user" />
          </Link>
          <Link to="/cart">
            <ShoppingCartOutlined className="cart" />
          </Link>
          <Link to="/wishlist">
            <HeartOutlined className="wishlist" />
          </Link>
          <Link to="/signout">
            <LogoutOutlined className="logout" />
          </Link>
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
}
