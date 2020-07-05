import React, { useState } from "react";
import PageComponent from "../../../components/PageComponent";


import coelho_pulando from "../../assets/coelho_pulando.png";
import grama3 from "../../assets/grama3.png";
import tartaruga from "../../assets/tartaruga.png";
import nuvem from "../../assets/nuvem.png";
import arvore2 from "../../assets/arvore2.png";
import sol from "../../assets/sol.png";
import grama2 from "../../assets/grama2.png";
import grama1 from "../../assets/grama1.png";





const Page02: React.FC = () => {
  const [words] = useState([
     "8 - acredita",
     "16 - corrida?",
     "10 - rápido",
     "2 - sorridente",
     "6 - já que",
     "11 - como",
     "13 - vamos",
     "4- Senhor",
     "1 - A tartaruga",
     "7 - você",
     "14 - apostar",
     "5 - Lebre",
     "12 - o vento",
     "3 - disse:",
     "15 - uma",
  ]);
  const [selectedWords] = useState([
    "",
    "",
    "",
    "4 - Senhor",
    "",
    "",
    "",
    "",
    "9 - ser",
    "",
    "",
    "",
    "",
    "",
    "",
    "16 - corrida?",
  ]);

  return (
    <PageComponent
      nextRoute="Page03"
      imgs={[
        coelho_pulando,
        grama3,
        tartaruga,
        nuvem,
        nuvem,
        arvore2,
        sol,
        grama1,
        grama1,
        grama2

      ]}
      wordsCollection={words}
      wordsCollectionComplite={selectedWords}
      wordsCollectionBackgroundColor="#F7FC0A"
      wordsCollectionShadowColor="#f7fc0a"
      wordsCollectionCompileBackgroundColor="#0AF905"
      templateColorBackground="#EB9D9D"
    />
  );
};

export default Page02;
