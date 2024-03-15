import styled from "styled-components/native";

type propsButton = {
  backgroundColor: string;
  marginVertical: number;
};

export const ButtonContainer = styled.TouchableOpacity<propsButton>`
  background-color: ${(props) => props.backgroundColor};
  width: 75%;
  min-height: 50px;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.marginVertical}px auto;
  border-radius: 25px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.background};
`;
