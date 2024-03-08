import React from "react";
import NavBar from "../../components/common/NavBar";
import { Container } from "./styles";
import DefaultTitle from "../../components/common/DefaultTitle";

const Home = () => {
  return (
    <Container>
      <DefaultTitle fontSize={20} title="Home" />
      <NavBar />
    </Container>
  );
};

export default Home;
