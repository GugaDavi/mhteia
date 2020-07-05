import styled from "styled-components/native";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: #0febde;
  align-items: center;
  justify-content: center;
`;

export const BoxImg = styled.View`
  position: absolute;
  width: 147px;
  height: 90px;
  left: 7px;
  top: 89px;
`;

export const ContainerLogo = styled.View`
  position: absolute;
  justify-content: center;
  top: 150px;
`;

export const BoxSpider = styled.View`
  position: absolute;
  width: 208px;
  height: 116px;
  left: 200px;
  top: 63px;
`;

export const Form = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin-top: 200px;
`;

export const Input = styled.TextInput`
  background-color: #fff;
  width: 90%;
  margin-bottom: 18;
  color: #222;
  font-size: 17;
  border-radius: 7;
  padding-left: 10;
  padding-top: 10;
  padding-bottom: 10;
`;

interface BtnSubProps {
  disable?: boolean;
}

export const BtnSub = styled.TouchableOpacity<BtnSubProps>`
  background-color: ${(props) => (props.disable ? "#fbeaea" : "#eb9d9d")};
  width: 90%;
  height: 45;
  align-items: center;
  justify-content: center;
  border-radius: 7;
`;

export const BtnTex = styled.Text`
  color: #fff;
  font-size: 18;
`;
