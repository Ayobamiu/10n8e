import React, { useEffect, useState } from "react";
import Footer from "../../includes/Footer/Footer";
import "./css/style.css";
import { loadfixture, fixture } from "../../../store/fixtureSlice";
import { useSelector, useDispatch } from "react-redux";
import { TabContent, TabPane, Nav, NavItem } from "reactstrap";
import classnames from "classnames";
import bignaija1 from "../../../assets/img/bignaija1.png";
import participant1 from "../../../assets/img/participant1.png";
import emptyframe from "../../../assets/img/emptyframe.png";
import ReleaseForm from "../../../assets/docs/ReleaseForm.pdf";
import Consent from "../../../assets/docs/Consent.pdf";
import { PDFDownloadLink } from "@react-pdf/renderer";
import moment from "moment";
import { Link } from "react-router-dom";

const FixtureDetailsPage = (props) => {
  const targetFixture = useSelector(fixture);
  const dispatch = useDispatch();
  const [good, setGood] = useState(false);
  const [message, setMessage] = useState(null);
  useEffect(() => {
    window.scroll(0, 0);
    dispatch(loadfixture(props.match.params.slug));
    // dispatch(loadfixture("605a2ea17afc7e58d845ce1d"));
  }, [good]);

  const [activeTab, setActiveTab] = useState("1");
  const [quantity, setQuantity] = useState(1);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const rules =
    targetFixture &&
    targetFixture.rules &&
    targetFixture.rules.filter((item) => item !== "");
  const admins =
    targetFixture &&
    targetFixture.admins &&
    targetFixture.admins.filter((item) => item !== "");
  const links =
    targetFixture &&
    targetFixture.links &&
    targetFixture.links.filter((item) => item.title !== "");
  return (
    <div id="fixtureDetails">
      <div id="fixtureDetailsSectionOne">
        <img src={targetFixture.images && targetFixture.images[0]} alt="" />
      </div>
      {/* <div id="fixtureDetailsSectionTwo" className="hide">
        <div className="container">
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "1" })}
                onClick={() => {
                  toggle("1");
                }}
              >
                DETAILS
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  toggle("2");
                }}
              >
                PARTICIPANTS
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "3" })}
                onClick={() => {
                  toggle("3");
                }}
              >
                RULES
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <div className="details">
                <h1>$2000 Final match with the gaming gods</h1>
                <hr />
                <span className="mr-20">Friday 27 Feb. 2021</span>
                <span>6:00pm</span>
              </div>
            </TabPane>
            <TabPane tabId="2">
              <div className="participants">
                <div className="row g-3">
                  {targetFixture.participants &&
                    targetFixture.participants.map((item) => (
                      <div className="col-4 ">
                        <div className="image">
                          <img src={item.image} alt="" />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </TabPane>
            <TabPane tabId="3">
              <div className="details">
                <p>{targetFixture.rules}</p>
              </div>
            </TabPane>
          </TabContent>
        </div>
      </div> */}
      <div id="homePageSectionOneText">
        <div className="overview">
          <h1>Overview</h1>
          <p>{targetFixture.overview}</p>
        </div>
      </div>
      <div className="orangebg">
        <div id="homePageSectionOneText">
          <div className="overview">
            <h1>2021 WHO'S THE GREATEST tournament</h1>
            <h4>
              <b>
                Round Games –
                {moment(targetFixture.gameStart).format("MMM Do YYYY")} –
                {moment(targetFixture.gameEnd).format("MMM Do YYYY")}
              </b>
            </h4>
            <h4>
              <b>
                Final Game -
                {moment(targetFixture.finalGame).format("MMM Do YYYY")}
              </b>
            </h4>
            <p>{targetFixture.description}</p>
            <h1 className="mt-50-20 mb-0">Rules</h1>
            <ul>
              {rules &&
                rules.map((item) => (
                  <li>
                    <p>{item}</p>
                  </li>
                ))}
            </ul>

            <h1 className="mt-50-20 mb-0">Links</h1>
            <ul>
              {links &&
                links.map((item) => (
                  <li>
                    <p>
                      <a href={item.doc} download>
                        {item.title}
                      </a>
                    </p>
                  </li>
                ))}
            </ul>

            <h1 className="mt-50-20 mb-0">Admins</h1>

            {admins && admins.map((item) => <p>Email - {item}</p>)}

            <a href={targetFixture.link}>
              <button className="btn btn-primary mt-50-20">Register</button>
            </a>
          </div>
        </div>
      </div>
      <div id="fixtureDetailsSectionTwo">
        <h1 style={{ marginBottom: "50px" }}>Participants</h1>
        <div className="row g-3 justify-content-between">
          <div className="col-4 ">
            <div className="image">
              <img src={emptyframe} alt="" />
            </div>
          </div>
          {/* {targetFixture.participants &&
            targetFixture.participants.map((item) => (
              <div className="col-4 ">
                <div className="image">
                  <img src={item.image} alt="" />
                </div>
              </div>
            ))} */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FixtureDetailsPage;
