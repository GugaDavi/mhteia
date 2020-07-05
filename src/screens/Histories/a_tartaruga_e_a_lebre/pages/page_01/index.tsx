import React, { useState } from "react";
import PageComponent from "../../../components/PageComponent";

import coelho_pulando from "../../assets/coelho_pulando.png";
import grama1 from "../../assets/grama1.png";
import grama2 from "../../assets/grama2.png";
import grama3 from "../../assets/grama3.png";
import nuvem from "../../assets/nuvem.png";
import sol from "../../assets/sol.png";
import arvore1 from "../../assets/arvore1.png";
import arvore2 from "../../assets/arvore2.png";

const Page01: React.FC = () => {
  const [words] = useState([
    "4 - fazendo",
    "5 - bulling",
    "7 - e da lentidão.",
    "3 - vivia",
    "2 - a Lebre",
    "1 - Na floresta",
    "8 - da tartaruga",
    "6 - das pernas curtas",
  ]);
  const [selectedWords] = useState([
    "1 - Na floresta",
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
      nextRoute="Page02"
      imgs={[
        coelho_pulando,
        grama1,
        grama2,
        grama3,
        nuvem,
        nuvem,
        sol,
        arvore1,
        arvore2,
      ]}
      wordsCollection={words}
      wordsCollectionComplite={selectedWords}
      wordsCollectionBackgroundColor="#11ff0c"
      wordsCollectionShadowColor="#f7fc0a"
      wordsCollectionCompileBackgroundColor="#f7fc0a"
    />
  );
};

export default Page01;
