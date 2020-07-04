import React from "react";

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
  return (
    <Container>
      <Toys>
        <SpiderH source={spiderIconH} />
      </Toys>

      <BoxTex>
        <Info>A TARTARURA E A LEBRE</Info>
      </BoxTex>

      <BoxHistory>
        <Paisagem source={paisagemIcon} />
      </BoxHistory>

      <BoxSpider>
        <SpiderM source={spiderIconM} />
      </BoxSpider>
    </Container>
  );
};

export default ConfirmHistory;
