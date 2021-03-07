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
                <div className="col-6  footer-p">+44 (0)7803533580</div>
                {/* <div className="col-6 footer-p">+91 - 888 985 0002</div> */}
                <div className="col-6 footer-p">info@10N8E.gg</div>
              </div>
            </div>
            <div className="col-md-4 col-12 mb-20">
              {/* <h5>Address</h5>
              <div className="row">
                <div className="col-12 footer-p">10N8E  Pvt. Ltd 1-A,</div>
                <div className="col-12 footer-p">
                  Tigaria Rao, Kandala Road, Indore 452016.
                </div>
              </div> */}
            </div>
            <div className="col-md-3 col-12 mb-20">
              <a href="https://www.twitch.tv/10n8eplay">
                <img src={youtubeIcon} alt="" className="footer-icon" />
              </a>
              <a href="https://mobile.twitter.com/10N8EPLAY">
                <img src={twitterIcon} alt="" className="footer-icon" />
              </a>
              <a href="https://www.instagram.com/10n8eplay/">
                <img src={facebookIcon} alt="" className="footer-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="copyright row">
          <div className="col-md-1 col-12 mb-20">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
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
