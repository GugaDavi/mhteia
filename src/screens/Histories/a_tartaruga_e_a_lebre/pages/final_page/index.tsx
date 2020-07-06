import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import spiderH from "../../../../../../assets/app_assets/aranha-h2.png";
import spiderM from "../../../../../../assets/app_assets/aranha-m2.png";

import { useAuth } from "../../../../../store/user";

import {
  Container,
  SpidersBox,
  Spider,
  Box,
  MsgBox,
  MsgText,
  MsgTextHighlight,
  Btn,
  BtnText,
} from "./styles";

const FinalPage: React.FC = () => {
  const { user } = useAuth();
  const { navigate } = useNavigation();

  return (
    <Container>
      <SpidersBox>
        <Spider source={spiderH} />
        <Spider source={spiderM} />
      </SpidersBox>
      <MsgBox>
        <View>
          <MsgText>
            Então, <MsgTextHighlight>{user.name}</MsgTextHighlight> você gostou?
          </MsgText>
          <Box />
          <MsgText>Que final Maravilhoso!</MsgText>
          <Box />
          <MsgText>
            Essa fábula nos mostrou que podemos chegar onde quisermos, bastar
            ter persistência e coragem.
          </MsgText>
          <Box />
          <MsgText>O segredo é nunca desistir!</MsgText>
          <Box />
          <MsgText>Moral da História:</MsgText>
          <Box />
          <MsgText>
            O êxito sempre espera aquele que realiza seu trabalho com zelo e
            persistência.
          </MsgText>
          <Box />
          <MsgText>
            Será que foi surpresa para você a tartaruga ter ganho a corrida?
          </MsgText>
        </View>
        <Box />
        <Btn onPress={() => navigate("PointPage")}>
          <BtnText>FIM</BtnText>
        </Btn>
        <Box />
      </MsgBox>
    </Container>
  );
};

export default FinalPage;
