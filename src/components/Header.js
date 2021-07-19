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
                  <Link to="/">
                    <a className="home" href="#">
                      Home
                    </a>
                  </Link>
                </li>
                <li className="nav-item ml-3">
                  <Link to="/vegetable">
                    <a className="vegetable" href="#">
                      Vegetable
                    </a>
                  </Link>
                </li>
                <li className="nav-item ml-3">
                  <Link to="fruits">
                    <a className="fruits" href="#">
                      Fruits
                    </a>
                  </Link>
                </li>
                <li className="nav-item ml-3">
                  <Link to="daily products">
                    <a className="daily" href="#">
                      Daily Products
                    </a>
                  </Link>
                </li>
                <li className="nav-item ml-3">
                  <Link to="organic">
                    <a className="organic" href="#">
                      Organic Box
                    </a>
                  </Link>
                </li>
                <li className="nav-item ml-3">
                  <Link to="contact">
                    <a className="contact" href="#">
                      Contact Us{" "}
                    </a>
                  </Link>
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
        </div>
      </div>
    </div>
  );
}
