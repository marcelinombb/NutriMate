import React from "react";
import { ButtonContainer, Title } from "./styles";

interface ButtonProps {
  backgroundColor: string;
  text: string;
  marginVertical: number;
  buttonHandle: Function;
}

const DefaultButton = ({
  backgroundColor,
  text,
  marginVertical,
  buttonHandle,
}: ButtonProps) => {
  return (
    <ButtonContainer
      backgroundColor={backgroundColor}
      marginVertical={marginVertical}
      onPress={() => buttonHandle()}
    >
      <Title>{text}</Title>
    </ButtonContainer>
  );
};

export default DefaultButton;
