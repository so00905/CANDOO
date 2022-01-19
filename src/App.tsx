import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "@mui/material";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Top from "./components/Top";
import BulkUp from "./components/bulkUp/BulkUp";
import Plan from "./components/plan/Plan";
import Shop from "./components/shop/Shop";

function App() {
  return (
    <Router>
      <Navbar />
      <Top />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/bulkup" element={<BulkUp />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  );
}

export default App;
