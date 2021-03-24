import "./css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCoffee,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import logo from "../../../assets/img/10n80logo.png";
import HomePage from "../../screens/HomePage/HomePage";
import AboutPage from "../../screens/AboutPage/AboutPage";
import Fixture from "../../screens/Fixture/Fixture";
import StorePage from "../../screens/StorePage/StorePage";
import ProductDetailsPage from "../../screens/ProductDetailsPage/ProductDetailsPage";
import PaymentPage from "../../screens/PaymentPage/PaymentPage";
import Upload from "../../screens/Upload/Upload";
import Cart from "../../screens/Cart/Cart";
import { useSelector, useDispatch } from "react-redux";
import { carts } from "../../../store/productSlice";
import FixtureDetailsPage from "../../screens/FixtureDetailsPage/FixtureDetailsPage";
import AdminHome from "../../screens/AdminHome/AdminHome";
import AdminTournaments from "../../screens/AdminTournaments/AdminTournaments";
import AdminHighLights from "../../screens/AdminHighLights/AdminHighLights";
import AdminResults from "../../screens/AdminResults/AdminResults";
import AdminLiveNows from "../../screens/AdminLiveNows/AdminLiveNows";
import AdminSlides from "../../screens/AdminSlides/AdminSlides";

const NavBar = (props) => {
  const cartsNow = useSelector(carts);

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
            {/* <li class="item">
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
            <li class="item store">
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
                to="/tournament"
                className={`item-link ${
                  window.location.pathname === "/tournament" && "bb"
                }`}
                onClick={addBg}
              >
                Tournament
              </Link>
            </li>
            <li class="cart">
              <Link to="/cart" className="item-link" onClick={addBg}>
                <FontAwesomeIcon icon={faShoppingCart} color="#ffa700" />
                <span class="badge rounded-pill bg-yellow top-right">
                  {cartsNow.length}
                </span>
              </Link>
            </li>
            <li class="toggle" onClick={doTog}>
              <Link to="#">
                <FontAwesomeIcon icon={faBars} />
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
      <Switch>
        <Route component={Cart} path="/cart" />
        <Route component={Upload} path="/upload" />
        <Route component={PaymentPage} path="/pay" />
        <Route component={FixtureDetailsPage} path="/tournament/:fixtureId" />
        <Route component={ProductDetailsPage} path="/store/:productId" />
        <Route component={StorePage} path="/store" />
        <Route component={Fixture} path="/tournament" />
        <Route component={AboutPage} path="/about" />
        <Route component={AdminSlides} path="/admin/slides" />
        <Route component={AdminTournaments} path="/admin/tournaments" />
        <Route component={AdminHighLights} path="/admin/highlights" />
        <Route component={AdminResults} path="/admin/results" />
        <Route component={AdminLiveNows} path="/admin/live-now" />
        <Route component={AdminHome} path="/admin" />
        <Route component={HomePage} path="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default NavBar;
