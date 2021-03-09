import React, { useEffect, useState } from "react";
import Footer from "../../includes/Footer/Footer";
import "./css/style.css";
import { loadfixture, fixture } from "../../../store/fixtureSlice";
import { useSelector, useDispatch } from "react-redux";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import daddad from "../../../assets/img/daddad.png";
import participant1 from "../../../assets/img/participant1.png";

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
        <img src={daddad} alt="" />
      </div>
      <div id="fixtureDetailsSectionTwo">
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
      <Footer />
    </div>
  );
};

export default FixtureDetailsPage;
