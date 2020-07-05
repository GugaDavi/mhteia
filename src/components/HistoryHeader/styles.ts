import styled from "styled-components/native";
import { Platform } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  height: 53px;
  margin-top: ${Platform.OS === "ios" ? 10 + getStatusBarHeight() : 0}px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 5px;
  background-color: #eee;
`;
