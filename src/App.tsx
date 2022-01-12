import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "@mui/material";
import Main from "./components/Main";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Route path="/" /> */}
      <Main />
    </Router>
  );
}

export default App;
