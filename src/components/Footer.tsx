import React from "react";
import {
  Box,
  Container,
  Row_content,
  Row_service,
  Column,
  FooterLink,
  Heading,
} from "../assets/footerStyles";

const Footer = () => {
  return (
    <Box style={{ borderTop: "1px solid #ededed" }}>
      <Container>
        <Row_content>
          <Column>
            <Heading href="/">CANDOO</Heading>
            <FooterLink href="/shop">위캔두</FooterLink>
            <FooterLink href="#">푸터</FooterLink>
            <FooterLink href="#">입니다</FooterLink>
          </Column>
          <Column>
            <Heading>1rem측정</Heading>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Uttar Pradesh</FooterLink>
            <FooterLink href="#">Ahemdabad</FooterLink>
            <FooterLink href="#">Indore</FooterLink>
            <FooterLink href="#">Mumbai</FooterLink>
          </Column>
          <Column>
            <Heading>캔두소셜미디어</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </i>
            </FooterLink>
          </Column>
          <Column>
            <Heading>고객센터</Heading>
            <FooterLink href="#">Uttar Pradesh</FooterLink>
            <FooterLink href="#">Ahemdabad</FooterLink>
          </Column>
        </Row_content>
      </Container>
      <Container>
        <Row_service>
          <Column>이용약관</Column>
          <Column>위치기반서비스이용약관</Column>
          <Column>개인정보처리방침</Column>
          <Column>운영정책</Column>
          <Column>청소년보호정책</Column>
        </Row_service>
      </Container>
      <Container style={{ marginTop: "1%" }}>
        <p style={{ fontSize: "12px" }}>© CANDOO Corp. All rights reserved.</p>
      </Container>
    </Box>
  );
};
export default Footer;
