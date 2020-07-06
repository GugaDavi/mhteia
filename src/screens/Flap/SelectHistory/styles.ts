import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #0febde;
`;

export const ImgsBox = styled.View`
  position: relative;
  align-items: center;
`;

export const FlapTargetBox = styled.View`
  position: relative;
  align-items: center;
`;

export const FlapTarget = styled.Image`
  width: 250px;
  height: 250px;
`;

export const SpiderH = styled.Image`
  position: absolute;
  right: 0px;
  margin-top: 90px;
`;

export const SpiderF = styled.Image`
  width: 151px;
  height: 92px;
  left: 0px;
  position: absolute;
`;

export const HistoryBox = styled.TouchableOpacity`
  border-radius: 60px;
  margin: 10px;
  box-shadow: -1px 1px 1px #ffffff;
  position: relative;
`;

export const History = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 70px;
`;

export const HistoryText = styled.Text`
  position: absolute;
  bottom: 30px;
  left: 20px;
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
  color: #fff;
`;
