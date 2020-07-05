import styled from "styled-components/native";
import { Animated } from "react-native";

interface PictureProps {
  index: number;
}

export const Container = styled(Animated.View)``;

export const Picture = styled.Image<PictureProps>`
  margin: 5px;
  width: 80px;
  height: 90px;
`;
