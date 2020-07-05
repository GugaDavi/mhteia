import React, { useState } from "react";
import PageComponent from "../../../components/PageComponent";

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
      nextRoute=""
      wordsCollection={words}
      wordsCollectionComplite={selectedWords}
      wordsCollectionBackgroundColor="#11ff0c"
      wordsCollectionShadowColor="#f7fc0a"
      wordsCollectionCompileBackgroundColor="#f7fc0a"
    />
  );
};

export default Page01;
