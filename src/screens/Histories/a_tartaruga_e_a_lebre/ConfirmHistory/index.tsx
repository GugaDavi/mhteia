import React from "react";
import { useNavigation } from "@react-navigation/native";

import spiderIconH from "../../../../../assets/app_assets/aranha-h.png";
import paisagemIcon from "../../../../../assets/app_assets/paisagem.png";
import spiderIconM from "../../../../../assets/app_assets/aranha-m.png";

import {
  Container,
  Toys,
  BoxTex,
  BoxHistory,
  BoxSpider,
  Paisagem,
  SpiderH,
  SpiderM,
  Info,
} from "./styles";

const ConfirmHistory: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Toys>
        <SpiderH source={spiderIconH} />
      </Toys>

      <BoxTex onPress={() => navigate("Page01")}>
        <Info>A TARTARURA E A LEBRE</Info>
      </BoxTex>

      <BoxHistory onPress={() => navigate("Page01")}>
        <Paisagem source={paisagemIcon} />
      </BoxHistory>

      <BoxSpider>
        <SpiderM source={spiderIconM} />
      </BoxSpider>
    </Container>
  );
};

export default ConfirmHistory;
