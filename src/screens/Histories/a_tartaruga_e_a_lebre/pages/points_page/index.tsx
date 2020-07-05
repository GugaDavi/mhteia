import React from "react";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

import spiderH from "../../../../../../assets/app_assets/aranha-h2.png";
import spiderM from "../../../../../../assets/app_assets/aranha-m2.png";
import animation from "../../../../../../assets/app_assets/animation.json";

import { useAuth } from "../../../../../store/user";

import {
  Container,
  SpidersBox,
  Spider,
  Box,
  MsgText,
  Btn,
  BtnText,
} from "./styles";

const PointPage: React.FC = () => {
  const { user } = useAuth();
  const { navigate } = useNavigation();

  return (
    <Container>
      <SpidersBox>
        <Spider source={spiderH} />
        <Spider source={spiderM} />
      </SpidersBox>

      <LottieView
        ref={(animation) => animation?.play()}
        style={{
          width: 300,
          height: 300,
        }}
        source={animation}
      />
      <Box />
      <MsgText>Parabéns, {user.name}!</MsgText>
      <Box />
      <MsgText>Você ganhou 100 pontos.</MsgText>
      <Box />
      <Box />
      <Btn onPress={() => navigate("FlapScreen")}>
        <BtnText>IR PARA PROXIMA HISTÓRIA</BtnText>
      </Btn>
    </Container>
  );
};

export default PointPage;
