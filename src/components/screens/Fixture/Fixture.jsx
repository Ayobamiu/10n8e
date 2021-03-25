import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import fixtureImage1 from "../../../assets/img/fixtureImage1.png";
import team2logo from "../../../assets/img/team2logo.png";
import team1logo from "../../../assets/img/team1logo.png";
import storePs1 from "../../../assets/img/storePs1.png";
import imagehomethree from "../../../assets/img/imagehomethree.png";
import "./css/style.css";
import Footer from "../../includes/Footer/Footer";
import { fixtures, loadfixtures } from "../../../store/fixtureSlice";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";

const Fixture = () => {
  const allFixtures = useSelector(fixtures);
  const dispatch = useDispatch();
  const [good, setGood] = useState(false);
  useEffect(() => {
    dispatch(loadfixtures());
  }, [good]);
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
          <h2 className="mb-50">Upcomming Tournaments</h2>
          <div class="row g-3">
            {allFixtures.map((fixture) => (
              <Link to={`/tournament/${fixture._id}`} class="col-6 col-md-4">
                <div class=" h-332 hide-overflow event-item">
                  <div className="image">
                    <img src={fixture.image} alt="" />
                  </div>
                  <div className="text">
                    <h3 className="mb-20">{fixture.title} </h3>

                    <div className="row justify-content-between">
                      <div className="col-md-8 col-12">
                        <span>
                          {moment(fixture.createdAt).format("l")} &nbsp;
                          {moment(fixture.createdAt).format("LT")}{" "}
                        </span>
                      </div>
                      <div className="col-md-4 col-12">
                        <button className="btn btn-lg btn-primary rounded-pill">
                          {moment(fixture.time).format("LT")}{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Fixture;
