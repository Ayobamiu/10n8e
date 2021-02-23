import "./css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCoffee } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import logo from "../../../assets/img/10n80logo.png";
import youtubeIcon from "../../../assets/img/youtubeIcon.png";
import twitterIcon from "../../../assets/img/twitterIcon.png";
import facebookIcon from "../../../assets/img/facebookIcon.png";
const Footer = () => {
  
  return (
    <div id="footerSection">
      <div class="container">
        <div className="contact h-250">
          <div className="row">
            <div className="col-5">
              <h5>Contact Us</h5>
              <div className="row">
                <div className="col-6">+91 - 888 985 0002</div>
                <div className="col-6">+91 - 888 985 0002</div>
                <div className="col-6">info@10N8E.gg</div>
              </div>
            </div>
            <div className="col-4">
              <h5>Contact Us</h5>
              <div className="row">
                <div className="col-12">10N8E Pvt. Ltd 1-A,</div>
                <div className="col-12">
                  Tigaria Rao, Kandala Road, Indore 452016.
                </div>
              </div>
            </div>
            <div className="col-3">
              <img src={youtubeIcon} alt="" className="footer-icon" />
              <img src={twitterIcon} alt="" className="footer-icon" />
              <img src={facebookIcon} alt="" className="footer-icon" />
            </div>
          </div>
        </div>
        <div className="copyright">
          <img src={logo} alt="" />
          <span>Copyright 2021. All Right Reserved</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
