import React, { useState } from "react";
import PageComponent from "../../../components/PageComponent";

import faixa_largada from "../../assets/faixa_largada.png";
import grama1 from "../../assets/grama1.png";
import grama2 from "../../assets/grama2.png";
import grama3 from "../../assets/grama3.png";
import leao1 from  "../../assets/leao1.png";
import raposa1 from  "../../assets/raposa1.png";
import lebre_largada from  "../../assets/lebre_largada.png";
import papagaio1 from  "../../assets/papagaio1.png";
import tartaruga_largada from  "../../assets/tartaruga_largada.png";

const Page05: React.FC = () => {
  const [words] = useState([
     "6 - foi dada",
     "12 - e vontade",
     "8 - com seu",
     "9 - passo lento",
     "10 - seguiu focada",
     "3 - da competição",
     "7 - a tartaruga",
     "11 - com determinação",
     "13 - de vencer",
     "2 - o dia",
     "4 - Assim que,",
     "5 - a largada",
     "1 - Chegou",

  ]);
  const [selectedWords] = useState([
    "",
    "",
    "",
    "",
    "",
    "6 - foi dada",
    "",
    "",
    "",
    "",
    "",
    "",
    "13 - de vencer",
  ]);

  return (
    <PageComponent
      nextRoute="Page06"
      imgs={[
        faixa_largada,
        grama1,
        grama2,
        grama3,
        leao1,
        raposa1,
        lebre_largada,
        papagaio1,
        tartaruga_largada,

      ]}
      wordsCollection={words}
      wordsCollectionComplite={selectedWords}
      wordsCollectionBackgroundColor="#F7FC0A"
      wordsCollectionShadowColor="#f7fc0a"
      wordsCollectionCompileBackgroundColor="#11FF0C"
      templateColorBackground="#FF6347"
    />
  );
};

export default Page05;
