import React, { useState } from "react";
import "./css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Modal, TabContent, TabPane } from "reactstrap";
import classnames from "classnames";

const AdminResults = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
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
          <FontAwesomeIcon icon={faPlus} color="#C1C0C0" />
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
              <div className="item">Tournaments</div>
              <div className="item">Highlights</div>
              <div className="item">Results</div>
              <div className="item">Slides</div>
              <div className="item">Live now</div>
            </div>
          </TabPane>
          <TabPane tabId="2"></TabPane>
        </TabContent>
      </div>
    </div>
  );
};

export default AdminResults;
