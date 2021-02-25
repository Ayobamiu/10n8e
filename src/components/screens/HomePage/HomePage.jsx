import React from "react";
import ReactPlayer from "react-player";
import slideone from "../../../assets/img/slideone.png";
import imagehomeone from "../../../assets/img/imagehomeone.png";
import imagehometwo from "../../../assets/img/imagehometwo.png";
import imagehomethree from "../../../assets/img/imagehomethree.png";
import kit1 from "../../../assets/img/kit1.png";
import kit2 from "../../../assets/img/kit2.png";
import kit3 from "../../../assets/img/kit3.png";
import sponsor1 from "../../../assets/img/sponsor1.png";
import sponsor2 from "../../../assets/img/sponsor2.png";
import sponsor3 from "../../../assets/img/sponsor3.png";
import sponsor4 from "../../../assets/img/sponsor4.png";
import sponsor5 from "../../../assets/img/sponsor5.png";
import sponsor6 from "../../../assets/img/sponsor6.png";

import logo from "../../../assets/img/10n80logo.png";
import "./css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../../includes/Footer/Footer";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage">
      <div id="homepageSectionOne">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={slideone}
                className="d-block w-100 slide-image"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={slideone}
                className="d-block w-100 slide-image"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={slideone}
                className="d-block w-100 slide-image"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>{" "}
      <div id="homepageSectionTwo">
        <div class="container">
          <h2 className="mb-50">Upcoming Events</h2>
          <div class="row g-2">
            <div class="col-12">
              <div class="border bg-light h-250 hide-overflow">
                <img src={imagehomeone} alt="" className="w-100" />
              </div>
            </div>
            <div class="col-6">
              <div class="border bg-light h-315 hide-overflow">
                <img src={imagehometwo} alt="" className="w-100" />
              </div>
            </div>
            <div class="col-6">
              <div class="border bg-light h-315 hide-overflow">
                <img src={imagehomethree} alt="" className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="homepageSectionThree">
        <div class="container">
          <h2 className="mb-50">Past Results</h2>
          <div class="row g-2">
            <div class="col-6">
              <div class="border loading h-315 hide-overflow"></div>
            </div>
            <div class="col-6">
              <div class="border loading h-315 hide-overflow"></div>
            </div>
            <div class="col-6">
              <div class="border loading h-315 hide-overflow"></div>
            </div>
            <div class="col-6">
              <div class="border loading h-315 hide-overflow"></div>
            </div>
          </div>
        </div>
      </div>
      <div id="homepageSectionFour">
        <div class="container">
          <h2 className="mb-50">Highlights</h2>
          <div class="row g-2">
            <div class="col-6 col-md-4">
              <div class=" h-332 hide-overflow player-item">
                <div className="player-box">
                  <ReactPlayer
                    height="100%"
                    width="100%"
                    url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                  />
                </div>
                <p>
                  <b>Back to black ops</b>
                </p>
                <p className="text-muted">2 Feb. 2021</p>
              </div>
            </div>
            <div class="col-6 col-md-4">
              <div class=" h-332 hide-overflow player-item">
                <div className="player-box">
                  <ReactPlayer
                    height="100%"
                    width="100%"
                    url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                  />
                </div>
                <p>
                  <b>Back to black ops</b>
                </p>
                <p className="text-muted">2 Feb. 2021</p>
              </div>
            </div>
            <div class="col-6 col-md-4">
              <div class=" h-332 hide-overflow player-item">
                <div className="player-box">
                  <ReactPlayer
                    height="100%"
                    width="100%"
                    url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                  />
                </div>
                <p>
                  <b>Back to black ops</b>
                </p>
                <p className="text-muted">2 Feb. 2021</p>
              </div>
            </div>
            <div class="col-6 col-md-4">
              <div class=" h-332 hide-overflow player-item">
                <div className="player-box">
                  <ReactPlayer
                    height="100%"
                    width="100%"
                    url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                  />
                </div>
                <p>
                  <b>Back to black ops</b>
                </p>
                <p className="text-muted">2 Feb. 2021</p>
              </div>
            </div>
            <div class="col-6 col-md-4">
              <div class=" h-332 hide-overflow player-item">
                <div className="player-box">
                  <ReactPlayer
                    height="100%"
                    width="100%"
                    url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                  />
                </div>
                <p>
                  <b>Back to black ops</b>
                </p>
                <p className="text-muted">2 Feb. 2021</p>
              </div>
            </div>
            <div class="col-6 col-md-4">
              <div class=" h-332 hide-overflow player-item">
                <div className="player-box">
                  <ReactPlayer
                    height="100%"
                    width="100%"
                    url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                  />
                </div>
                <p>
                  <b>Back to black ops</b>
                </p>
                <p className="text-muted">2 Feb. 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="homepageSectionFive">
        <div className="container">
          <h2 className="mb-50">10n8E Merch store</h2>
          <div
            id="carouselExampleControlsForKit"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className="d-block w-100 slide-item" alt="...">
                  <div class="row g-2 justify-content-center">
                    <div class="col-6 col-md-4">
                      <Link to="/store/2">
                        <div class="kit-container  hide-overflow">
                          <div className="kit-image">
                            <img src={kit1} alt="" className="kit-image-img" />
                          </div>
                          <h3>#35,000</h3>
                          <p>Gamers hoodie jacket</p>
                        </div>
                      </Link>
                    </div>
                    <div class="col-6 col-md-4">
                      <Link to="/store/2">
                        <div class="kit-container  hide-overflow">
                          <div className="kit-image">
                            <img src={kit1} alt="" className="kit-image-img" />
                          </div>
                          <h3>#35,000</h3>
                          <p>Gamers hoodie jacket</p>
                        </div>
                      </Link>
                    </div>
                    <div class="col-6 col-md-4 hide-900">
                      <Link to="/store/2">
                        <div class="kit-container  hide-overflow">
                          <div className="kit-image">
                            <img src={kit1} alt="" className="kit-image-img" />
                          </div>
                          <h3>#35,000</h3>
                          <p>Gamers hoodie jacket</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>{" "}
              </div>
              <div class="carousel-item">
                <div className="d-block w-100 slide-item" alt="...">
                  <div class="row g-2 justify-content-center">
                    <div class="col-6 col-md-4">
                      <Link to="/store/2">
                        <div class="kit-container  hide-overflow">
                          <div className="kit-image">
                            <img src={kit1} alt="" className="kit-image-img" />
                          </div>
                          <h3>#35,000</h3>
                          <p>Gamers hoodie jacket</p>
                        </div>
                      </Link>
                    </div>
                    <div class="col-6 col-md-4">
                      <Link to="/store/2">
                        <div class="kit-container  hide-overflow">
                          <div className="kit-image">
                            <img src={kit1} alt="" className="kit-image-img" />
                          </div>
                          <h3>#35,000</h3>
                          <p>Gamers hoodie jacket</p>
                        </div>
                      </Link>
                    </div>
                    <div class="col-6 col-md-4 hide-900">
                      <Link to="/store/2">
                        <div class="kit-container  hide-overflow">
                          <div className="kit-image">
                            <img src={kit1} alt="" className="kit-image-img" />
                          </div>
                          <h3>#35,000</h3>
                          <p>Gamers hoodie jacket</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>{" "}
              </div>
              <div class="carousel-item">
                <div className="d-block w-100 slide-item" alt="...">
                  <div class="row g-2 justify-content-center">
                    <div class="col-6 col-md-4"> 
                      <Link to="/store/2">
                        <div class="kit-container  hide-overflow">
                          <div className="kit-image">
                            <img src={kit1} alt="" className="kit-image-img" />
                          </div>
                          <h3>#35,000</h3>
                          <p>Gamers hoodie jacket</p>
                        </div>
                      </Link>
                    </div>
                    <div class="col-6 col-md-4">
                      <Link to="/store/2">
                        <div class="kit-container  hide-overflow">
                          <div className="kit-image">
                            <img src={kit1} alt="" className="kit-image-img" />
                          </div>
                          <h3>#35,000</h3>
                          <p>Gamers hoodie jacket</p>
                        </div>
                      </Link>
                    </div>
                    <div class="col-6 col-md-4 hide-900">
                      <Link to="/store/2">
                        <div class="kit-container  hide-overflow">
                          <div className="kit-image">
                            <img src={kit1} alt="" className="kit-image-img" />
                          </div>
                          <h3>#35,000</h3>
                          <p>Gamers hoodie jacket</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControlsForKit"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControlsForKit"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>{" "}
      <div id="homepageSectionSix">
        <div class="container">
          <h2 className="mb-50">Live Now</h2>
          <div class="row ">
            <div class="col-12 ">
              <div class="border loading h-400 hide-overflow">
                <ReactPlayer
                  height="100%"
                  width="100%"
                  url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="homepageSectionSeven">
        <div class="container">
          <h2 className="">Our Parners</h2>
          <div class="row">
            <div class="col-6 m-10 h-120 col-md-2">
              <img src={sponsor1} alt="" />
            </div>
            <div class="col-6 m-10 h-120 col-md-2">
              <img src={sponsor2} alt="" />
            </div>
            <div class="col-6 m-10 h-120 col-md-2">
              <img src={sponsor3} alt="" />
            </div>
            <div class="col-6 m-10 h-120 col-md-2">
              <img src={sponsor4} alt="" />
            </div>
            <div class="col-6 m-10 h-120 col-md-2">
              <img src={sponsor5} alt="" />
            </div>
            <div class="col-6 m-10 h-120 col-md-2">
              <img src={sponsor6} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
