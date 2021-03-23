import React, { useEffect, useState } from "react";
import "./css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHome, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Modal, TabContent, TabPane } from "reactstrap";
import classnames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { addresult, loadresults, results } from "../../../store/resultSlice";

const AdminResults = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const [newImage, setNewImage] = useState(null);
  const dispatch = useDispatch();
  const [good, setGood] = useState(false);

  const targetData = useSelector(results);

  useEffect(() => {
    dispatch(loadresults());
  }, [good]);

  return (
    <div id="adminresults">
      <div className="blue">
        <Link to="/admin">
          <button>
            <FontAwesomeIcon icon={faHome} color="#C1C0C0" />
          </button>
        </Link>
        <button
          className={classnames({ active: activeTab === "1" })}
          onClick={() => {
            toggle("1");
          }}
        >
          <FontAwesomeIcon icon={faEye} color="#C1C0C0" />
        </button>
        <button
          className={classnames({ active: activeTab === "2" })}
          onClick={() => {
            toggle("2");
          }}
        >
          <FontAwesomeIcon icon={faPlus} color="#C1C0C0" />
        </button>
      </div>

      <div className="white">
        <h1>Tournaments</h1>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <div className="list">
              {targetData.map((item) => (
                <div className="item">
                  <img src={item.image} width="100%" height="100%" alt="" />
                </div>
              ))}
            </div>
          </TabPane>
          <TabPane tabId="2">
            <form
              action="add Highlight"
              onSubmit={(e) => {
                e.preventDefault();
                if (newImage) {
                  const newFormData = new FormData();

                  newFormData.append("image", newImage);
                  dispatch(addresult(newFormData));
                } else alert("Enter Image");
              }}
            >
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Image of result
                </label>
                <input
                  type="file"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => {
                    setNewImage(e.target.files[0]);
                  }}
                />
                <div id="emailHelp" class="form-text">
                  Upload result image
                </div>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
};

export default AdminResults;
