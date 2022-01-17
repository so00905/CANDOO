import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "@mui/material";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Top from "./components/Top";

function App() {
  return (
    <Router>
      <Navbar />
      <Top />
      {/* <Route path="/" /> */}
      <Main />
    </Router>
  );
}

export default App;
