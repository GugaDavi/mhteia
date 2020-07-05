import React, { useState } from "react";
import PageComponent from "../../../components/PageComponent";

import lebre_dormindo from "../../assets/lebre_dormindo.png";
import tartaruga_passando from "../../assets/tartaruga_passando.png";
import grama1 from "../../assets/grama1.png";
import grama2 from "../../assets/grama2.png";
import grama3 from "../../assets/grama3.png";
import nuvem from "../../assets/nuvem.png";
import arvore1 from "../../assets/arvore1.png";
import arvore2 from "../../assets/arvore2.png";

const Page06: React.FC = () => {
  const [words] = useState([
    "1 - A Lebre",
    "2 - saiu",
    "3 - em disparada",
    "4 - e quando",
    "6 - a tartaruga",
    "7 - estava",
    "8 - muito",
    "9 - longe",
    "10 - resolveu",
    "11 - tirar",
    "12 - um cochilo",

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
    "",
    "",
    "",
    "",
  ]);

  return (
    <PageComponent
      nextRoute="Page07"
      imgs={[
        lebre_dormindo,
        grama1,
        grama2,
        grama3,
        nuvem,
        nuvem,
        tartaruga_passando,
        arvore1,
        arvore2,
      ]}
      wordsCollection={words}
      wordsCollectionComplite={selectedWords}
      wordsCollectionBackgroundColor="#FF6347"
      wordsCollectionShadowColor="#f7fc0a"
      wordsCollectionCompileBackgroundColor="#DA70D6"
    />
  );
};

export default Page06;
