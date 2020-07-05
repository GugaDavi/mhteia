import React, { useState } from "react";
import PageComponent from "../../../components/PageComponent";

import grama2 from "../../assets/grama2.png";
import raposa from "../../assets/raposa1.png";
import nuvem from "../../assets/nuvem.png";
import sol from "../../assets/sol.png";
import arvore1 from "../../assets/arvore1.png";
import arvore2 from "../../assets/arvore2.png";

const Page04: React.FC = () => {
  const [words] = useState([
    "1 - Mas",
    "11 - o trajeto",
    "12 - e o ponto",
    "2 - fez uma",
    "13 - de chegada",
    "6 - fosse",
    "10 - definir",
    "9 - Além de,",
    "8 - da competição",
    "5 - a Dona Raposa",
    "7 - a juíza",
    "3 - exigência",
    "4 - para que",
  ]);
  const [selectedWords] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "8 - da competição",
    "",
    "",
    "11 - o trajeto",
    "",
    "",
    "",
  ]);

  return (
    <PageComponent
      nextRoute="Page05"
      imgs={[grama2, nuvem, nuvem, sol, raposa, arvore1, arvore2]}
      wordsCollection={words}
      wordsCollectionComplite={selectedWords}
      wordsCollectionBackgroundColor="#EB9D9D"
      wordsCollectionShadowColor="#f7fc0a"
      wordsCollectionCompileBackgroundColor="#0FEBDE"
      templateColorBackground="#0AF905"
    />
  );
};

export default Page04;
