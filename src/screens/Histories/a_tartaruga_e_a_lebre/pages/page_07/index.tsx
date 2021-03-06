import React, { useState } from "react";
import PageComponent from "../../../components/PageComponent";

import lebre_largada2 from "../../assets/lebre_largada2.png";
import grama1 from "../../assets/grama1.png";
import grama2 from "../../assets/grama2.png";
import grama3 from "../../assets/grama3.png";
import nuvem from "../../assets/nuvem.png";
import sol from "../../assets/sol.png";
import arvore2 from "../../assets/arvore2.png";

const Page07: React.FC = () => {
  const [words] = useState([
     "3 - A Lebre",
     "1 - Quando",
     "8 - tempo",
     "7 - noção do",
     "5 - que tinha",
     "4 - percebeu",
     "2 - acordou",
     "6 - perdido",
  ]);
  const [selectedWords] = useState([
    "",
    "",
    "3 - A Lebre",
    "",
    "",
    "",
    "",
    "",
  ]);

  return (
    <PageComponent
      nextRoute="Page08"
      imgs={[
        lebre_largada2,
        grama1,
        grama1,
        grama2,
        grama3,
        nuvem,
        nuvem,
        sol,
        arvore2,
        arvore2,
      ]}
      wordsCollection={words}
      wordsCollectionComplite={selectedWords}
      wordsCollectionBackgroundColor="#11FF0C"
      wordsCollectionShadowColor="#f7fc0a"
      wordsCollectionCompileBackgroundColor="#EB9D9D"
      templateColorBackground="#0FEBDE"
    />
  );
};

export default Page07;
