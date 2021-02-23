import React from "react";
import Footer from "../../includes/Footer/Footer";
import NavBar from "../../includes/NavBar/NavBar";
import "./css/style.css";
import ProductDetailsPageImg from "../../../assets/img/ProductDetailsPageImg.png";

const ProductDetailsPage = () => {
  return (
    <div id="ProductDetailsPage">
      <div className="blue">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h1>Product Overview</h1>
            </div>
            <div className="col-6">
              <div className="text">
                <h2>gamers sweat shirt</h2>
                <p>
                  This item is handmade in the USA. Please allow 7-14 Days for
                  Production and 3-4 days for shipping
                </p>
                <div className="row">
                  <div className="col-3">
                    <span># 35,000</span>
                  </div>
                  <div className="col-3">
                    <select
                      class="form-select form-select mb-3"
                      aria-label=".form-select-lg example"
                    >
                      <option selected>2 Pcs</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
                <ul>
                  <li>M</li>
                  <li className="active">L</li>
                  <li>XL</li>
                  <li>XL</li>
                </ul>
                <button
                  class="btn btn-lg m-10 btn-primary button1"
                  type="submit"
                >
                  Button
                </button>
                <button class="btn btn-lg btn-primary button2" type="submit">
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="big-img">
          <img src={ProductDetailsPageImg} alt="" />
        </div>
      </div>
      <div className="white">
        <div className="row">
          <div className="col-6"></div>
          <div className="col-6">
            <div className="small-img">
              <img src={ProductDetailsPageImg} alt="" />
            </div>
            <div className="small-img">
              <img src={ProductDetailsPageImg} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
