import React, { useState } from "react";
import PageComponent from "../../../components/PageComponent";

const Page02: React.FC = () => {
  const [words] = useState([]);
  const [selectedWords] = useState([]);

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

export default Page02;
