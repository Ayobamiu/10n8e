import React from "react";
import { carts, products, removeCart } from "../../../store/productSlice";
import { useSelector, useDispatch } from "react-redux";
import image1 from "../../../assets/img/kit1.png";
import "./css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Cart = () => {
  const currentCarts = useSelector(carts);
  const currentProducts = useSelector(products);
  const dispatch = useDispatch();

  const newCarts = currentCarts.map((cart) => {
    const nii = currentProducts.find((product) => product._id === cart.product);
    return {
      ...cart,
      image: nii.images[0].image,
      price: nii.price,
      title: nii.title,
    };
  });
  let totalPrice = 0;
  newCarts.forEach((cart) => {
    const amount = cart.price * cart.count;
    totalPrice += amount;
  });

  return (
    <div id="cartpage">
      <div className="container">
        <h1>Your Cart</h1>
        <p>
          You have {newCarts.length} item{newCarts.length > 0 && "s"}
        </p>
        {newCarts.map((cart) => (
          <div className="cart-card">
            <div className="cart-image">
              <img src={cart.image} />
            </div>
            <div className="cart-mid">
              <p>
                <b>{cart.title}</b>
              </p>
              <div className="control-side">
                <span>L</span>
                <span className="ml-20">{cart.count}pcs</span>
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  onClick={() => dispatch(removeCart(cart.product))}
                />
              </div>
            </div>
            <div className="cart-end">
              <p>#{cart.price * cart.count}</p>
            </div>
          </div>
        ))}
        {newCarts.length > 0 && (
          <div>
            <div className="total-and-button" dir="rtl">
              <span>
                <b>Total</b>
              </span>
              <span>
                <b>#{totalPrice}</b>
              </span>
            </div>
            <div className="total-and-button" dir="rtl">
              <Link to="/pay?type=cart" className="btn btn-primary">
                Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
