import React, { useState, useCallback } from "react";
import { View } from "react-native";

import HistoryHeader from "../../../../components/HistoryHeader";
import pallet from "../../../../styles/palleteColor";
import spiderH from "../../../../../assets/app_assets/aranha-h.png";
import spiderF from "../../../../../assets/app_assets/aranha-m.png";

import Validator from "../../../../utils/Validator";

import {
  Container,
  PicturesArea,
  ChangeBackgroundArea,
  ButtonColor,
  Spider,
  Colors,
  WordsArea,
  WordList,
  WordArea,
  WorkText,
  WordBox,
} from "./styles";

interface Props {
  wordsCollection: string[];
  wordsCollectionComplite: string[];
  nextRoute: string;
  wordsCollectionBackgroundColor?: string;
  wordsCollectionShadowColor?: string;
  wordsCollectionCompileBackgroundColor?: string;
}

const PageComponent: React.FC<Props> = ({
  wordsCollection,
  wordsCollectionComplite,
  nextRoute,
  wordsCollectionBackgroundColor,
  wordsCollectionCompileBackgroundColor,
}) => {
  const [color, setColor] = useState("#0FEBDE");
  const [words] = useState(wordsCollection);
  const [selectedWords, setSelectedWords] = useState(wordsCollectionComplite);

  const validateSequence = useCallback((value: string) => {
    const mock = selectedWords;
    const index = Validator.validateIndex(value);

    if (index) {
      const indexNumber = Number(index);
      if (mock[indexNumber - 2] !== "") {
        mock[indexNumber - 1] = value;
        setSelectedWords([...mock]);
      }
    }
  }, []);

  return (
    <Container>
      <HistoryHeader nextRoute={nextRoute} />
      <PicturesArea backgroundColor={color} />
      <Colors>
        <ChangeBackgroundArea>
          {pallet.map((item) => (
            <ButtonColor
              key={item}
              color={item}
              onPress={() => setColor(item)}
            />
          ))}
        </ChangeBackgroundArea>
      </Colors>
      <View style={{ alignItems: "flex-end", marginTop: 5 }}>
        <Spider source={spiderH} />
      </View>
      <WordsArea
        wordsCollectionBackgroundColor={wordsCollectionBackgroundColor}
      >
        <WordList
          contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}
          data={words}
          keyExtractor={(item) => item}
          numColumns={2}
          renderItem={({ item }) => (
            <WordArea onPress={() => validateSequence(item)}>
              <WorkText>{item}</WorkText>
            </WordArea>
          )}
        />
      </WordsArea>
      <View style={{ alignItems: "flex-start" }}>
        <Spider source={spiderF} />
      </View>
      <View style={{ marginBottom: 16 }}>
        <WordList
          contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}
          data={selectedWords}
          keyExtractor={(item, index) => `${index}`}
          numColumns={2}
          renderItem={({ item }) => (
            <WordBox
              wordsCollectionCompileBackgroundColor={
                wordsCollectionCompileBackgroundColor
              }
            >
              <WorkText>{item}</WorkText>
            </WordBox>
          )}
        />
      </View>
    </Container>
  );
};

export default PageComponent;
