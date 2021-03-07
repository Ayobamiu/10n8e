import React, { useEffect, useState } from "react";
import Footer from "../../includes/Footer/Footer";
import "./css/style.css";
import { Link } from "react-router-dom";
import {
  product,
  loadProduct,
  addCart,
  carts,
} from "../../../store/productSlice";
import { useSelector, useDispatch } from "react-redux";
import { TabContent, TabPane } from "reactstrap";
import classnames from "classnames";

const ProductDetailsPage = (props) => {
  const currentCarts = useSelector(carts);
  const targetProduct = useSelector(product);
  const dispatch = useDispatch();
  const [good, setGood] = useState(false);
  const [message, setMessage] = useState(null);
  useEffect(() => {
    dispatch(loadProduct(props.match.params.productId));
  }, [good]);

  const [activeTab, setActiveTab] = useState("0");
  const [quantity, setQuantity] = useState(1);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div id="ProductDetailsPage">
      <div className="blue">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12">
              <h1>Product Overview</h1>
              <TabContent activeTab={activeTab}>
                {targetProduct.images &&
                  targetProduct.images.map((image, index) => (
                    <TabPane tabId={`${index}`}>
                      <div className="big-img">
                        <img src={image.image} alt="" />
                      </div>
                    </TabPane>
                  ))}
              </TabContent>
            </div>
            <div className="col-md-6 col-9">
              <div className="text">
                <h2>{targetProduct.title}</h2>
                <p>{targetProduct.description}</p>
                <div className="row">
                  <div className="col-md-3 col-4">
                    <span># {targetProduct.price}</span>
                  </div>
                  <div className="col-3">
                    <input
                      class="form-select form-select mb-3"
                      aria-label=".form-select-lg example"
                      type="number"
                      defaultValue={quantity}
                      onChange={(e) => {
                        e.preventDefault();
                        setQuantity(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <ul>
                  <li>M</li>
                  <li className="active">L</li>
                  <li>XL</li>
                  <li>XL</li>
                </ul>
                <Link
                  to={`/pay?productId=${targetProduct._id}&count=${quantity}`}
                >
                  <button
                    class="btn  m-10 mb-10 btn-primary button1"
                    type="submit"
                  >
                    Buy Now
                  </button>
                </Link>
                <button
                  class="btn mb-10 btn-primary button2"
                  type="submit"
                  onClick={() => {
                    const existsInCart = currentCarts.find(
                      (cart) => cart.product === targetProduct._id
                    );
                    if (!existsInCart) {
                      dispatch(addCart(targetProduct._id, quantity));
                      setMessage("Added to temporary cart");
                    } else {
                      setMessage("Already in temporary cart");
                    }
                  }}
                >
                  Add to Cart
                </button>
                {message && (
                  <div
                    class="alert alert-success alert-dismissible fade show"
                    role="alert"
                  >
                    <strong>{message}</strong>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                      onClick={() => setMessage(null)}
                    ></button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="white">
        <div className="row">
          <div className="col-6"></div>
          <div className="col-6">
            {targetProduct.images &&
              targetProduct.images.map((image, index) => (
                <button
                  id="small-img"
                  className={classnames({ active: activeTab === `${index}` })}
                  onClick={() => {
                    toggle(`${index}`);
                  }}
                >
                  <img src={image.image} alt="" />
                </button>
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
