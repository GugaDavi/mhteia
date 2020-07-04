import React from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import goBackImg from "../../../assets/app_assets/back.png";

import { Container } from "./styles";

const GoBack: React.FC = () => {
  const { goBack } = useNavigation();

  return (
    <Container onPress={() => goBack()}>
      <Image source={goBackImg} style={{ width: 50, height: 50 }} />
    </Container>
  );
};

export default GoBack;
