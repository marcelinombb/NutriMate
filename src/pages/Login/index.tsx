import React from "react";
import {
  Background,
  ButtonContainer,
  IconContainer,
  LogoIcon,
  TypeIcon,
  CallIcon,
} from "./styles";
import DefaultButton from "../../components/common/DefaultButton";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../routes";

const background = require("../../../assets/images/login-bg-1.png");
const logo = require("../../../assets/icons/nutrimate-logo-p.png");
const type = require("../../../assets/icons/nutrimate-type.png");
const callToAction = require("../../../assets/icons/motto-text.png");
const Login = () => {
  const navigation = useNavigation<PropsStack>();
  return (
    <Background source={background}>
      <IconContainer>
        <LogoIcon source={logo} />
      </IconContainer>
      <ButtonContainer>
        <TypeIcon source={type} />
        <CallIcon source={callToAction} />
        <DefaultButton
          backgroundColor={"#777777"}
          text={"Create Account"}
          marginVertical={15}
          buttonHandle={() => {
            navigation.navigate("Home");
          }}
        />
        <DefaultButton
          backgroundColor={"#7265E3"}
          text={"Sign In"}
          marginVertical={8}
          buttonHandle={() => {
            navigation.navigate("Home");
          }}
        />
      </ButtonContainer>
    </Background>
  );
};

export default Login;
