import React, { Component } from "react";
import Box from "@mui/material/Box";
import { BsPersonSquare } from "react-icons/bs";
import { Container } from "@mui/material";

class Top extends Component {
  render() {
    return (
      <div>
        <Container fixed={true} className="top">
          <BsPersonSquare /> 계정
        </Container>
      </div>
    );
  }
}

export default Top;
