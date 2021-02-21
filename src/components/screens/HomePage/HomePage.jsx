import React from "react";
import ReactPlayer from "react-player";
import slideone from "../../../assets/img/slideone.png";
import imagehomeone from "../../../assets/img/imagehomeone.png";
import imagehometwo from "../../../assets/img/imagehometwo.png";
import imagehomethree from "../../../assets/img/imagehomethree.png";
import "./css/style.css";

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
          <h2 className="mb-50">Upcoming Events</h2>
          <div class="row g-2">
            <div class="col-6">
              <div class="border bg-bluejik h-315 hide-overflow"></div>
            </div>
            <div class="col-6">
              <div class="border bg-bluejik h-315 hide-overflow"></div>
            </div>
            <div class="col-6">
              <div class="border bg-bluejik h-315 hide-overflow"></div>
            </div>
            <div class="col-6">
              <div class="border bg-bluejik h-315 hide-overflow"></div>
            </div>
          </div>
        </div>
      </div>
      <div id="homepageSectionFour">
        <div class="container">
          <h2 className="mb-50">Upcoming Events</h2>
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
          <h2 className="mb-50">Upcoming Events</h2>
          <div
            id="jerseysCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators"></div>
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
              data-bs-target="#jerseysCarousel"
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
              data-bs-target="#jerseysCarousel"
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
      </div>
    </div>
  );
};

export default HomePage;
