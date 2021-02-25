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
          <div className="row first-row">
            <div className="col-md-5 col-12 mb-20">
              <h5>Contact Us</h5>
              <div className="row">
                <div className="col-6  footer-p">+91 - 888 985 0002</div>
                <div className="col-6 footer-p">+91 - 888 985 0002</div>
                <div className="col-6 footer-p">info@10N8E.gg</div>
              </div>
            </div>
            <div className="col-md-4 col-12 mb-20">
              <h5>Contact Us</h5>
              <div className="row">
                <div className="col-12 footer-p">10N8E Pvt. Ltd 1-A,</div>
                <div className="col-12 footer-p">
                  Tigaria Rao, Kandala Road, Indore 452016.
                </div>
              </div>
            </div>
            <div className="col-md-3 col-12 mb-20">
              <img src={youtubeIcon} alt="" className="footer-icon" />
              <img src={twitterIcon} alt="" className="footer-icon" />
              <img src={facebookIcon} alt="" className="footer-icon" />
            </div>
          </div>
        </div>
        <div className="copyright row">
          <div className="col-md-1 col-12 mb-20">
            <img src={logo} alt="" />
          </div>

          <div className="col-md col-12 mb-20">
            <span className="footer-p">Copyright 2021. All Right Reserved</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
