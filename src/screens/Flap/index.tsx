import React, { useEffect, useState, useCallback } from "react";
import { Dimensions, Animated } from "react-native";
import { useIsFocused, useNavigation } from "@react-navigation/native";

import teia from "../../../assets/app_assets/teia.png";

import {
  Container,
  Title,
  Teia,
  ImageContainer,
  Buttons,
  FlapButton,
  TextFlapButton,
} from "./styles";

let rotateValue = 0;

const Flap: React.FC = () => {
  const windowHeight = Dimensions.get("window").height;
  const { navigate } = useNavigation();

  const [initialPosition] = useState(new Animated.Value(1));
  const [rotate] = useState(new Animated.Value(rotateValue));

  const screenFocused = Animated.sequence([
    Animated.timing(initialPosition, {
      toValue: 0.8,
      duration: 0,
      useNativeDriver: true,
    }),
    Animated.spring(initialPosition, {
      toValue: 1,
      bounciness: 30,
      useNativeDriver: true,
    }),
  ]).start;

  const rotateImg = () => {
    Animated.spring(rotate, {
      toValue: rotateValue + 60,
      bounciness: 10,
      useNativeDriver: true,
    }).start();
    rotateValue += 60;
  };

  const navigateTo = useCallback(() => {
    if (rotateValue === 0 || rotateValue % 360 === 0) {
      navigate("SelectHistory");
    }
  }, []);

  useEffect(() => {
    screenFocused();
  }, [useIsFocused()]);

  return (
    <Container>
      <Title>SELECIONE O{"\n"}GENERO TEXTUAL</Title>
      <ImageContainer onPress={navigateTo}>
        <Teia
          source={teia}
          heightSize={windowHeight}
          style={[
            {
              transform: [
                { scale: initialPosition },
                {
                  rotate: rotate.interpolate({
                    inputRange: [0, 60, 120, 180, 240, 300, 360],
                    outputRange: [
                      "0deg",
                      "60deg",
                      "120deg",
                      "180deg",
                      "240deg",
                      "300deg",
                      "360deg",
                    ],
                  }),
                },
              ],
            },
          ]}
        />
      </ImageContainer>
      <Buttons>
        <FlapButton
          onPress={() => {
            rotateImg();
          }}
        >
          <TextFlapButton>Proximo</TextFlapButton>
        </FlapButton>
      </Buttons>
    </Container>
  );
};

export default Flap;
