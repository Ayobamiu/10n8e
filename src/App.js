import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/includes/NavBar/NavBar";
import { Route, Router } from "react-router-dom";
import HomePage from "./components/screens/HomePage/HomePage";
import "font-awesome/css/font-awesome.css";

function App() {
  return (
    <div>
      <NavBar />
    </div>
  );
}

export default App;
