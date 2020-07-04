import styled from "styled-components/native";
import { ImageProperties, Animated } from "react-native";

interface TeiaProps extends ImageProperties {
  heightSize?: number;
}

export const Container = styled.View`
  flex: 1;
  background-color: #eb9d9d;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Title = styled.Text`
  font-size: 21px;
  font-weight: bold;
`;

export const Teia = styled(Animated.Image)<TeiaProps>`
  position: absolute;
  bottom: 0px;
  width: ${(props) => (props.heightSize ? props.heightSize / 1.5 : "500px")};
  height: ${(props) => (props.heightSize ? props.heightSize / 1.5 : "500px")};
`;
