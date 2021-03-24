import React, { useEffect, useState } from "react";
import "./css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faHome,
  faPlus,
  faTrash,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Modal, TabContent, TabPane } from "reactstrap";
import classnames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import {
  addresult,
  loadingresult,
  loadresults,
  removeresult,
  results,
  updateresult,
  resultStatus,
} from "../../../store/resultSlice";

const AdminResults = () => {
  const resultIsLoading = useSelector(loadingresult);
  const targetStatus = useSelector(resultStatus);

  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const [newImage, setNewImage] = useState(null);
  const dispatch = useDispatch();
  const [good, setGood] = useState(false);
  const [updateResult, setUpdateResult] = useState(null);

  const targetData = useSelector(results);

  useEffect(() => {
    dispatch(loadresults());
  }, [good]);

  return (
    <div id="adminresults">
      <div className="blue">
        {resultIsLoading && (
          <div>
            <div class="spinner-grow text-light" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <span style={{ color: "#ffffff" }}>{targetStatus}</span>
          </div>
        )}
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
        <h1>Results</h1>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <div className="list">
              {targetData.map((item, index) => (
                <div className="item">
                  <img src={item.image} width="100%" height="100%" alt="" />
                  <FontAwesomeIcon
                    icon={faEdit}
                    color="#DF4B29"
                    data-bs-toggle="collapse"
                    href={"#collapseExample" + index}
                    role="button"
                    aria-expanded="false"
                    aria-controls={"collapseExample" + index}
                    className="icon"
                    onClick={() => {
                      setUpdateResult(null);
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faTrash}
                    color="#DF4B29"
                    className="delete-icon"
                    onClick={() => {
                      dispatch(removeresult(item._id));
                    }}
                  />
                  <div
                    className="item-edit collapse"
                    id={"collapseExample" + index}
                  >
                    <form
                      action="add Highlight"
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (updateResult) {
                          const newFormData = new FormData();

                          newFormData.append("image", updateResult);
                          dispatch(updateresult(item._id, newFormData));
                        } else alert("Select Image");
                      }}
                    >
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">
                          Result image
                        </label>
                        <input
                          type="file"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          onChange={(e) => setUpdateResult(e.target.files[0])}
                        />
                        <div id="emailHelp" class="form-text">
                          Upload result image
                        </div>
                      </div>
                      <button type="submit" class="btn btn-primary">
                        Submit
                      </button>
                    </form>
                  </div>
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
                } else alert("Select Image");
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
