import React, { useEffect, useState, useCallback } from "react";
import { Dimensions, Animated } from "react-native";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import SpiderH from "../../../assets/app_assets/aranha-h2.png";
import SpiderF from "../../../assets/app_assets/aranha-m2.png";

import teia from "../../../assets/app_assets/teia.png";

import {
  Container,
  Header,
  Title,
  Subtitle,
  Teia,
  ImageContainer,
  Buttons,
  FlapButton,
  TextFlapButton,
  SpiderBox,
  FlapText,
  FlepSelectedText,
  FlapTextBox,
} from "./styles";

interface FlapOptions {
  index: number;
  label: string;
  color: string;
}

let rotateValue = 0;
let flapIndex = 0;

const Flap: React.FC = () => {
  const [initialPosition] = useState(new Animated.Value(1));
  const [rotate] = useState(new Animated.Value(rotateValue));
  const [flapOptions] = useState<FlapOptions[]>([
    { index: 0, label: "Retalho Vermelho", color: "#FC0A0A" },
    { index: 5, label: "Retalho Verde", color: "#0AF905" },
    { index: 4, label: "Retalho Rosa", color: "#eb9d9d" },
    { index: 3, label: "Retalho Azul", color: "#0FEBDE" },
    { index: 2, label: "Retalho Roxo", color: "#DA70D6" },
    { index: 1, label: "Retalho Amarelo", color: "#F7FC0A" },
  ]);

  const [flapSelected, setFlapSelected] = useState<FlapOptions>(
    flapOptions[flapIndex]
  );

  const windowHeight = Dimensions.get("window").height;
  const { navigate } = useNavigation();

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
    flapIndex += 1;
    if (flapIndex > 5) {
      flapIndex = 0;
    }
    setFlapSelected(flapOptions[flapIndex]);
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
      <Header>
        <SpiderBox source={SpiderF} />
        <Title>ESCOLHA UM{"\n"}DOS RETALHOS</Title>
      </Header>

      <FlepSelectedText colorSelected={flapSelected.color}>
        {flapSelected.label}
      </FlepSelectedText>

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
        <FlapTextBox>
          <FlapText>
            Teia de{"\n"}Retalhos{"\n"}Textuais
          </FlapText>
        </FlapTextBox>
      </ImageContainer>
      <Subtitle>Toque na teia para confirmar</Subtitle>
      <Buttons>
        <SpiderBox source={SpiderH} />
        <FlapButton
          onPress={() => {
            rotateImg();
          }}
        >
          <TextFlapButton>Girar</TextFlapButton>
        </FlapButton>
      </Buttons>
    </Container>
  );
};

export default Flap;
