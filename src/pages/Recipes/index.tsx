import React from "react";
import NavBar from "../../components/common/NavBar";
import { Container } from "./styles";
import DefaultTitle from "../../components/common/DefaultTitle";

const Recipes = () => {
  return (
    <Container>
      <DefaultTitle fontSize={20} title="Recipes" />
      <NavBar />
    </Container>
  );
};

export default Recipes;
