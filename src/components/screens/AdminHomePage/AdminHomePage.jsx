import React from "react";
import "./css/style.css";
import { Link } from "react-router-dom";
import bg1 from "../../../assets/img/bg1.png";
import bg2 from "../../../assets/img/bg2.png";
import bg3 from "../../../assets/img/bg3.png";
import bg5 from "../../../assets/img/bg5.png";
import bg4 from "../../../assets/img/bg4.png";

const AdminHome = () => {
  return (
    <div id="adminhome">
      <div className="item">
        <Link to="/admin/tournaments">
          <img src={bg1} alt="" />
        </Link>
      </div>
      <div className="item">
        <Link to="/admin/highlights">
          <img src={bg2} alt="" />
        </Link>
      </div>
      <div className="item"> 
        <Link to="/admin/results">
          <img src={bg3} alt="" />
        </Link>
      </div>
      <div className="item">
        <Link to="/admin/slides">
          <img src={bg4} alt="" />
        </Link>
      </div>
      <div className="item">
        <Link to="/admin/live-now">
          <img src={bg5} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default AdminHome;
