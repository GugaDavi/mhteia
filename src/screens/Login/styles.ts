import styled from "styled-components/native";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: #0FEBDE;
  align-items: center;
  justify-content: center;
`;

export const ContainerLogo = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Form = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 90%;
`;

export const Input = styled.TextInput`
  background-color: #FFF;
  width: 90%;
  margin-bottom: 18;
  color: #222;
  font-size: 17;
  border-radius: 7;
  padding-left: 10;
  padding-top: 10;
  padding-bottom: 10;
`;

interface BtnSubProps{
  disable ?: boolean,
}

export const BtnSub = styled.TouchableOpacity<BtnSubProps>`
  background-color: ${props => props.disable ? '#cceaff': '#35AAFF'};
  width: 90%;
  height: 45;
  align-items: center;
  justify-content: center;
  border-radius: 7;
`;

export const BtnTex = styled.Text`
  color: #FFF;
  font-size: 18;
`


