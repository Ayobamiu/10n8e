import "./css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCoffee } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import logo from "../../../assets/img/10n80logo.png";
import HomePage from "../../screens/HomePage/HomePage";
import AboutPage from "../../screens/AboutPage/AboutPage";
import Fixture from "../../screens/Fixture/Fixture";
import StorePage from "../../screens/StorePage/StorePage";
import ProductDetailsPage from "../../screens/ProductDetailsPage/ProductDetailsPage";
import PaymentPage from "../../screens/PaymentPage/PaymentPage";

const NavBar = (props) => {
  const doTog = () => {
    const menu = document.getElementById("test-toggle");

    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
    } else {
      menu.classList.add("active");
    }
  };
  const addBg = (e) => {
    const allItems = document.querySelectorAll(".item-link");
    allItems.forEach((item) => {
      item.classList.remove("bb");
    });
    e.target.classList.add("bb");
  };

  return (
    <BrowserRouter>
      <div className="navbar">
        <div className="container">
          <ul class="test-toggle" id="test-toggle">
            <li class="logo">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </li>
            <li class="item">
              <Link
                to="/"
                className={`item-link ${
                  window.location.pathname === "/" && "bb"
                }`}
                onClick={addBg}
              >
                Home
              </Link>
            </li>
            <li class="item">
              <Link
                to="/store"
                className="item-link"
                className={`item-link ${
                  window.location.pathname === "/store" && "bb"
                }`}
                onClick={addBg}
              >
                Store
              </Link>
            </li>
            <li class="item">
              <Link
                to="/about"
                className={`item-link ${
                  window.location.pathname === "/about" && "bb"
                }`}
                onClick={addBg}
              >
                About us
              </Link>
            </li>
            <li class="item">
              <Link
                to="/fixture"
                className={`item-link ${
                  window.location.pathname === "/fixture" && "bb"
                }`}
                onClick={addBg}
              >
                Fixtures
              </Link>
            </li>
            <li class="toggle" onClick={doTog}>
              <Link to="#">
                <FontAwesomeIcon icon={faBars} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Switch>
        <Route component={PaymentPage} path="/pay" />
        <Route component={ProductDetailsPage} path="/store/:productId" />
        <Route component={StorePage} path="/store" />
        <Route component={Fixture} path="/fixture" />
        <Route component={AboutPage} path="/about" />
        <Route component={HomePage} path="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default NavBar;
