import React from "react";
import "./App.css";
import Main from "./components/main/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Top from "./components/Top";
import BulkUp from "./components/bulkUp/BulkUp";
import Plan from "./components/plan/Plan";
import Shop from "./components/shop/Shop";
import Footer from "./components/Footer";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
