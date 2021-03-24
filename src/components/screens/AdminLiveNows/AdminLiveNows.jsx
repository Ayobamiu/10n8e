import React, { useEffect, useState } from "react";
import "./css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faEye,
  faHome,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Modal, TabContent, TabPane } from "reactstrap";
import classnames from "classnames";
import {
  addliveNow,
  liveNows,
  liveNowStatus,
  loadingliveNow,
  loadliveNows,
  removeliveNow,
  updateLiveNow,
} from "../../../store/liveNowSlice";
import { useSelector, useDispatch } from "react-redux";

const AdminLiveNows = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [newLink, setNewLink] = useState(null);
  const [updateLink, setUpdateLink] = useState(null);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const dispatch = useDispatch();
  const liveNowIsLoading = useSelector(loadingliveNow);
  const targetStatus = useSelector(liveNowStatus);

  const targetData = useSelector(liveNows);
  const [good, setGood] = useState(false);

  useEffect(() => {
    dispatch(loadliveNows());
  }, [good]);
  return (
    <div id="adminlivenows">
      <div className="blue">
        {liveNowIsLoading && (
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
        <h1>Live Nows</h1>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <div className="list">
              {targetData.map((item, index) => (
                <>
                  <div className="item">
                    <Link>{item.link}</Link>
                    <FontAwesomeIcon
                      icon={faTrash}
                      color="#DF4B29"
                      onClick={() => dispatch(removeliveNow(item._id))}
                      className="icon"
                    />
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
                        setUpdateLink(null);
                      }}
                    />
                  </div>
                  <div
                    className="item-edit collapse"
                    id={"collapseExample" + index}
                  >
                    <form
                      action="add Highlight"
                      onSubmit={(e) => {
                        e.preventDefault();
                        const update = {};
                        if (updateLink) {
                          update.link = updateLink;
                        }
                        dispatch(updateLiveNow(item._id, update));
                      }}
                    >
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">
                          Link to live now
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          onChange={(e) => setUpdateLink(e.target.value)}
                        />
                        <div id="emailHelp" class="form-text">
                          Enter the link to live now
                        </div>
                      </div>
                      <button type="submit" class="btn btn-primary">
                        Submit
                      </button>
                    </form>
                  </div>
                </>
              ))}
            </div>
          </TabPane>
          <TabPane tabId="2">
            <form
              action="add Highlight"
              onSubmit={(e) => {
                e.preventDefault();
                if (newLink) {
                  dispatch(addliveNow({ link: newLink }));
                } else alert("Enter link");
              }}
            >
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Link to Live Now
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => setNewLink(e.target.value)}
                />
                <div id="emailHelp" class="form-text">
                  Enter the link to the live now
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

export default AdminLiveNows;
