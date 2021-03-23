import React, { useEffect, useState } from "react";
import "./css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faHome,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Modal, TabContent, TabPane } from "reactstrap";
import classnames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import {
  loadingHighlight,
  highlightStatus,
  addhighlight,
  loadhighlights,
  highlights,
  removehighlight,
} from "../../../store/highlightSlice";

const AdminHighLights = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const [newLink, setNewLink] = useState(null);
  const [newTitle, setNewTitle] = useState(null);
  const dispatch = useDispatch();
  const higlightIsLoading = useSelector(loadingHighlight);
  const targetStatus = useSelector(highlightStatus);
  const targetData = useSelector(highlights);
  const [good, setGood] = useState(false);
  console.log(targetData);
  useEffect(() => {
    dispatch(loadhighlights());
  }, [good]);
  return (
    <div id="adminhighlights">
      <div className="blue">
        {higlightIsLoading && (
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
        <h1>Highlights</h1>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <div className="list">
              {targetData.map((item) => (
                <div className="item">
                  <Link>{item.title}</Link>
                  <FontAwesomeIcon
                    icon={faTrash}
                    color="#DF4B29"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(removehighlight(item._id));
                    }}
                  />
                </div>
              ))}
            </div>
          </TabPane>
          <TabPane tabId="2">
            <form
              action="add Highlight"
              onSubmit={(e) => {
                e.preventDefault();
                if (newLink) {
                  dispatch(addhighlight({ link: newLink, title: newTitle }));
                } else alert("Enter link");
              }}
            >
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Link title
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => setNewTitle(e.target.value)}
                />
                <div id="emailHelp" class="form-text">
                  Enter the Title to the higlight
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Link to Highlight
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => setNewLink(e.target.value)}
                />
                <div id="emailHelp" class="form-text">
                  Enter the link to the higlight
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

export default AdminHighLights;
