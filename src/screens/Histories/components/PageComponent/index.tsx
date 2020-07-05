import React, { useState, useCallback, useRef } from "react";
import { View, ImageSourcePropType, FlatList } from "react-native";

import HistoryHeader from "../../../../components/HistoryHeader";
import pallet from "../../../../styles/palleteColor";
import spiderH from "../../../../../assets/app_assets/aranha-h.png";
import spiderF from "../../../../../assets/app_assets/aranha-m.png";

import Validator from "../../../../utils/Validator";

import {
  Container,
  PicturesArea,
  PicturesBox,
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

import PictureComponent from "../Picture";

interface Props {
  wordsCollection: string[];
  wordsCollectionComplite: string[];
  nextRoute: string;
  imgs?: ImageSourcePropType[];
  wordsCollectionBackgroundColor?: string;
  wordsCollectionShadowColor?: string;
  wordsCollectionCompileBackgroundColor?: string;
  templateColorBackground?: string;
}

const PageComponent: React.FC<Props> = ({
  wordsCollection,
  wordsCollectionComplite,
  imgs,
  nextRoute,
  wordsCollectionBackgroundColor,
  wordsCollectionCompileBackgroundColor,
  templateColorBackground,
}) => {
  const [color, setColor] = useState(templateColorBackground ?? "#0FEBDE");
  const [words] = useState(wordsCollection);
  const [selectedWords, setSelectedWords] = useState(wordsCollectionComplite);
  const scrollRef = useRef(null);

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
    <Container ref={scrollRef} scrollEnabled={true}>
      <HistoryHeader nextRoute={nextRoute} />
      <PicturesArea backgroundColor={color}>
        {imgs &&
          imgs.map((item, index) => (
            <PictureComponent src={item} index={index} />
          ))}
      </PicturesArea>
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
      <View
        style={{
          alignItems: "flex-end",
          // marginTop: 5,
          padding: 5,
          backgroundColor: "#eee",
        }}
      >
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
