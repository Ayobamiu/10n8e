import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faHome,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import classnames from "classnames";
import Footer from "../../includes/Footer/Footer";
import "./css/style.css";
import { Link } from "react-router-dom";
import {
  products,
  loadProducts,
  loadProduct,
  addproduct,
} from "../../../store/productSlice";
  import { useSelector, useDispatch } from "react-redux";
import { TabContent, TabPane } from "reactstrap";
import moment from "moment";
import {
  addfixture,
  loadfixtures,
  fixtures,
  removefixture,
  loadingFixtureStatus,
  loadingFixtures,
} from "../../../store/fixtureSlice";

const AdminTournaments = () => {
  const targetProducts = useSelector(products);
  const targetFixtures = useSelector(fixtures);
  const targetStatus = useSelector(loadingFixtureStatus);
  const fixtureISLoading = useSelector(loadingFixtures);
  console.log(targetFixtures);
  const dispatch = useDispatch();
  const [good, setGood] = useState(false);
  useEffect(() => {
    dispatch(loadfixtures());
    dispatch(loadProducts());
  }, [good]);

  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [startDate, setStartDate] = useState("");
  const [roundGameEnd, setRoundGameEnd] = useState("");
  const [finalGame, setFinalGame] = useState("");
  const [images, setImages] = useState("");
  const [admin1, setAdmin1] = useState("");
  const [admin2, setAdmin2] = useState("");
  const [admin3, setAdmin3] = useState("");
  const [admin4, setAdmin4] = useState("");
  const [participantsImages, setparticipantsImages] = useState(null);
  const [rule1, setRule1] = useState("");
  const [rule2, setRule2] = useState("");
  const [rule3, setRule3] = useState("");
  const [rule4, setRule4] = useState("");
  const [document1, setdocument1] = useState(null);
  const [document2, setdocument2] = useState(null);
  const [document3, setdocument3] = useState(null);
  const [document4, setdocument4] = useState(null);
  const [document1title, setdocument1title] = useState("");
  const [document2title, setdocument2title] = useState("");
  const [document3title, setdocument3title] = useState("");
  const [document4title, setdocument4title] = useState("");
  const [rule5, setRule5] = useState("");
  const [rule6, setRule6] = useState("");
  const [rule7, setRule7] = useState("");
  const [rule8, setRule8] = useState("");
  const [rule9, setRule9] = useState("");
  const [rule10, setRule10] = useState("");

  const submitFixture = (e) => {
    e.preventDefault();

    const newFormData = new FormData();
    newFormData.set("title", title);
    newFormData.set("time", time);
    newFormData.set("startDate", startDate);
    newFormData.set("roundGameEnd", roundGameEnd);
    newFormData.set("finalGame", finalGame);

    for (let index = 0; index < participantsImages.length; index++) {
      const img = images[index];
      newFormData.append("images", img);
    }

    for (let index = 0; index < participantsImages.length; index++) {
      const img = participantsImages[index];
      newFormData.append("participantsImages", img);
    }

    newFormData.set("admin1", admin1);
    newFormData.set("admin2", admin2);
    newFormData.set("admin3", admin3);
    newFormData.set("admin4", admin4);

    newFormData.set("rule1", rule1);
    newFormData.set("rule2", rule2);
    newFormData.set("rule3", rule3);
    newFormData.set("rule4", rule4);
    newFormData.set("rule5", rule5);
    newFormData.set("rule6", rule6);
    newFormData.set("rule7", rule7);
    newFormData.set("rule8", rule8);
    newFormData.set("rule9", rule9);
    newFormData.set("rule10", rule10);

    newFormData.append("document1", document1);
    newFormData.append("document2", document2);
    newFormData.append("document3", document3);
    newFormData.append("document4", document4);

    newFormData.set("document1title", document1title);
    newFormData.set("document2title", document2title);
    newFormData.set("document3title", document3title);
    newFormData.set("document4title", document4title);

    dispatch(addfixture(newFormData));
  };
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  if (targetStatus === "Added successfully") {
    toggle("1");
  }
  return (
    <div id="admintournaments">
      <div className="blue">
        {fixtureISLoading && (
          <div>
            <div class="spinner-grow text-light" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <span style={{ color: "#ffffff" }}>{targetStatus}</span>
          </div>
        )}
        <Link to="/admin">
          <button>
            <FontAwesomeIcon icon={faHome} color="#C1C0C0" />
          </button>
        </Link>
        <button
          className={classnames({ active: activeTab === "1" })}
          onClick={() => {
            toggle("1");
          }}
        >
          <FontAwesomeIcon icon={faEye} color="#C1C0C0" />
        </button>
        <button
          className={classnames({ active: activeTab === "2" })}
          onClick={() => {
            toggle("2");
          }}
        >
          <FontAwesomeIcon icon={faPlus} color="#C1C0C0" />
        </button>
      </div>

      <div className="white">
        <h1>Tournaments</h1>

        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <div className="list">
              {targetFixtures.map((fixture) => (
                <div className="item">
                  <div class="mb-auto">
                    <h5>{fixture.title}</h5>
                  </div>

                  <p>
                    <button
                      className="btn btn-danger "
                      onClick={() => dispatch(removefixture(fixture._id))}
                    >
                      DELETE
                    </button>
                  </p>
                </div>
              ))}
            </div>
          </TabPane>
          <TabPane tabId="2">
            <form onSubmit={(e) => submitFixture(e)}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Title
                </label>
                <input
                  type="text"
                  class="form-control"
                  aria-describedby="titleHelp"
                  required
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Tournament title"
                />
                <div id="titleHelp" class="form-text">
                  This is the display of the Tournament overview
                </div>
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">
                  Time
                </label>
                <input
                  type="datetime-local"
                  class="form-control"
                  id="description"
                  aria-describedby="description"
                  required
                  onChange={(e) => setTime(e.target.value)}
                />
                <div id="description" class="form-text">
                  The is the time of the event
                </div>
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">
                  Round Game start
                </label>
                <input
                  type="date"
                  class="form-control"
                  id="description"
                  aria-describedby="description"
                  required
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">
                  Round game end
                </label>
                <input
                  type="date"
                  class="form-control"
                  id="description"
                  aria-describedby="description"
                  required
                  onChange={(e) => setRoundGameEnd(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">
                  Final game
                </label>
                <input
                  type="date"
                  class="form-control"
                  id="description"
                  aria-describedby="description"
                  required
                  onChange={(e) => setFinalGame(e.target.value)}
                />
                <div id="description" class="form-text">
                  Date of final game
                </div>
              </div>
              <div class="mb-3">
                <label for="price" class="form-label">
                  Rules
                </label>
                <input
                  type="text"
                  class="form-control mb-10"
                  aria-describedby="priceHelp"
                  onChange={(e) => setRule1(e.target.value)}
                  placeholder="Enter Rule 1"
                />
                <input
                  type="text"
                  class="form-control mb-10"
                  aria-describedby="priceHelp"
                  onChange={(e) => setRule2(e.target.value)}
                  placeholder="Enter Rule 2"
                />
                <input
                  type="text"
                  class="form-control mb-10"
                  aria-describedby="priceHelp"
                  onChange={(e) => setRule3(e.target.value)}
                  placeholder="Enter Rule 3"
                />
                <input
                  type="text"
                  class="form-control mb-10"
                  aria-describedby="priceHelp"
                  onChange={(e) => setRule4(e.target.value)}
                  placeholder="Enter Rule 4"
                />
                <input
                  type="text"
                  class="form-control mb-10"
                  aria-describedby="priceHelp"
                  onChange={(e) => setRule5(e.target.value)}
                  placeholder="Enter Rule 5"
                />
                <input
                  type="text"
                  class="form-control mb-10"
                  aria-describedby="priceHelp"
                  onChange={(e) => setRule6(e.target.value)}
                  placeholder="Enter Rule 6"
                />
                <input
                  type="text"
                  class="form-control mb-10"
                  aria-describedby="priceHelp"
                  onChange={(e) => setRule7(e.target.value)}
                  placeholder="Enter Rule 7"
                />
                <input
                  type="text"
                  class="form-control mb-10"
                  aria-describedby="priceHelp"
                  onChange={(e) => setRule8(e.target.value)}
                  placeholder="Enter Rule 8"
                />
                <input
                  type="text"
                  class="form-control mb-10"
                  aria-describedby="priceHelp"
                  onChange={(e) => setRule9(e.target.value)}
                  placeholder="Enter Rule 9"
                />
                <input
                  type="text"
                  class="form-control mb-10"
                  aria-describedby="priceHelp"
                  onChange={(e) => setRule10(e.target.value)}
                  placeholder="Enter Rule 10"
                />
                <div id="priceHelp" class="form-text">
                  Rules of the game
                </div>
              </div>
              <div class="mb-3">
                <label for="price" class="form-label">
                  Admins
                </label>
                <input
                  type="text"
                  class="form-control mb-10"
                  aria-describedby="priceHelp"
                  onChange={(e) => setAdmin1(e.target.value)}
                  placeholder="Enter Admin 1 email"
                />
                <input
                  type="text"
                  class="form-control mb-10"
                  aria-describedby="priceHelp"
                  onChange={(e) => setAdmin2(e.target.value)}
                  placeholder="Enter Admin 2 email"
                />
                <input
                  type="text"
                  class="form-control mb-10"
                  aria-describedby="priceHelp"
                  onChange={(e) => setAdmin3(e.target.value)}
                  placeholder="Enter Admin 3 email"
                />
                <input
                  type="text"
                  class="form-control mb-10"
                  aria-describedby="priceHelp"
                  onChange={(e) => setAdmin4(e.target.value)}
                  placeholder="Enter Admin 4 email"
                />

                <div id="priceHelp" class="form-text">
                  Emails of the admins
                </div>
              </div>
              <div class="mb-3">
                <label for="price" class="form-label">
                  Documents and title
                </label>
                <input
                  type="text"
                  class="form-control mb-10"
                  aria-describedby="priceHelp"
                  placeholder="Document one title"
                  onChange={(e) => setdocument1title(e.target.value)}
                />
                <input
                  type="file"
                  class="form-control mb-10"
                  aria-describedby="priceHelp"
                  onChange={(e) => setdocument1(e.target.files[0])}
                />
                <input
                  type="text"
                  class="form-control mb-10"
                  aria-describedby="priceHelp"
                  placeholder="Document two title"
                  onChange={(e) => setdocument2title(e.target.value)}
                />
                <input
                  type="file"
                  class="form-control mb-10"
                  aria-describedby="priceHelp"
                  onChange={(e) => setdocument2(e.target.files[0])}
                />
                <input
                  type="text"
                  class="form-control mb-10"
                  aria-describedby="priceHelp"
                  placeholder="Document three title"
                  onChange={(e) => setdocument3title(e.target.value)}
                />
                <input
                  type="file"
                  class="form-control mb-10"
                  aria-describedby="priceHelp"
                  onChange={(e) => setdocument3(e.target.files[0])}
                />
                <input
                  type="text"
                  class="form-control mb-10"
                  aria-describedby="priceHelp"
                  placeholder="Document four title"
                  onChange={(e) => setdocument4title(e.target.value)}
                />
                <input
                  type="file"
                  class="form-control mb-10"
                  aria-describedby="priceHelp"
                  onChange={(e) => setdocument4(e.target.files[0])}
                />
                <div id="priceHelp" class="form-text">
                  Supporting Documents
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Select multiple image files for display
                </label>
                <input
                  type="file"
                  class="form-control"
                  required
                  multiple
                  onChange={(e) => {
                    setImages(e.target.files);
                  }}
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Upload multiple image files of participants
                </label>
                <input
                  type="file"
                  class="form-control"
                  required
                  multiple
                  onChange={(e) => {
                    setparticipantsImages(e.target.files);
                  }}
                />
              </div>

              <button type="submit" class="btn btn-primary">
                Add Tournament
              </button>
            </form>
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
};

export default AdminTournaments;
