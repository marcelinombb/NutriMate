import React from "react";
import { Container, DiaryIcon, Icon, IconButton } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../routes";

const homeIcon = require("../../../../assets/icons/home-icon-p.png");
const diaryIcon = require("../../../../assets/icons/diary-icon-p.png");
const recipesIcon = require("../../../../assets/icons/recipes-icon-p.png");
const profileIcon = require("../../../../assets/icons/profile-icon-p.png");

const NavBar = () => {
  const navigation = useNavigation<PropsStack>();

  return (
    <Container>
      <IconButton
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Icon source={homeIcon} />
      </IconButton>

      <IconButton
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <DiaryIcon source={diaryIcon} />
      </IconButton>

      <IconButton>
        <Icon source={recipesIcon} />
      </IconButton>

      <IconButton>
        <Icon source={profileIcon} />
      </IconButton>
    </Container>
  );
};

export default NavBar;
