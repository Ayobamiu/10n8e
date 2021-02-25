import React from "react";
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

const PaymentPage = () => {
  return (
    <div id="paymentPage">
      <div className="row">
        <div className="col-12 col-md-7">
          <div className="white container">
            <h1>Payment details</h1>
            <form class="row g-3">
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">
                  Email
                </label>
                <input type="email" class="form-control" id="inputEmail4" />
              </div>
              <div class="col-md-6">
                <label for="inputPassword4" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword4"
                />
              </div>
              <div class="col-12">
                <label for="inputAddress" class="form-label">
                  Address
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                />
              </div>
              <div class="col-12">
                <label for="inputAddress2" class="form-label">
                  Address 2
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress2"
                  placeholder="Apartment, studio, or floor"
                />
              </div>
              <div class="col-md-6">
                <label for="inputCity" class="form-label">
                  City
                </label>
                <input type="text" class="form-control" id="inputCity" />
              </div>
              <div class="col-md-4">
                <label for="inputState" class="form-label">
                  State
                </label>
                <select id="inputState" class="form-select">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div class="col-md-2">
                <label for="inputZip" class="form-label">
                  Zip
                </label>
                <input type="text" class="form-control" id="inputZip" />
              </div>
              <div class="col-12">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label class="form-check-label" for="gridCheck">
                    Check me out
                  </label>
                </div>
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-primary">
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-12 col-md-5">
          <div className="grey container">
            <h2>Item(s) Information</h2>
            <div className="row">
              <div className="col-3">
                <div className="image-box">
                  <img src={ProductDetailsPageImg} alt="" height="90%" />
                </div>
              </div>
              <div className="col-8">
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
              <div className="col-8">
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
