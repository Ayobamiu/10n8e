import React, { useEffect, useState } from "react";
import Footer from "../../includes/Footer/Footer";
import "./css/style.css";
import { Link } from "react-router-dom";
import {
  products,
  loadProducts,
  loadProduct,
  addproduct,
} from "../../../store/productSlice";
import { useSelector, useDispatch } from "react-redux";
import { TabContent, TabPane } from "reactstrap";
import moment from "moment";

const Upload = (props) => {
  const targetProducts = useSelector(products);
  console.log(targetProducts);
  const dispatch = useDispatch();
  const [good, setGood] = useState(false);
  useEffect(() => {
    dispatch(loadProducts());
  }, [good]);

  const [activeTab, setActiveTab] = useState("0");
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [price, setPrice] = useState(null);
  const [images, setImages] = useState(null);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div id="uploadPage">
      <div className="container">
        <div class="card">
          <h5 class="card-header">Upload Page</h5>
          <div class="card-body">
            <div className="row">
              <div className="col-6">
                <h5 class="card-title">Product Item</h5>
                <p class="card-text">
                  Upload a product with image file, title, price and its
                  description
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const newFormData = new FormData();
                    newFormData.append("title", title);
                    newFormData.append("description", description);
                    newFormData.append("price", price);
                    newFormData.append("images", images);
                    const data = { title, description, price, images };
                    console.log(data);
                    console.log(newFormData);
                    dispatch(addproduct(newFormData));
                  }}
                >
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Product title
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      aria-describedby="titleHelp"
                      required
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <div id="titleHelp" class="form-text">
                      This is the display of the product
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="description" class="form-label">
                      Product description
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="description"
                      aria-describedby="description"
                      required
                      onChange={(e) => setDescription(e.target.value)}
                    />
                    <div id="description" class="form-text">
                      The is the detailed description of the product
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="price" class="form-label">
                      Price
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      id="price"
                      aria-describedby="priceHelp"
                      required
                      onChange={(e) => setPrice(e.target.value)}
                    />
                    <div id="priceHelp" class="form-text">
                      price is in Naira
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Select multiple image files
                    </label>
                    <input
                      type="file"
                      class="form-control"
                      required
                      multiple
                      onChange={(e) => {
                        let images = [];
                        for (let i = 0; i < e.target.files.length; i++) {
                          images.push(URL.createObjectURL(e.target.files[i]));
                        }
                        // var formData = new FormData();
                        // var filesLength = e.target.files.length;
                        // for (var i = 0; i < filesLength; i++) {
                        //   formData.append("file[]", e.target.files[i]);
                        // }
                        // setImages(formData);
                        setImages(images);
                      }}
                    />
                  </div>

                  <button type="submit" class="btn btn-primary">
                    Add product
                  </button>
                </form>
              </div>
              <div className="col-6">
                <div className="card">
                  <div class="list-group">
                    {targetProducts.map((product) => (
                      <a
                        href="#"
                        class="list-group-item list-group-item-action"
                        aria-current="true"
                      >
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1">{product.title}</h5>
                          <small>{moment(product.createdAt).fromNow()}</small>
                        </div>
                        <p class="mb-1">{product.description}</p>
                        <small>N{product.price}</small>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
