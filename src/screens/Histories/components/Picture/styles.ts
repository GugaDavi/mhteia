import styled from "styled-components/native";
import { Animated } from "react-native";

interface PictureProps {
  index: number;
}

export const Container = styled(Animated.View)``;

export const Picture = styled.Image<PictureProps>`
  position: absolute;
  top: ${(props) => props.index * 15}px;
  left: ${(props) => props.index * 5}px;
  margin: 5px;
  width: 100px;
  height: 120px;
`;
