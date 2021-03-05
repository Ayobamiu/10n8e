import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import fixtureImage1 from "../../../assets/img/fixtureImage1.png";
import team2logo from "../../../assets/img/team2logo.png";
import team1logo from "../../../assets/img/team1logo.png";
import storePs1 from "../../../assets/img/storePs1.png";
import storeShirt1 from "../../../assets/img/storeShirt1.png";
import "./css/style.css";
import Footer from "../../includes/Footer/Footer";
import { fixtures, loadfixtures } from "../../../store/fixtureSlice";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

const Fixture = () => {
  const allFixtures = useSelector(fixtures);
  const dispatch = useDispatch();
  const [good, setGood] = useState(false);
  useEffect(() => {
    dispatch(loadfixtures());
  }, [good]);
  console.log(allFixtures);
  return (
    <div id="fixture">
      <div id="sectionOne">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="text">
                <h1>
                  Events <br /> getting <br /> <span>hoTter!</span>
                </h1>
              </div>
            </div>
            <div className="col-6">
              <div className="images"></div>
            </div>
          </div>
        </div>
      </div>
      <div id="fixturePageSectionTwo">
        <div class="container">
          <h2 className="mb-50">Upcomming Events</h2>
          <div class="row g-3">
            {allFixtures.map((item) => (
              <div class="col-6 col-md-4">
                <div class=" h-332 hide-overflow event-item">
                  <div className="head">
                    <h2>{item.title}</h2>
                  </div>

                  <div className="vs">
                    <div>
                      <img src={item.teamAImage} alt="" />
                      <span>vs</span>
                      <img src={item.teamBImage} alt="" />
                    </div>
                    <p>
                      {moment(item.time).format("l")} &nbsp;
                      {moment(item.time).format("LT")}{" "}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="fixturePageSectionThree">
        <div class="container">
          <h2 className="mb-50">February</h2>
          {allFixtures.map((item) => (
            <div className="new-event-item">
              <div>
                <img src={item.teamAImage} alt="" />
                <span>vs</span>
                <img src={item.teamBImage} alt="" />
              </div>
              <p className="date">
                <b>{moment(item.time).format("l")}</b>
              </p>
              <p className="time">
                <b>{moment(item.time).format("LT")}</b>
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Fixture;
