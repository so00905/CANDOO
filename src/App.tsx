import React from "react";
import "./assets/App.css";
import Main from "./components/main/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Top from "./components/Top";
import BulkUp from "./components/bulkUp/BulkUp";
import Plan from "./components/plan/Plan";
import Shop from "./components/shop/Shop";
import Footer from "./components/Footer";
import { Container } from "@mui/material";

function App() {
  return (
    <div
      className="candoo-container"
      // style={{
      //   display: "flex",
      //   flexDirection: "column",
      //   minHeight: "100vh",
      //   background: "#455b6a",
      // }}
    >
      <Router>
        <Top />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/bulkup" element={<BulkUp />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
