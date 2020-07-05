import React, { useState } from "react";
import PageComponent from "../../../components/PageComponent";

import coelho_pulando from "../../assets/coelho_pulando.png";
import tartaruga from "../../assets/tartaruga.png";
import grama2 from "../../assets/grama2.png";
import grama3 from "../../assets/grama3.png";
import nuvem from "../../assets/nuvem.png";
import sol from "../../assets/sol.png";
import arvore1 from "../../assets/arvore1.png";

const Page03: React.FC = () => {
  const [words] = useState([
    "2 - muito",
    "3 - confiante",
    "4 - de sua",
    "5 - vitória",
    "6 - aceitou",
    "7 - a resposta",
    "8 - da Dona Tartaruga",

  ]);
  const [selectedWords] = useState([
    "1 - A Lebre",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  return (
    <PageComponent
      nextRoute="Page04"
      imgs={[
        nuvem,
        sol,
        grama3,
        grama3,
        coelho_pulando,
        tartaruga,
        arvore1,
        arvore1,
        grama2
      ]}
      wordsCollection={words}
      wordsCollectionComplite={selectedWords}
      wordsCollectionBackgroundColor="#0FEBDE"
      wordsCollectionShadowColor="#f7fc0a"
      wordsCollectionCompileBackgroundColor="#EB9D9D"
    />
  );
};

export default Page03;
