import React from "react";
import { useNavigation } from "@react-navigation/native";

import spiderF from "../../../../assets/app_assets/aranha-m.png";
import spiderH from "../../../../assets/app_assets/aranha-h.png";
import flapTarget from "../../../../assets/app_assets/retalho.png";
import historia1 from "../../../../assets/app_assets/historia1.png";
import historia2 from "../../../../assets/app_assets/historia2.png";
import historia3 from "../../../../assets/app_assets/historia3.png";

import {
  Container,
  FlapTarget,
  SpiderH,
  SpiderF,
  FlapTargetBox,
  History1,
  HistoryContent1,
  History2,
  HistoryContent2,
  History3,
  HistoryContent3,
} from "./styles";

const SelectHistory: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <FlapTargetBox>
        <FlapTarget source={flapTarget} />
        <History1 onPress={() => navigate("ConfirmGender")}>
          <HistoryContent1 source={historia1} />
        </History1>
        <History2>
          <HistoryContent2 source={historia2} />
        </History2>
        <History3>
          <HistoryContent3 source={historia3} />
        </History3>
      </FlapTargetBox>
      <SpiderF source={spiderF} />
      <SpiderH source={spiderH} />
    </Container>
  );
};

export default SelectHistory;
