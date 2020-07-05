import React, { useState } from "react";
import PageComponent from "../../../components/PageComponent";

import grama1 from "../../assets/grama1.png";
import grama2 from "../../assets/grama2.png";
import grama3 from "../../assets/grama3.png";
import fogos from "../../assets/fogos.png";
import sol from "../../assets/sol.png";
import arco_iris from "../../assets/arco_iris.png";
import leao1 from "../../assets/leao1.png";
import tartaruga_vencedora from "../../assets/tartaruga_vencedora.png";
import borboleta from "../../assets/borboleta.png";
import raposa1 from "../../assets/raposa1.png";
import faixa_largada from "../../assets/faixa_largada.png";
import papagaio1 from "../../assets/papagaio1.png";
import macaquinho from "../../assets/macaquinho.png";
import ursinha from "../../assets/ursinha.png";


const Page08: React.FC = () => {
  const [words] = useState([
    "1 - E mesmo",
    "2 - com toda",
    "3 - a sua",
    "4 - velocidade",
    "5 - foi a tartaruga",
    "7 - pisar",
    "8 - na linha",
    "9 - de chegada",
    "10 - e ganhou",

  ]);
  const [selectedWords] = useState([
    "",
    "",
    "",
    "",
    "",
    "6 - que conseguiu",
    "",
    "",
    "",
    "",
    "11 - a corrida.",
  ]);

  return (
    <PageComponent
      nextRoute="Page03"
      imgs={[
        grama1,
        grama2,
        grama3,
        fogos,
        sol,
        arco_iris,
        leao1,
        tartaruga_vencedora,
        borboleta,
        raposa1,
        faixa_largada,
        papagaio1,
        macaquinho,
        ursinha


      ]}
      wordsCollection={words}
      wordsCollectionComplite={selectedWords}
      wordsCollectionBackgroundColor="#0FEBDE"
      wordsCollectionShadowColor="#f7fc0a"
      wordsCollectionCompileBackgroundColor="#FF6347"
    />
  );
};

export default Page08;
