import styled from "styled-components/native";
import { FlatList, FlatListProperties } from "react-native";

interface PicturesAreaProps {
  backgroundColor?: string;
}

interface ButtonColorProps {
  color: string;
}

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #eee;
  padding-bottom: 15px;
`;

export const PicturesArea = styled.View<PicturesAreaProps>`
  width: 100%;
  height: 300px;
  background-color: ${(props) => props.backgroundColor ?? "#0FEBDE"};
`;

export const Colors = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ChangeBackgroundArea = styled.View`
  padding: 5px;
  background-color: #c4c4c4;
  justify-content: space-between;
  width: 100%;
  flex-direction: row;
`;

export const ButtonColor = styled.TouchableOpacity<ButtonColorProps>`
  width: 38px;
  height: 38px;
  margin-right: 5px;
  border-radius: 38px;
  background-color: ${(props) => props.color};
`;

export const Spider = styled.Image`
  width: 100px;
  height: 50px;
`;

interface WordsAreaProps {
  wordsCollectionBackgroundColor?: string;
  wordsCollectionShadowColor?: string;
}

export const WordsArea = styled.View<WordsAreaProps>`
  background-color: ${(props) =>
    props.wordsCollectionBackgroundColor ?? "#11ff0c"};
  box-shadow: 2px 4px 4px
    ${(props) => props.wordsCollectionShadowColor ?? "#f7fc0a"};
  border-radius: 20px;
  padding: 16px;
  margin: 10px;
`;

class FlatListType extends FlatList<string> {}

export const WordList = styled(FlatListType)``;

interface WordAreaProps {
  wordsCollectionBackgroundColor: string;
}

export const WordArea = styled.TouchableOpacity`
  background-color: #eee;
  padding: 3px;
  margin: 5px;
  border-radius: 4px;
`;

export const WorkText = styled.Text`
  font-size: 16px;
  line-height: 21px;
`;

interface WordBoxProps {
  wordsCollectionCompileBackgroundColor?: string;
}

export const WordBox = styled.View<WordBoxProps>`
  width: 49%;
  height: 28px;
  background-color: ${(props) =>
    props.wordsCollectionCompileBackgroundColor ?? "#f7fc0a"};
  border-radius: 4px;
  margin: 5px;
  padding: 5px 10px;
`;
