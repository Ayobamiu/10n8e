import React from "react";
import ReactPlayer from "react-player";
import storeImage1 from "../../../assets/img/storeImage1.png";
import product1 from "../../../assets/img/product1.png";
import product2 from "../../../assets/img/product2.png";
import product3 from "../../../assets/img/product3.png";
import storePs1 from "../../../assets/img/storePs1.png";
import storeShirt1 from "../../../assets/img/storeShirt1.png";
import "./css/style.css";
import Footer from "../../includes/Footer/Footer";
import { Link } from "react-router-dom";

const StorePage = () => {
  return (
    <div className="store"> 
      <div id="sectionOne">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="text">
                <h1>
                  Buy quality <br /> <span>gears & WEARS!</span>
                </h1>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="images">
                <img src={storePs1} alt="" className="float-ps" height="90%" />
                <img
                  src={storeShirt1}
                  alt=""
                  className="float-shirt"
                  height="90%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="storePageSectionTwo">
        <div class="container">
          <h2 className="mb-50">Upcomming Events</h2>
          <div class="row g-3">
            <div class="col-6 col-md-4">
              <Link to="/store/2" class=" h-400 hide-overflow store-item">
                <div className="image">
                  <img src={product3} alt="" />
                </div>
                <h2 className="head">PS 4 Controller</h2>
                <p className="price"># 305,000</p>
              </Link>
            </div>

            <div class="col-6 col-md-4">
              <Link to="/store/2" class=" h-400 hide-overflow store-item">
                <div className="image">
                  <img src={product3} alt="" />
                </div>
                <h2 className="head">PS 4 Controller</h2>
                <p className="price"># 305,000</p>
              </Link>
            </div>
            <div class="col-6 col-md-4">
              <Link to="/store/2" class=" h-400 hide-overflow store-item">
                <div className="image">
                  <img src={product3} alt="" />
                </div>
                <h2 className="head">PS 4 Controller</h2>
                <p className="price"># 305,000</p>
              </Link>
            </div>
            <div class="col-6 col-md-4">
              <Link to="/store/2" class=" h-400 hide-overflow store-item">
                <div className="image">
                  <img src={product3} alt="" />
                </div>
                <h2 className="head">PS 4 Controller</h2>
                <p className="price"># 305,000</p>
              </Link>
            </div>
            <div class="col-6 col-md-4">
              <Link to="/store/2" class=" h-400 hide-overflow store-item">
                <div className="image">
                  <img src={product3} alt="" />
                </div>
                <h2 className="head">PS 4 Controller</h2>
                <p className="price"># 305,000</p>
              </Link>
            </div>
            <div class="col-6 col-md-4">
              <Link to="/store/2" class=" h-400 hide-overflow store-item">
                <div className="image">
                  <img src={product3} alt="" />
                </div>
                <h2 className="head">PS 4 Controller</h2>
                <p className="price"># 305,000</p>
              </Link>
            </div>
            <div class="col-6 col-md-4">
              <Link to="/store/2" class=" h-400 hide-overflow store-item">
                <div className="image">
                  <img src={product3} alt="" />
                </div>
                <h2 className="head">PS 4 Controller</h2>
                <p className="price"># 305,000</p>
              </Link>
            </div>

            <div class="col-6 col-md-4">
              <Link to="/store/2" class=" h-400 hide-overflow store-item">
                <div className="image">
                  <img src={product3} alt="" />
                </div>
                <h2 className="head">PS 4 Controller</h2>
                <p className="price"># 305,000</p>
              </Link>
            </div>
            <div class="col-6 col-md-4">
              <Link to="/store/2" class=" h-400 hide-overflow store-item">
                <div className="image">
                  <img src={product3} alt="" />
                </div>
                <h2 className="head">PS 4 Controller</h2>
                <p className="price"># 305,000</p>
              </Link>
            </div>

            <div class="col-6 col-md-4">
              <Link to="/store/2" class=" h-400 hide-overflow store-item">
                <div className="image">
                  <img src={product3} alt="" />
                </div>
                <h2 className="head">PS 4 Controller</h2>
                <p className="price"># 305,000</p>
              </Link>
            </div>
            <div class="col-6 col-md-4">
              <Link to="/store/2" class=" h-400 hide-overflow store-item">
                <div className="image">
                  <img src={product3} alt="" />
                </div>
                <h2 className="head">PS 4 Controller</h2>
                <p className="price"># 305,000</p>
              </Link>
            </div>

            <div class="col-6 col-md-4">
              <Link to="/store/2" class=" h-400 hide-overflow store-item">
                <div className="image">
                  <img src={product3} alt="" />
                </div>
                <h2 className="head">PS 4 Controller</h2>
                <p className="price"># 305,000</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StorePage;
