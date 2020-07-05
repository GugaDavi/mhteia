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

export const FlapTextBox = styled.View`
  background-color: #000;
  padding: 10px;
  bottom: 125px;
  position: absolute;
  border-radius: 50px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

interface FlepSelectedTextProps {
  colorSelected: string;
}

export const FlepSelectedText = styled.Text<FlepSelectedTextProps>`
  color: ${(props) => props.colorSelected};
  font-size: 18px;
  font-weight: bold;
  background-color: #ccc;
  padding: 3px 7px;
`;

export const FlapText = styled.Text`
  color: #fff;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
`;

export const Title = styled.Text`
  font-size: 28px;
  margin-left: 10px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const Subtitle = styled.Text``;

export const SpiderBox = styled.Image`
  width: 140px;
  height: 100px;
`;

export const Teia = styled(Animated.Image)<TeiaProps>`
  width: ${(props) =>
    props.heightSize ? `${props.heightSize / 2}px` : "500px"};
  height: ${(props) =>
    props.heightSize ? `${props.heightSize / 2}px` : "500px"};
`;

export const Buttons = styled.View`
  display: flex;
  margin-top: 10px;
  padding: 0px 20px;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
  flex-direction: row;
`;

export const FlapButton = styled.TouchableOpacity`
  padding: 15px 20px;
  background-color: #fc0a0a;
  border-width: 1px;
  border-color: #0febde;
  box-shadow: 2px 8px 2px #ff6347;
  border-radius: 20px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
`;

export const TextFlapButton = styled.Text`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #fff;
`;
