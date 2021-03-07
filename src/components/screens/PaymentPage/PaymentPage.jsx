import React, { useEffect, useState } from "react";
import "./css/style.css";
import { Link, Redirect } from "react-router-dom";
import { TabContent, TabPane, Row, Col } from "reactstrap";
import classnames from "classnames";
import {
  product,
  loadProduct,
  loadProducts,
  carts,
  products,
} from "../../../store/productSlice";

import { useSelector, useDispatch } from "react-redux";
import queryString from "query-string";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

const PaymentPage = (props) => {
  const parsed = queryString.parse(props.location.search);

  const [activeTab, setActiveTab] = useState("1");

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [address, setAddress] = useState(null);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);
  const [town, setTown] = useState(null);
  const [phone, setPhone] = useState(null);
  const [shippingEmail, setShippingEmail] = useState(null);
  const [shippingAddress, setShippingAddress] = useState(null);
  const [shippingPhone, setShippingPhone] = useState(null);

  const [shippingFee, setShippingFee] = useState(1000);

  const targetProducts = useSelector(products);
  const targetProduct = useSelector(product);
  const dispatch = useDispatch();
  const [good, setGood] = useState(false);
  useEffect(() => {
    dispatch(loadProducts());
    if (parsed.productId) {
      dispatch(loadProduct(parsed.productId));
    }
    if (!parsed.productId && parsed.type !== "cart") {
      window.location = "/";
    }
  }, [good]);
  const currentCarts = useSelector(carts);
  const newCarts = currentCarts.map((cart) => {
    const equiProduct = targetProducts.find(
      (product) => product._id === cart.product
    );
    return { ...cart, ...equiProduct };
  });

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

  let money = 0;
  if (parsed.productId) {
    const callc = targetProduct.price * parsed.count;
    // setTotalToPay(callc);
    money = callc;
  }
  if (parsed.type === "cart") {
    for (let index = 0; index < newCarts.length; index++) {
      const cart = newCarts[index];
      const callc = cart.price * cart.count;
      money += callc;
    }
  }

  const config = {
    public_key: "FLWPUBK_TEST-5120f20f66db336ffc0f6131bcc49936-X",
    tx_ref: Date.now(),
    amount: money + shippingFee,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "user@gmail.com",
      phonenumber: "07064586146",
      name: "joel ugwumadu",
    },
    customizations: {
      title: "my Payment Title",
      description: "Payment for items in cart",
      logo:
        "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

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
                      <form
                        class="row g-3"
                        onSubmit={(e) => {
                          // e.preventDefault();
                          firstName &&
                            lastName &&
                            address &&
                            state &&
                            city &&
                            town &&
                            phone &&
                            toggle("2");
                          e.preventDefault();
                        }}
                      >
                        <div class="col-12 mtb-10">
                          <input
                            type="text"
                            class="form-control"
                            id="inputAddress"
                            placeholder="First name"
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                          />
                        </div>
                        <div class="col-12 mtb-10">
                          <input
                            type="text"
                            class="form-control"
                            id="inputAddress2"
                            placeholder="Last name"
                            onChange={(e) => setLastName(e.target.value)}
                            required
                          />
                        </div>
                        <div class="col-12 mtb-10">
                          <input
                            type="text"
                            class="form-control"
                            id="inputAddress2"
                            placeholder="Address"
                            onChange={(e) => setAddress(e.target.value)}
                            required
                          />
                        </div>
                        <div class="col-md-6 mtb-10">
                          <input
                            type="text"
                            class="form-control"
                            id="inputEmail4"
                            placeholder="State"
                            onChange={(e) => setState(e.target.value)}
                            required
                          />
                        </div>
                        <div class="col-md-6 mtb-10">
                          <input
                            type="text"
                            class="form-control"
                            id="inputPassword4"
                            placeholder="City"
                            onChange={(e) => setCity(e.target.value)}
                            required
                          />
                        </div>
                        <div class="col-md-6 mtb-10">
                          <input
                            type="text"
                            class="form-control"
                            id="inputEmail4"
                            placeholder="Town"
                            onChange={(e) => setTown(e.target.value)}
                            required
                          />
                        </div>
                        <div class="col-md-6 mtb-10">
                          <input
                            type="text"
                            class="form-control"
                            id="inputPassword4"
                            placeholder="Phone number"
                            onChange={(e) => setPhone(e.target.value)}
                            required
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
                            <button class="btn btn-primary" type="submit">
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
                      <form
                        class="row g-3"
                        onSubmit={(e) => {
                          shippingEmail &&
                            shippingPhone &&
                            shippingAddress &&
                            toggle("3");
                          e.preventDefault();
                        }}
                      >
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
                                placeholder="myemail@email.com"
                                onChange={(e) =>
                                  setShippingEmail(e.target.value)
                                }
                                required
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
                                onChange={(e) =>
                                  setShippingPhone(e.target.value)
                                }
                                required
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
                                onChange={(e) =>
                                  setShippingAddress(e.target.value)
                                }
                                required
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
                            <button type="submit" class="btn btn-primary">
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
                    <form
                      class="row g-3"
                      onClick={(e) => {
                        e.preventDefault();
                        handleFlutterPayment({
                          callback: (response) => {
                            console.log(response);
                            closePaymentModal(); // this will close the modal programmatically
                          },
                          onClose: () => {},
                        });
                      }}
                    >
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
                            required
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
                            required
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
                              required
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
                              required
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
                        <div className="col-3 mtb-10"></div>
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Pay Now
                      </button>
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
            {parsed.type === "cart" &&
              newCarts.map((cart) => (
                <div className="row mb-10">
                  <div className="col-6">{cart.title}</div>
                  <div className="col-3">{cart.count}</div>
                  <div className="col-3">{cart.price}</div>
                </div>
              ))}
            {parsed.productId && (
              <div className="row mb-10">
                <div className="col-6 col-md-3">
                  <div className="image-box">
                    <img
                      src={
                        targetProduct.images && targetProduct.images[0].image
                      }
                      alt=""
                      width="100%"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-8">
                  <h3>Gamers sweat shirt</h3>
                  <table>
                    <tr>
                      <td>Qty</td>
                      <td>{parsed.count}pcs</td>
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
            )}
            <hr />
            <div className="row">
              <div className="col-md-7"></div>
              <div className="col-md-3 col-12">
                <table>
                  <tr>
                    <td>Shipping</td>
                    <td>N{shippingFee}</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>N{money + shippingFee}</td>
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
