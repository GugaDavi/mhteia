import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import spiderF from "../../../../assets/app_assets/aranha-m.png";
import spiderH from "../../../../assets/app_assets/aranha-h.png";
import flapTarget from "../../../../assets/app_assets/retalho.png";
import historia1 from "../../../../assets/app_assets/historia1.png";
import historia2 from "../../../../assets/app_assets/historia2.png";
import historia3 from "../../../../assets/app_assets/historia3.png";

import {
  Container,
  ImgsBox,
  FlapTarget,
  SpiderH,
  SpiderF,
  FlapTargetBox,
  HistoryBox,
  History,
  HistoryText,
} from "./styles";

const SelectHistory: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <ImgsBox>
        <FlapTarget source={flapTarget} />
        <SpiderF source={spiderF} />
        <SpiderH source={spiderH} />
      </ImgsBox>
      <FlapTargetBox>
        <View style={{ flexDirection: "row" }}>
          <HistoryBox onPress={() => navigate("ConfirmGender")}>
            <History source={historia1} />
            <HistoryText>FÁBULA</HistoryText>
          </HistoryBox>
          <HistoryBox>
            <History source={historia2} />
            <HistoryText>BIOGRAFIA</HistoryText>
          </HistoryBox>
        </View>
        <HistoryBox>
          <History source={historia3} />
          <HistoryText>ROMANCE</HistoryText>
        </HistoryBox>
      </FlapTargetBox>
    </Container>
  );
};

export default SelectHistory;
