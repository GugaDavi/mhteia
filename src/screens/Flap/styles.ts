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
`;

export const ImageContainer = styled.TouchableOpacity`
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 28px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const Teia = styled(Animated.Image)<TeiaProps>`
  width: ${(props) =>
    props.heightSize ? `${props.heightSize / 2}px` : "500px"};
  height: ${(props) =>
    props.heightSize ? `${props.heightSize / 2}px` : "500px"};
  margin: 20px 0px;
`;

export const Buttons = styled.View`
  display: flex;
  padding: 0px 20px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
  flex-direction: row;
`;

export const FlapButton = styled.TouchableOpacity`
  padding: 15px 20px;
  background-color: #ff0;
  border-radius: 4px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
`;

export const TextFlapButton = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
