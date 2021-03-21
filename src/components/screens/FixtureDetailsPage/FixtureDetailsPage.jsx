import React, { useEffect, useState } from "react";
import Footer from "../../includes/Footer/Footer";
import "./css/style.css";
import { loadfixture, fixture } from "../../../store/fixtureSlice";
import { useSelector, useDispatch } from "react-redux";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import bignaija1 from "../../../assets/img/bignaija1.png";
import participant1 from "../../../assets/img/participant1.png";
import emptyframe from "../../../assets/img/emptyframe.png";
import ReleaseForm from "../../../assets/docs/ReleaseForm.pdf";
import Consent from "../../../assets/docs/Consent.pdf";
import { PDFDownloadLink } from "@react-pdf/renderer";

const FixtureDetailsPage = (props) => {
  const targetFixture = useSelector(fixture);
  const dispatch = useDispatch();
  const [good, setGood] = useState(false);
  const [message, setMessage] = useState(null);
  useEffect(() => {
    dispatch(loadfixture(props.match.params.fixtureId));
  }, [good]);
  console.log(targetFixture);

  const [activeTab, setActiveTab] = useState("1");
  const [quantity, setQuantity] = useState(1);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div id="fixtureDetails">
      <div id="fixtureDetailsSectionOne">
        <img src={bignaija1} alt="" />
      </div>
      <div id="fixtureDetailsSectionTwo" className="hide">
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
      </div>
      <div id="homePageSectionOneText">
        <div className="overview">
          <h1>Overview</h1>
          <p>
            In partnership with Electronic Arts Inc., 10N8E presents to you the
            2021 FIFA Africa eSeries. The tournament will be the first of its
            kind on the continent and bring together the best of the best gamers
            on the continent to enable us showcase Africa to the world. The
            tournament will comprise of 4 country tournaments and a grand final
            of the 4 country winners to be give the world the first Africa 10N8E
            champion. Each tournament will feature 64 players who will earn
            their spots through a qualification criterion and the games will be
            in a 1v1 home and away format.
          </p>
        </div>
      </div>
      <div className="orangebg">
        <div id="homePageSectionOneText">
          <div className="overview">
            <h1>2021 FIFA AFRICA ESERIES</h1>
            <h4>
              <b>Round Games – March 26th – 27th</b>
            </h4>
            <h4>
              <b>Round Games – March 26th – 27th</b>
            </h4>
            <p>
              It's the same game that you know and love, but with stronger
              competitions! Think you're up for the challenge? Sign up today and
              take-home part of that $500 prize pool!
            </p>
            <h1 className="mt-50-20 mb-0">Rules</h1>
            <ul>
              <li>
                <p>This tournament is only for participants from Nigeria</p>
              </li>
              <li>
                <p>
                  Players below 18 (16 is the limit) must have a parent complete
                  the consent form
                </p>
              </li>
              <li>
                <p>Play must be in FIFA Ultimate Team mode</p>
              </li>
              <li>
                <p>
                  Send an email to info@10N8E.gg with your proof of Nigeria
                  residency
                </p>
              </li>
              <li>
                <p>
                  Include your WhatsApp number and a picture of your FIFA
                  Ultimate team to the{" "}
                </p>
              </li>
              <li>
                <p>
                  Players 16 and below must have a parent complete the consnet
                  form
                </p>
              </li>
              <li>
                <p>Registration closes on the 23rd of March 2021.</p>
              </li>
              <li>
                <p>Watch the Registration video</p>
              </li>
            </ul>

            <h1 className="mt-50-20 mb-0">Links</h1>
            <ul>
              <li>
                <p>
                  <a href={ReleaseForm} download>
                    Release form - Document{" "}
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <a href={Consent} download>
                    Parental Consent - Document
                  </a>
                </p>
              </li>
            </ul>

            <h1 className="mt-50-20 mb-0">Admins</h1>

            <p>Email - info@10N8E.gg</p>

            <button className="btn btn-primary mt-50-20">Register</button>
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
