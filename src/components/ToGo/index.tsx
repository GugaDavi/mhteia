import React from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import goBackImg from "../../../assets/app_assets/back.png";

import { Container } from "./styles";

interface Props {
  nextRoute: string;
}

const ToGo: React.FC<Props> = ({ nextRoute }) => {
  const { navigate } = useNavigation();

  return (
    <Container onPress={() => navigate(nextRoute)}>
      <Image
        source={goBackImg}
        style={{ width: 50, height: 50, transform: [{ rotate: "180deg" }] }}
      />
    </Container>
  );
};

export default ToGo;
