import React from "react";

import play from "../../../assets/app_assets/play.png";
import gravar from "../../../assets/app_assets/gravar.png";
import limpar from "../../../assets/app_assets/limpar.png";
import ouvir from "../../../assets/app_assets/ouvir.png";
import repetir from "../../../assets/app_assets/repetir.png";

import { Container } from "./styles";

import GoBack from "../GoBack";
import ToGo from "../ToGo";
import ImgBox from "./components/ImgBox";

const HistoryHeader: React.FC = () => {
  return (
    <Container>
      <GoBack />
      <ImgBox source={play} />
      <ImgBox source={repetir} />
      <ImgBox source={gravar} />
      <ImgBox source={limpar} />
      <ImgBox source={ouvir} />
      <ToGo nextRoute="" />
    </Container>
  );
};

export default HistoryHeader;
