import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Artboard from "../../../assets/img/Artboard.png";
import imagehomeone from "../../../assets/img/imagehomeone.png";
import imagehometwo from "../../../assets/img/imagehometwo.png";
import imagehomethree from "../../../assets/img/imagehomethree.png";
import fixture1 from "../../../assets/img/fixture1.png";
import fixture2 from "../../../assets/img/fixture2.png";
import fixture3 from "../../../assets/img/fixture3.png";
import sponsor1 from "../../../assets/img/Athlane.png";
import sponsor2 from "../../../assets/img/Keexs.png";
import sponsor3 from "../../../assets/img/Los.png";
import sponsor4 from "../../../assets/img/SC.png";
import sponsor5 from "../../../assets/img/Spectaplay.png";
import sponsor6 from "../../../assets/img/sponsor6.png";
import noimage from "../../../assets/img/noimage.jpg";
import whatwedothree from "../../../assets/img/whatwedothree.png";
import whatwedotwo from "../../../assets/img/whatwedotwo.png";
import whatwedoone from "../../../assets/img/whatwedoone.png";
import naija from "../../../assets/img/naija.png";
import ghana from "../../../assets/img/ghana.png";
import one from "../../../assets/img/one.jpg";
import tournamentthree from "../../../assets/img/tournamentthree.png";
import three from "../../../assets/img/three.jpg";
// import four from "../../../assets/img/four.png";
// import five from "../../../assets/img/five.png";
import vid from "../../../assets/vid/vid.mp4";

import logo from "../../../assets/img/10n80logo.png";
import "./css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../../includes/Footer/Footer";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import {
  loadfixtures,
  fixtures,
  loadingFixtures,
  loadfixture,
} from "../../../store/fixtureSlice";
import {
  products,
  loadProducts,
  loadingProduct,
} from "../../../store/productSlice";
import {
  loadhighlights,
  highlights,
  loadhighlight,
  loadingHighlight,
} from "../../../store/highlightSlice";
import moment from "moment";
import { liveNows, loadliveNows } from "../../../store/liveNowSlice";
import { loadslides, slides } from "../../../store/slideSlice";

const HomePage = (props) => {
  const allLiveNows = useSelector(liveNows);
  const firstLivenow = allLiveNows[0];
  const allProducts = useSelector(products);
  const allHighlights = useSelector(highlights);
  const allFixtures = useSelector(fixtures);
  const allSlides = useSelector(slides);
  const loadingFixturesValue = useSelector(loadingFixtures);
  const loadingProductsValue = useSelector(loadingProduct);
  const loadingHighlightValue = useSelector(loadingHighlight);
  const dispatch = useDispatch();
  const [good, setGood] = useState(false);
  useEffect(() => {
    dispatch(loadProducts());
    dispatch(loadhighlights());
    dispatch(loadfixtures());
    dispatch(loadliveNows());
    dispatch(loadslides());
  }, [good]);
  const { buttonLabel, className } = props;
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);

  console.log("allSlides", allSlides);
  const toggle = () => setModal(!modal);
  const toggle2 = () => setModal2(!modal2);
  const [modalVid, setModalVid] = useState("");

  const externalCloseBtn = (
    <button
      className="close"
      style={{ position: "absolute", top: "15px", right: "15px" }}
      onClick={() => {
        // toggle();
        setModal(false);
        setModal2(false);
        // toggle2();
      }}
    >
      &times;
    </button>
  );

  return (
    <div id="homepage">
      <div>
        <Modal
          isOpen={modal}
          toggle={toggle}
          className={className}
          external={externalCloseBtn}
        >
          <div
            class="border loading h-400 hide-overflow player"
            onClick={(e) => e.preventDefault()}
          >
            <ReactPlayer
              height="100%"
              width="100%"
              url={firstLivenow && firstLivenow.link}
            />
          </div>
        </Modal>
      </div>
      <div>
        <Modal
          isOpen={modal2}
          toggle={toggle2}
          className={className}
          external={externalCloseBtn}
        >
          <div
            class="border loading h-400 hide-overflow player"
            onClick={(e) => e.preventDefault()}
          >
            <ReactPlayer height="100%" width="100%" url={modalVid} />
          </div>
        </Modal>
      </div>
      <div id="homepageSectionOne">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {allSlides && (
              <div className="carousel-item active">
                <Link
                  to={`/tournament/${
                    allSlides && allSlides[0] && allSlides[0].tournament.slug
                  }`}
                >
                  <img
                    src={allSlides && allSlides[0] && allSlides[0].image}
                    className="d-block w-100 slide-image"
                    alt="..."
                  />
                </Link>
              </div>
            )}
            {allSlides &&
              allSlides.slice(1).map((item) => (
                <div className="carousel-item">
                  <Link to={`/tournament/${item.tournament.slug}`}>
                    <img
                      src={item.image}
                      className="d-block w-100 slide-image"
                      alt="..."
                    />
                  </Link>
                </div>
              ))}
            {allSlides && (
              <div className="carousel-item">
                <Link
                  to={`/tournament/${
                    allSlides && allSlides[0] && allSlides[0].tournament.slug
                  }`}
                >
                  <ReactPlayer
                    height="100%"
                    width="100%"
                    url={vid}
                    playing={true}
                    loop={true}
                    muted={true}
                  />
                </Link>
              </div>
            )}
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
      </div>
      <div id="homePageSectionOneText">
        <div className="container">
          <h1>What is 10N8E?</h1>
          <p>
            10N8E is an African Esports organization with mission to support the
            continent, the gamers, athletes, creators and fans to provide a
            truly world class industry. <br />
            10N8E is passionate about the growth of Esports and ensuring
            Africa’s representation and contribution to the industry growth.
            <br />
            SpectaPLAY (the Parent Company of 10N8E) mission is to bring PLAY to
            the continent. 10N8E is uniquely positioned to support the growing
            gamers, creators, fans and ambassadors across the continent with its
            domain knowledge and relationships,
          </p>
        </div>
      </div>

      <div id="aboutWhatWeDoSection">
        <div className="container">
          <h1>What we do</h1>
          <div className="row justify-content-between">
            <div className="col-md-4 col-12">
              <img src={whatwedoone} alt="" />
              <p>
                Esports offline and online tournaments with tailored approaches
                for the African continent.
              </p>
            </div>
            <div className="col-md-4 col-12">
              <img src={whatwedotwo} alt="" />

              <p>
                Live Esports studio and cutting edge content production and fan
                engagement.
              </p>
            </div>
            <div className="col-md-4 col-12">
              <img src={whatwedothree} alt="" />

              <p>
                Endorsement and talent marketing for African gamers, content
                creators and fans.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="homepageSectionTwo">
        <div class="container">
          <h2 className="mb-20">Upcoming Events</h2>
          <div class="row g-2">
            {allFixtures &&
              allFixtures.map((item) => (
                <Link to={`/tournament/${item.slug}`} class="col-4">
                  <div class="border bg-light h-228  hide-overflow">
                    <img
                      className="w-100"
                      src={item && item.images && item.images[0]}
                      alt=""
                    />
                  </div>
                </Link>
              ))}
            <Link
              to="/tournament/60440987ede97a00153d77e1"
              class="col-4"
              onClick={(e) => e.preventDefault()}
            >
              <div class="border bg-light h-228  hide-overflow">
                <img className="w-100" src={ghana} alt="" />
              </div>
            </Link>
            {/* <Link to="/tournament/60440987ede97a00153d77e1" class="col-4">
              <div class="border bg-light h-228  hide-overflow">
                <img className="w-100" src={naija} alt="" />
              </div>
            </Link> */}
            {/* {allFixtures.map((item) => (
              <Link to={`/tournament/${item._id}`} class="col-4">
                <div class="border bg-light h-315 hide-overflow">
                  <img src={item.image} alt="" />
                </div>
              </Link>
            ))} */}
            {/* {loadingFixturesValue && (
              <div class="spinner-grow" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            )} */}
          </div>
        </div>
      </div>
      <div id="homepageSectionThree">
        <div class="container">
          <h2 className="mb-20">Past Results</h2>
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
          <h2 className="mb-20">Highlights</h2>
          <div class="row g-2">
            {allHighlights.slice(0, 6).map((item) => (
              <div class="col-6 col-md-4">
                <div class=" h-332 hide-overflow player-item">
                  <div className="player-box">
                    <ReactPlayer height="100%" width="100%" url={item.link} />
                    <div
                      className="overlay"
                      onClick={() => {
                        toggle2();
                        setModalVid(item.link);
                      }}
                    ></div>
                  </div>
                  <p className="col-12 text-truncate m-0">
                    <b>{item.title}</b>
                  </p>
                  <p className="text-muted m-0">
                    {moment(item.createdAt).format("MMM Do YY")}
                  </p>
                </div>
              </div>
            ))}
            {loadingHighlightValue && (
              <div class="spinner-grow" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div id="homepageSectionFive">
        <div className="container">
          <h2 className="mb-20">10n8E Merch store</h2>
          <div
            id="carouselExampleControlsForKit"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              {allProducts && allProducts.length > 0 ? (
                <div class="carousel-item active">
                  <div className="d-block w-100 slide-item" alt="...">
                    <div class="row g-2 justify-content-center">
                      {allProducts.slice(0, 3).map((product) => (
                        <div class="col-6 col-md-4">
                          <Link to={`/store/${product._id}`}>
                            <div class="kit-container  hide-overflow">
                              {product.images[0].image ? (
                                <div className="kit-image">
                                  <img
                                    src={
                                      product.images &&
                                      product.images.length > 0
                                        ? product.images[0].image
                                        : noimage
                                    }
                                    alt=""
                                    className="kit-image-img"
                                  />
                                </div>
                              ) : (
                                <div class="spinner-border" role="status">
                                  <span class="visually-hidden">
                                    Loading...
                                  </span>
                                </div>
                              )}
                              <h3 className="m-0">#{product.price}</h3>
                              <p className="col-12 text-truncate m-0">
                                {product.title}
                              </p>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <p>No products</p>
              )}
              {allProducts && allProducts.length > 3 && (
                <div class="carousel-item">
                  <div className="d-block w-100 slide-item" alt="...">
                    <div class="row g-2 justify-content-center">
                      {allProducts.slice(3, 6).map((product) => (
                        <div class="col-6 col-md-4">
                          <Link to={`/store/${product._id}`}>
                            <div class="kit-container  hide-overflow">
                              <div className="kit-image">
                                <img
                                  src={
                                    product.images && product.images.length > 0
                                      ? product.images[0].image
                                      : noimage
                                  }
                                  alt=""
                                  className="kit-image-img"
                                />
                              </div>
                              <h3>#{product.price}</h3>
                              <p className="col-12 text-truncate">
                                {product.title}
                              </p>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
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
      </div>
      <div id="homepageSectionSix">
        <div class="container">
          <h2 className="mb-20">Live Now</h2>
          <div class="row ">
            <div class="col-12 ">
              <div
                class="border loading h-400 hide-overflow player"
                onClick={(e) => e.preventDefault()}
              >
                <ReactPlayer
                  height="100%"
                  width="100%"
                  url={firstLivenow && firstLivenow.link}
                />
                <div className="overlay" onClick={() => toggle()}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="homepageSectionSeven">
        <div class="container mb-20">
          <div class="row ">
            <div class="col-6 m-10 h-120 col-md-2">
              <img className="sponsor-icon" src={sponsor1} alt="" />
            </div>
            <div class="col-6 m-10 h-120 col-md-2">
              <img className="sponsor-icon" src={sponsor2} alt="" />
            </div>
            <div class="col-6 m-10 h-120 col-md-2">
              <img className="sponsor-icon" src={sponsor3} alt="" />
            </div>
            <div class="col-6 m-10 h-120 col-md-2">
              <img className="sponsor-icon" src={sponsor4} alt="" />
            </div>
            <div class="col-6 m-10 h-120 col-md-2">
              <img className="sponsor-icon" src={sponsor5} alt="" />
            </div>
            {/* <div class="col-6 m-10 h-120 col-md-2">
              <img height="40px" src={sponsor6} alt="" />
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
