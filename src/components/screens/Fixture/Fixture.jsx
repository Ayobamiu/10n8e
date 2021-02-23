import React from "react";
import ReactPlayer from "react-player";
import fixtureImage1 from "../../../assets/img/fixtureImage1.png";
import team2logo from "../../../assets/img/team2logo.png";
import team1logo from "../../../assets/img/team1logo.png";
import storePs1 from "../../../assets/img/storePs1.png";
import storeShirt1 from "../../../assets/img/storeShirt1.png";
import "./css/style.css";
import Footer from "../../includes/Footer/Footer";

const Fixture = () => {
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
          <h2 className="mb-50">Highlights</h2>
          <div class="row g-3">
            <div class="col-6 col-md-4">
              <div class=" h-332 hide-overflow event-item">
                <div className="head">
                  <h2>ET TITANS</h2>
                </div>

                <div className="vs">
                  <div>
                    <img src={team1logo} alt="" />
                    <span>vs</span>
                    <img src={team2logo} alt="" />
                  </div>
                  <p>Feb. 27, 2021 6:00pm</p>
                </div>
              </div>
            </div>
            <div class="col-6 col-md-4">
              <div class=" h-332 hide-overflow event-item">
                <div className="head">
                  <h2>ET TITANS</h2>
                </div>

                <div className="vs">
                  <div>
                    <img src={team1logo} alt="" />
                    <span>vs</span>
                    <img src={team2logo} alt="" />
                  </div>
                  <p>Feb. 27, 2021 6:00pm</p>
                </div>
              </div>
            </div>
            <div class="col-6 col-md-4">
              <div class=" h-332 hide-overflow event-item">
                <div className="head">
                  <h2>ET TITANS</h2>
                </div>

                <div className="vs">
                  <div>
                    <img src={team1logo} alt="" />
                    <span>vs</span>
                    <img src={team2logo} alt="" />
                  </div>
                  <p>Feb. 27, 2021 6:00pm</p>
                </div>
              </div>
            </div>
            <div class="col-6 col-md-4">
              <div class=" h-332 hide-overflow event-item">
                <div className="head">
                  <h2>ET TITANS</h2>
                </div>

                <div className="vs">
                  <div>
                    <img src={team1logo} alt="" />
                    <span>vs</span>
                    <img src={team2logo} alt="" />
                  </div>
                  <p>Feb. 27, 2021 6:00pm</p>
                </div>
              </div>
            </div>
            <div class="col-6 col-md-4">
              <div class=" h-332 hide-overflow event-item">
                <div className="head">
                  <h2>ET TITANS</h2>
                </div>

                <div className="vs">
                  <div>
                    <img src={team1logo} alt="" />
                    <span>vs</span>
                    <img src={team2logo} alt="" />
                  </div>
                  <p>Feb. 27, 2021 6:00pm</p>
                </div>
              </div>
            </div>
            <div class="col-6 col-md-4">
              <div class=" h-332 hide-overflow event-item">
                <div className="head">
                  <h2>ET TITANS</h2>
                </div>

                <div className="vs">
                  <div>
                    <img src={team1logo} alt="" />
                    <span>vs</span>
                    <img src={team2logo} alt="" />
                  </div>
                  <p>Feb. 27, 2021 6:00pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="fixturePageSectionThree">
        <div class="container">
          <h2 className="mb-50">Highlights</h2>
          <div className="new-event-item">
            <div>
              <img src={team1logo} alt="" />
              <span>vs</span>
              <img src={team2logo} alt="" />
            </div>
            <p className="date">
              <b>Feb. 27, 2021</b>
            </p>
            <p className="time">
              <b>6:00pm</b>
            </p>
          </div>
          <div className="new-event-item">
            <div>
              <img src={team1logo} alt="" />
              <span>vs</span>
              <img src={team2logo} alt="" />
            </div>
            <p className="date">
              <b>Feb. 27, 2021</b>
            </p>
            <p className="time">
              <b>6:00pm</b>
            </p>
          </div>
          <div className="new-event-item">
            <div>
              <img src={team1logo} alt="" />
              <span>vs</span>
              <img src={team2logo} alt="" />
            </div>
            <p className="date">
              <b>Feb. 27, 2021</b>
            </p>
            <p className="time">
              <b>6:00pm</b>
            </p>
          </div>
          <div className="new-event-item">
            <div>
              <img src={team1logo} alt="" />
              <span>vs</span>
              <img src={team2logo} alt="" />
            </div>
            <p className="date">
              <b>Feb. 27, 2021</b>
            </p>
            <p className="time">
              <b>6:00pm</b>
            </p>
          </div>
          <div className="new-event-item">
            <div>
              <img src={team1logo} alt="" />
              <span>vs</span>
              <img src={team2logo} alt="" />
            </div>
            <p className="date">
              <b>Feb. 27, 2021</b>
            </p>
            <p className="time">
              <b>6:00pm</b>
            </p>
          </div>
          <div className="new-event-item">
            <div>
              <img src={team1logo} alt="" />
              <span>vs</span>
              <img src={team2logo} alt="" />
            </div>
            <p className="date">
              <b>Feb. 27, 2021</b>
            </p>
            <p className="time">
              <b>6:00pm</b>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Fixture;
