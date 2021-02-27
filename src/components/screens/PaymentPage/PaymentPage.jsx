import React, { useState } from "react";
import ReactPlayer from "react-player";
import storeImage1 from "../../../assets/img/storeImage1.png";
import product1 from "../../../assets/img/product1.png";
import product2 from "../../../assets/img/product2.png";
import product3 from "../../../assets/img/product3.png";
import storePs1 from "../../../assets/img/storePs1.png";
import storeShirt1 from "../../../assets/img/storeShirt1.png";
import ProductDetailsPageImg from "../../../assets/img/ProductDetailsPageImg.png";
import "./css/style.css";
import Footer from "../../includes/Footer/Footer";
import { Link } from "react-router-dom";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";

const PaymentPage = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const Navv = ({ heading }) => {
    return (
      <div>
        <h1>{heading}</h1>
        <nav
          className="breadcrumb nav nav-tabs"
          role="tablist"
          aria-label="breadcrumb"
        >
          <ol class="breadcrumb">
            <li class="breadcrumb-item" role="presentation">
              <Link to="/pay">Cart</Link>
            </li>
            <li
              class="breadcrumb-item active"
              role="presentation"
              aria-current="page"
            >
              <Link
                className={classnames({ active: activeTab === "1" })}
                onClick={() => {
                  toggle("1");
                }}
              >
                Information
              </Link>
            </li>
            <li class="breadcrumb-item" role="presentation" aria-current="page">
              <Link
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  toggle("2");
                }}
              >
                Shipping
              </Link>
            </li>
            <li class="breadcrumb-item" role="presentation" aria-current="page">
              <Link
                className={classnames({ active: activeTab === "3" })}
                onClick={() => {
                  toggle("3");
                }}
              >
                Payment
              </Link>
            </li>
          </ol>
        </nav>
      </div>
    );
  };

  return (
    <div id="paymentPage">
      <div className="row">
        <div className="col-12 col-md-7">
          <div className="white container">
            <div>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <Row>
                    <Col sm="12">
                      <Navv heading="Payment details" />
                      <form class="row g-3">
                        <div class="col-12 mtb-10">
                          <input
                            type="text"
                            class="form-control"
                            id="inputAddress"
                            placeholder="First name"
                          />
                        </div>
                        <div class="col-12 mtb-10">
                          <input
                            type="text"
                            class="form-control"
                            id="inputAddress2"
                            placeholder="Last name"
                          />
                        </div>
                        <div class="col-12 mtb-10">
                          <input
                            type="text"
                            class="form-control"
                            id="inputAddress2"
                            placeholder="Address"
                          />
                        </div>
                        <div class="col-md-6 mtb-10">
                          <input
                            type="text"
                            class="form-control"
                            id="inputEmail4"
                            placeholder="State"
                          />
                        </div>
                        <div class="col-md-6 mtb-10">
                          <input
                            type="text"
                            class="form-control"
                            id="inputPassword4"
                            placeholder="City"
                          />
                        </div>
                        <div class="col-md-6 mtb-10">
                          <input
                            type="text"
                            class="form-control"
                            id="inputEmail4"
                            placeholder="Town"
                          />
                        </div>
                        <div class="col-md-6 mtb-10">
                          <input
                            type="text"
                            class="form-control"
                            id="inputPassword4"
                            placeholder="Phone number"
                          />
                        </div>

                        <div class="row justify-content-between">
                          <div
                            className="col-4 mtb-10 peach-text"
                            data-bs-toggle="tab"
                            data-bs-target="#cart"
                            type="button"
                            role="tab"
                          >
                            &#12296; Back to cart
                          </div>
                          <div className="col-3 mtb-10">
                            <button
                              class="btn btn-primary"
                              onClick={(e) => {
                                e.preventDefault();
                                toggle("2");
                              }}
                            >
                              Continue
                            </button>
                          </div>
                        </div>
                      </form>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <Row>
                    <div className="shipping-form">
                      <Navv heading="Confirm details" />
                      <form class="row g-3">
                        <div className="border long-form">
                          <div class="mb-3 row">
                            <label
                              for="inputPassword"
                              class="col-sm-3 col-form-label"
                            >
                              Email
                            </label>
                            <div class="col-sm-9 text-truncate">
                              <input
                                type="password"
                                class="form-control"
                                id="inputPassword"
                                placeholder="ratdans@gmail.com"
                              />
                            </div>
                          </div>
                          <div class="mb-3 row">
                            <label
                              for="inputPassword"
                              class="col-sm-3 col-form-label"
                            >
                              Phone no.
                            </label>
                            <div class="col-sm-9 text-truncate">
                              <input
                                type="password"
                                class="form-control"
                                id="inputPassword"
                                placeholder="08176432118"
                              />
                            </div>
                          </div>
                          <div class="mb-3 row">
                            <label
                              for="inputPassword"
                              class="col-sm-3 col-form-label"
                            >
                              Ship to
                            </label>
                            <div class="col-sm-9 text-truncate">
                              <input
                                type="password"
                                class="form-control"
                                id="inputPassword"
                                placeholder="Nwora Molokwu Street, Umukabi village, Amawbia Awka, DC 20030, United States"
                              />
                            </div>
                          </div>
                        </div>

                        <div class="row justify-content-between">
                          <Link
                            className="col-4 mtb-10 peach-text"
                            onClick={() => {
                              toggle("1");
                            }}
                          >
                            &#12296; Previous
                          </Link>
                          <div className="col-3 mtb-10">
                            <button
                              type="submit"
                              class="btn btn-primary"
                              onClick={(e) => {
                                e.preventDefault();
                                toggle("3");
                              }}
                            >
                              Continue
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </Row>
                </TabPane>
                <TabPane tabId="3">
                  <Row>
                    <Navv heading="Card details" />
                    <form class="row g-3">
                      <div className="border">
                        <div class="mb-3">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                          >
                            Card number
                          </label>
                          <input
                            type="email"
                            class="form-control"
                            id="exampleFormControlInput1"
                            placeholder="XXXXXXXXXXXXXXXXXX"
                          />
                        </div>
                        <div class="mb-3">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                          >
                            Name on card
                          </label>
                          <input
                            type="email"
                            class="form-control"
                            id="exampleFormControlInput1"
                            placeholder="XXXXXXXXXXXXXXXXXX"
                          />
                        </div>
                        <div className="row">
                          <div class="col-md-6 mtb-10">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                            >
                              Expiry date
                            </label>
                            <input
                              type="email"
                              class="form-control"
                              id="exampleFormControlInput1"
                              placeholder="MM/YY"
                            />
                          </div>
                          <div class="col-md-6 mtb-10">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                            >
                              CVV
                            </label>
                            <input
                              type="email"
                              class="form-control"
                              id="exampleFormControlInput1"
                              placeholder="XXXXXX"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="row justify-content-between">
                        <div
                          className="col-4 mtb-10 peach-text cursor-pointer"
                          onClick={() => {
                            toggle("2");
                          }}
                        >
                          &#12296; Previous
                        </div>
                        <div className="col-3 mtb-10">
                          <button
                            type="submit"
                            class="btn btn-primary"
                            onClick={(e) => e.preventDefault()}
                          >
                            Pay
                          </button>
                        </div>
                      </div>
                    </form>
                  </Row>
                </TabPane>
              </TabContent>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5 up-900">
          <div className="grey container">
            <h2>Item(s) Information</h2>
            <div className="row">
              <div className="col-6 col-md-3">
                <div className="image-box">
                  <img src={ProductDetailsPageImg} alt="" />
                </div>
              </div>
              <div className="col-12 col-md-8">
                <h3>Gamers sweat shirt</h3>
                <table>
                  <tr>
                    <td>Qty</td>
                    <td>2pcs</td>
                  </tr>
                  <tr>
                    <td>Size</td>
                    <td>L</td>
                  </tr>
                  <tr>
                    <td>Price</td>
                    <td>#35,000</td>
                  </tr>
                </table>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-3"></div>
              <div className="col-md-8 col-12">
                <table>
                  <tr>
                    <td>Shipping</td>
                    <td>#1000</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>#36,000</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
