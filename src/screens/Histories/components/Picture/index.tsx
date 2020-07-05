import React, { useState } from "react";
import {
  ImageSourcePropType,
  Animated,
  PanResponder,
  Platform,
} from "react-native";

import { Container, Picture } from "./styles";

interface Props {
  src: ImageSourcePropType;
  index?: number;
  stopScroll(): void;
}

const PictureComponent: React.FC<Props> = ({ src, index = 0, stopScroll }) => {
  const [position] = useState(new Animated.ValueXY({ x: 0, y: 0 }));

  const panResponder = PanResponder.create({
    onPanResponderTerminationRequest: () => false,
    onMoveShouldSetPanResponder: (e, g) => {
      if (g.moveY > 500) {
        return false;
      }
      return true;
    },

    onPanResponderMove: Animated.event([
      null,
      {
        dx: position.x,
        dy: position.y,
      },
    ]),
    onPanResponderGrant: () => {
      if (Platform.OS === "ios") {
        stopScroll();
      }
      position.setOffset({ x: position.x._value, y: position.y._value });
      position.setValue({ x: 0, y: 0 });
    },
    onPanResponderRelease: (e, g) => {
      if (Platform.OS === "ios") {
        stopScroll();
      }
      if (g.moveY > 400) {
        Animated.spring(position, {
          toValue: 0,
          bounciness: 10,
          useNativeDriver: true,
        }).start();
        position.setValue({ x: 0, y: 0 });
        position.flattenOffset();
      }
      position.flattenOffset();
      return true;
    },
    onPanResponderTerminate: (e, g) => {
      if (g.moveY > 400) {
        Animated.spring(position, {
          toValue: 0,
          bounciness: 10,
          useNativeDriver: true,
        }).start();
        position.setValue({ x: 0, y: 0 });
        position.flattenOffset();
      }
      return true;
    },
  });

  return (
    <Container
      {...panResponder.panHandlers}
      style={{
        transform: [{ translateX: position.x }, { translateY: position.y }],
      }}
    >
      <Picture source={src} index={index} />
    </Container>
  );
};

export default PictureComponent;
