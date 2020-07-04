import React, { useEffect, useState, useCallback } from "react";
import { Dimensions, Animated, PanResponder } from "react-native";
import { useIsFocused } from "@react-navigation/native";

import teia from "../../../assets/app_assets/teia.png";

import { Container, Title, Teia } from "./styles";

// import { Container } from './styles';

const Flap: React.FC = () => {
  const windowHeight = Dimensions.get("window").height;

  const [initialPosition] = useState(new Animated.Value(1));
  const [initialRotate] = useState(new Animated.Value(0));

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (e, g) => {
      // if (g.dy * -1 > 0) {
      //   Animated.spring(initialRotate, {
      //     toValue: -1,
      //     bounciness: 2,
      //     useNativeDriver: true,
      //   }).start();
      // } else {
      //   Animated.spring(initialRotate, {
      //     toValue: 1,
      //     bounciness: 2,
      //     useNativeDriver: true,
      //   }).start();
      // }
      return true;
    },
    onPanResponderMove: Animated.event([null, {}]),
  });

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

  const routate = Animated.sequence([]).start;

  useEffect(() => {
    screenFocused();
  }, [useIsFocused()]);

  console.log(initialRotate);

  return (
    <Container>
      <Title>Home</Title>
      <Teia
        {...panResponder.panHandlers}
        source={teia}
        heightSize={windowHeight}
        style={[
          {
            transform: [
              { scale: initialPosition },
              { rotate: `${initialRotate}deg` },
            ],
          },
        ]}
      />
    </Container>
  );
};

export default Flap;
