import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import storeImage1 from "../../../assets/img/storeImage1.png";
import product1 from "../../../assets/img/product1.png";
import product2 from "../../../assets/img/product2.png";
import product3 from "../../../assets/img/product3.png";
import noimage from "../../../assets/img/noimage.jpg";
import storePs1 from "../../../assets/img/storePs1.png";
import storeShirt1 from "../../../assets/img/storeShirt1.png";
import "./css/style.css";
import Footer from "../../includes/Footer/Footer";
import { Link } from "react-router-dom";
import { products, loadProducts } from "../../../store/productSlice";
import { useSelector, useDispatch } from "react-redux";

const StorePage = () => {
  const allProducts = useSelector(products);
  const dispatch = useDispatch();
  const [good, setGood] = useState(false);
  useEffect(() => {
    dispatch(loadProducts());
  }, [good]);
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
          <h2 className="mb-50">Store</h2>
          <div class="row g-3">
            {allProducts.map((product) => (
              <div class="col-6 col-md-4">
                <Link
                  to={`/store/${product._id}`}
                  class=" h-400 hide-overflow store-item"
                >
                  <div className="image">
                    <img
                      src={
                        product.images && product.images.length > 0
                          ? product.images[0].image
                          : noimage
                      }
                      height="90%"
                      alt=""
                    />
                  </div>
                  <h2 className="head col-12 text-truncate">{product.title}</h2>
                  <p className="price"># {product.price}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StorePage;
