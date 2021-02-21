import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/includes/NavBar/NavBar";
import { Route, Router } from "react-router-dom";
import HomePage from "./components/screens/HomePage/HomePage";
function App() {
  return (
    <div>
      <NavBar />
    </div>
  );
}

export default App;
