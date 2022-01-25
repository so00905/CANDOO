import styled from "styled-components";

export const Box = styled.div`
  padding: 40px 0;
  background: #fff;
  bottom: 0;
  width: 100%;
  display: block;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 20%;
  /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row_Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Row_service = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  grid-gap: 20px;
  font-size: 12px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #888;
  margin-bottom: 10px;
  font-size: 13px;
  text-decoration: none;

  &:hover {
    color: #111;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.a`
  font-size: 14px;
  color: #111;
  margin-bottom: 20px;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: #1f5387;
    text-decoration: overline;
    transition: 200ms ease-in;
  }
`;
