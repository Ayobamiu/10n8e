import React from "react";
import "./css/style.css";
import vid from "../../../assets/vid/10n8e_done_Adjusted.MP4";
import trophy from "../../../assets/img/trophy.png";
import Footer from "../../includes/Footer/Footer";
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
            <div className="col-md-5 col-12">
              <div className="purple">
                <img src={trophy} alt="" height="120%" />
              </div>
            </div>
            <div className="col-md-7 col-12">
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
      <Footer />
    </div>
  );
};

export default AboutPage;
