import orgtFront from "../assets/orgtFront.jpg";
import React from "react";
import { Image, Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <h1 align="center">Welcome to ORGT!</h1>
      <h1> maybe put social media</h1>
      <h1>maybe put orgt updates</h1>
      <Image align="center" src={orgtFront} />
    </Container>
  );
};

export default Home;
