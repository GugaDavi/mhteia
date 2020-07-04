import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #0febde;
`;

export const FlapTargetBox = styled.View`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const FlapTarget = styled.Image`
  position: absolute;
  bottom: 70px;
  width: 500px;
  height: 500px;
`;

export const SpiderH = styled.Image`
  position: absolute;
  width: 208px;
  height: 116px;
  bottom: 70px;
`;

export const SpiderF = styled.Image`
  width: 151px;
  height: 92px;
  position: absolute;
  top: 70px;
`;

export const History1 = styled.TouchableOpacity`
  position: absolute;
  border-radius: 60px;
  left: 90px;
  top: 270px;
  box-shadow: -1px 1px 1px #ffffff;
`;

export const HistoryContent1 = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: 60px;
`;

export const History2 = styled.TouchableOpacity`
  position: absolute;
  border-radius: 60px;
  right: 70px;
  top: 270px;
  box-shadow: -1px 1px 1px #ffffff;
`;

export const HistoryContent2 = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: 60px;
`;

export const History3 = styled.TouchableOpacity`
  position: absolute;
  border-radius: 60px;
  bottom: 0px;
  margin-bottom: 20px;
  box-shadow: -1px 1px 1px #ffffff;
`;

export const HistoryContent3 = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: 60px;
`;
