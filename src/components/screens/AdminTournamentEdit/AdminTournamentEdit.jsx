import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
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
  loadfixture,
  fixture,
  updatefixture,
  addImageToFixture,
  removeImageFromFixture,
} from "../../../store/fixtureSlice";

const AdminTournamentEdit = (props) => {
  const targetProducts = useSelector(products);
  const targetFixture = useSelector(fixture);
  const targetStatus = useSelector(loadingFixtureStatus);
  const fixtureISLoading = useSelector(loadingFixtures);
  console.log(targetFixture);
  const dispatch = useDispatch();
  const [good, setGood] = useState(false);
  useEffect(() => {
    dispatch(loadfixture(props.match.params.fixtureId));
  }, [good]);

  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [overview, setOverview] = useState("");
  const [time, setTime] = useState("");
  const [link, setLink] = useState("");
  const [startDate, setStartDate] = useState("");
  const [roundGameEnd, setRoundGameEnd] = useState("");
  const [finalGame, setFinalGame] = useState("");
  const [images, setImages] = useState("");
  const [admin1, setAdmin1] = useState(
    targetFixture && targetFixture.admins && targetFixture.admins[0]
  );
  const [admin2, setAdmin2] = useState(
    targetFixture && targetFixture.admins && targetFixture.admins[1]
  );
  const [admin3, setAdmin3] = useState(
    targetFixture && targetFixture.admins && targetFixture.admins[2]
  );
  const [admin4, setAdmin4] = useState(
    targetFixture && targetFixture.admins && targetFixture.admins[3]
  );
  const [participantsImages, setparticipantsImages] = useState(null);
  const [rule1, setRule1] = useState(
    targetFixture && targetFixture.rules && targetFixture.rules[0]
  );
  const [rule2, setRule2] = useState(
    targetFixture && targetFixture.rules && targetFixture.rules[1]
  );
  const [rule3, setRule3] = useState(
    targetFixture && targetFixture.rules && targetFixture.rules[2]
  );
  const [rule4, setRule4] = useState(
    targetFixture && targetFixture.rules && targetFixture.rules[3]
  );
  const [document1, setdocument1] = useState(null);
  const [document2, setdocument2] = useState(null);
  const [document3, setdocument3] = useState(null);
  const [document4, setdocument4] = useState(null);
  const [document1title, setdocument1title] = useState("");
  const [document2title, setdocument2title] = useState("");
  const [document3title, setdocument3title] = useState("");
  const [document4title, setdocument4title] = useState("");
  const [rule5, setRule5] = useState(
    targetFixture && targetFixture.rules && targetFixture.rules[4]
  );
  const [rule6, setRule6] = useState(
    targetFixture && targetFixture.rules && targetFixture.rules[5]
  );
  const [rule7, setRule7] = useState(
    targetFixture && targetFixture.rules && targetFixture.rules[6]
  );
  const [rule8, setRule8] = useState(
    targetFixture && targetFixture.rules && targetFixture.rules[7]
  );
  const [rule9, setRule9] = useState(
    targetFixture && targetFixture.rules && targetFixture.rules[8]
  );
  const [rule10, setRule10] = useState(
    targetFixture && targetFixture.rules && targetFixture.rules[9]
  );

  const submitFixture = () => {};

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
      </div>

      <div className="white">
        <h1>Tournaments</h1>
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
              onChange={(e) => {
                setTitle(e.target.value);
                dispatch(
                  updatefixture(targetFixture._id, { title: e.target.value })
                );
              }}
              placeholder={targetFixture.title || "Tournament title"}
            />
            <div id="titleHelp" class="form-text">
              This is the display of the Tournament overview
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Call to Action
            </label>
            <input
              type="text"
              class="form-control"
              aria-describedby="titleHelp"
              required
              onChange={(e) => {
                setLink(e.target.value);
                dispatch(
                  updatefixture(targetFixture._id, { link: e.target.value })
                );
              }}
              placeholder={targetFixture.link || "Call to Action"}
            />
            <div id="titleHelp" class="form-text">
              This is the link to Register{" "}
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Description
            </label>
            <textarea
              type="text"
              class="form-control"
              aria-describedby="titleHelp"
              required
              onChange={(e) => {
                setdescription(e.target.value);
                dispatch(
                  updatefixture(targetFixture._id, {
                    description: e.target.value,
                  })
                );
              }}
              placeholder={
                targetFixture.description || "Tournament description"
              }
            />
            <div id="titleHelp" class="form-text">
              This is the description of the Tournament
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Overview
            </label>
            <textarea
              type="text"
              class="form-control"
              aria-describedby="titleHelp"
              required
              onChange={(e) => {
                setOverview(e.target.value);
                dispatch(
                  updatefixture(targetFixture._id, { overview: e.target.value })
                );
              }}
              placeholder={targetFixture.overview || "Tournament overview"}
            />
            <div id="titleHelp" class="form-text">
              This is the overview of the Tournament
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
              onChange={(e) => {
                setTime(e.target.value);
                dispatch(
                  updatefixture(targetFixture._id, { time: e.target.value })
                );
              }}
              defaultValue={targetFixture.time}
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
              onChange={(e) => {
                setStartDate(e.target.value);
                dispatch(
                  updatefixture(targetFixture._id, {
                    gameStart: e.target.value,
                  })
                );
              }}
              defaultValue={targetFixture.startDate}
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
              onChange={(e) => {
                setRoundGameEnd(e.target.value);
                dispatch(
                  updatefixture(targetFixture._id, { gameEnd: e.target.value })
                );
              }}
              defaultValue={targetFixture.roundGameEnd}
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
              onChange={(e) => {
                setFinalGame(e.target.value);
                dispatch(
                  updatefixture(targetFixture._id, {
                    finalGame: e.target.value,
                  })
                );
              }}
              defaultValue={targetFixture.finalGame}
            />
            <div id="description" class="form-text">
              Date of final game
            </div>
          </div>
          <br />
          <br />
          <br />
          <div class="mb-3 mt-20">
            <label for="price" class="form-label">
              Rules
            </label>
            <input
              type="text"
              class="form-control mb-10"
              aria-describedby="priceHelp"
              onChange={(e) => setRule1(e.target.value)}
              placeholder={
                (targetFixture.rules && targetFixture.rules[0]) ||
                "Enter Rule 1"
              }
              defaultValue={targetFixture.rules && targetFixture.rules[0]}
            />
            <input
              type="text"
              class="form-control mb-10"
              aria-describedby="priceHelp"
              onChange={(e) => setRule2(e.target.value)}
              placeholder={
                (targetFixture.rules && targetFixture.rules[1]) ||
                "Enter Rule 2"
              }
              defaultValue={targetFixture.rules && targetFixture.rules[1]}
            />
            <input
              type="text"
              class="form-control mb-10"
              aria-describedby="priceHelp"
              onChange={(e) => setRule3(e.target.value)}
              placeholder={
                (targetFixture.rules && targetFixture.rules[2]) ||
                "Enter Rule 3"
              }
              defaultValue={targetFixture.rules && targetFixture.rules[2]}
            />
            <input
              type="text"
              class="form-control mb-10"
              aria-describedby="priceHelp"
              onChange={(e) => setRule4(e.target.value)}
              placeholder={
                (targetFixture.rules && targetFixture.rules[3]) ||
                "Enter Rule 4"
              }
              defaultValue={targetFixture.rules && targetFixture.rules[3]}
            />
            <input
              type="text"
              class="form-control mb-10"
              aria-describedby="priceHelp"
              onChange={(e) => setRule5(e.target.value)}
              placeholder={
                (targetFixture.rules && targetFixture.rules[4]) ||
                "Enter Rule 5"
              }
              defaultValue={targetFixture.rules && targetFixture.rules[4]}
            />
            <input
              type="text"
              class="form-control mb-10"
              aria-describedby="priceHelp"
              onChange={(e) => setRule6(e.target.value)}
              placeholder={
                (targetFixture.rules && targetFixture.rules[5]) ||
                "Enter Rule 6"
              }
              defaultValue={targetFixture.rules && targetFixture.rules[5]}
            />
            <input
              type="text"
              class="form-control mb-10"
              aria-describedby="priceHelp"
              onChange={(e) => setRule7(e.target.value)}
              placeholder={
                (targetFixture.rules && targetFixture.rules[6]) ||
                "Enter Rule 7"
              }
              defaultValue={targetFixture.rules && targetFixture.rules[6]}
            />
            <input
              type="text"
              class="form-control mb-10"
              aria-describedby="priceHelp"
              onChange={(e) => setRule8(e.target.value)}
              placeholder={
                (targetFixture.rules && targetFixture.rules[7]) ||
                "Enter Rule 8"
              }
              defaultValue={targetFixture.rules && targetFixture.rules[7]}
            />
            <input
              type="text"
              class="form-control mb-10"
              aria-describedby="priceHelp"
              onChange={(e) => setRule9(e.target.value)}
              placeholder={
                (targetFixture.rules && targetFixture.rules[8]) ||
                "Enter Rule 9"
              }
              defaultValue={targetFixture.rules && targetFixture.rules[8]}
            />
            <input
              type="text"
              class="form-control mb-10"
              aria-describedby="priceHelp"
              onChange={(e) => setRule10(e.target.value)}
              placeholder={
                (targetFixture.rules && targetFixture.rules[9]) ||
                "Enter Rule 10"
              }
              defaultValue={targetFixture.rules && targetFixture.rules[9]}
            />
            <div id="priceHelp" class="form-text">
              Rules of the game
            </div>
            <button
              className="btn btn-primary"
              onClick={() => {
                dispatch(
                  updatefixture(targetFixture._id, {
                    rules: [
                      rule1,
                      rule2,
                      rule3,
                      rule4,
                      rule5,
                      rule6,
                      rule7,
                      rule8,
                      rule9,
                      rule10,
                    ],
                  })
                );
              }}
            >
              Update Rules
            </button>
          </div>
          <br />
          <br />
          <br />
          <div class="mb-3">
            <label for="price" class="form-label">
              Admins
            </label>
            <input
              type="text"
              class="form-control mb-10"
              aria-describedby="priceHelp"
              onChange={(e) => setAdmin1(e.target.value)}
              placeholder={
                (targetFixture.admins && targetFixture.admins[0]) ||
                "Enter Admin 1 email"
              }
              defaultValue={targetFixture.admins && targetFixture.admins[0]}
            />
            <input
              type="text"
              class="form-control mb-10"
              aria-describedby="priceHelp"
              onChange={(e) => setAdmin2(e.target.value)}
              placeholder={
                (targetFixture.admins && targetFixture.admins[1]) ||
                "Enter Admin 2 email"
              }
              defaultValue={targetFixture.admins && targetFixture.admins[1]}
            />
            <input
              type="text"
              class="form-control mb-10"
              aria-describedby="priceHelp"
              onChange={(e) => setAdmin3(e.target.value)}
              placeholder={
                (targetFixture.admins && targetFixture.admins[2]) ||
                "Enter Admin 3 email"
              }
              defaultValue={targetFixture.admins && targetFixture.admins[2]}
            />
            <input
              type="text"
              class="form-control mb-10"
              aria-describedby="priceHelp"
              onChange={(e) => setAdmin4(e.target.value)}
              placeholder={
                (targetFixture.admins && targetFixture.admins[3]) ||
                "Enter Admin 4 email"
              }
              defaultValue={targetFixture.admins && targetFixture.admins[3]}
            />

            <div id="priceHelp" class="form-text">
              Emails of the admins
            </div>
            <button
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                dispatch(
                  updatefixture(targetFixture._id, {
                    admins: [admin1, admin2, admin3, admin4],
                  })
                );
              }}
            >
              Update Admins
            </button>
          </div>

          <br />
          <br />
          <br />
          {/* <div class="mb-3">
            <label for="price" class="form-label">
              Documents and title
            </label>
            <input
              type="text"
              class="form-control mb-10"
              aria-describedby="priceHelp"
              placeholder={targetFixture.document1title || "Document one title"}
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
              placeholder={targetFixture.document2title || "Document two title"}
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
              placeholder={
                targetFixture.document3title || "Document three title"
              }
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
              placeholder={
                targetFixture.document4title || "Document four title"
              }
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
       */}
          {targetFixture.images &&
            targetFixture.images.map((item) => (
              <div className="image-preview">
                <img src={item} width="fit-content" height="100%" alt="" />
                <FontAwesomeIcon
                  icon={faTrash}
                  className="icon"
                  color="#DF4B29"
                  onClick={() => {
                    dispatch(
                      removeImageFromFixture(targetFixture._id, { image: item })
                    );
                  }}
                />
              </div>
            ))}
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Add another image
            </label>
            <input
              type="file"
              class="form-control"
              required
              onChange={(e) => {
                e.preventDefault();
                const newFormData = new FormData();
                newFormData.append("image", e.target.files[0]);
                dispatch(addImageToFixture(targetFixture._id, newFormData));
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
      </div>
    </div>
  );
};

export default AdminTournamentEdit;
