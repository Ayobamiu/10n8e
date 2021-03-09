import React from "react";
import "./css/style.css";
import vid from "../../../assets/vid/10n8e_done_Adjusted.MP4";
import trophy from "../../../assets/img/trophy.png";
import Footer from "../../includes/Footer/Footer";
import whiteTwitch from "../../../assets/img/whiteTwitch.png";
import whiteTwitter from "../../../assets/img/whiteTwitter.png";
import whiteInsta from "../../../assets/img/whiteInsta.png";
const AboutPage = () => {
  return (
    <div className="aboutpage">
      <div id="aboutPageSectionOne">
        <video className="myVid" loop autoPlay muted>
          <source src={vid} type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div id="aboutPageSectionTwo">
        <div className="grey">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="purple">
                <img src={trophy} alt="" height="120%" />
              </div>
            </div>
            <div className="col-md-6 col-12">
              <h1>About Us</h1>
              <p>
                10N8E is an African Esports organization with mission to support
                the continent, the gamers, athletes, creators and fans to
                provide a truly world class industry. 10N8E is passionate about
                the growth of Esports and ensuring Africa’s representation and
                contribution to the industry growth. SpectaPLAY (the Parent
                Company of 10N8E) mission is to bring PLAY to the continent.
                10N8E is uniquely positioned to support the growing gamers,
                creators, fans and ambassadors across the continent with its
                domain knowledge and relationships,
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="aboutWhatWeDoSection">
        <div className="container">
          <h1>What we do</h1>
          <div className="row ">
            <div className="col-md-4 col-12">
              <p>
                Esports offline and online tournaments with tailored approaches
                for the African continent.
              </p>
            </div>
            <div className="col-md-4 col-12">
              <p>
                Live Esports studio and cutting edge content production and fan
                engagement.
              </p>
            </div>
            <div className="col-md-4 col-12">
              <p>
                Endorsement and talent marketing for African gamers, content
                creators and fans.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="aboutFollowSection">
        <h1>Follow us on our handles</h1>
        <div className="row">
          <div className="col-4">
            <a href="https://www.twitch.tv/10n8eplay">
              <img src={whiteTwitch} alt="" />
            </a>
          </div>
          <div className="col-4">
            <a href="https://mobile.twitter.com/10N8EPLAY">
              <img src={whiteTwitter} alt="" />
            </a>
          </div>
          <div className="col-4">
            <a href="https://www.instagram.com/10n8eplay/">
              <img src={whiteInsta} alt="" />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
