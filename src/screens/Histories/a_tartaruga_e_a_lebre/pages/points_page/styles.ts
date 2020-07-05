import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #eb9d9d;
  flex: 1;
  align-items: center;
`;

export const SpidersBox = styled.View`
  flex-direction: row;
  align-self: stretch;
  justify-content: space-between;
  align-items: center;
  padding: 25px 33px;
`;

export const Spider = styled.Image`
  width: 115px;
  height: 60px;
`;

export const Box = styled.View`
  margin: 7px;
`;

export const MsgBox = styled.View`
  background-color: #0febde;
  align-items: center;
  align-self: stretch;
  border-radius: 10px;
  margin: 10px 20px;
  padding: 10px 20px;
`;

export const MsgText = styled.Text`
  font-size: 16px;
  text-align: left;
  font-weight: bold;
`;

export const MsgTextHighlight = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fc0a0a;
`;

export const Btn = styled.TouchableOpacity`
  border: 1px solid #0febde;
  box-shadow: 2px 2px 2px #ff6347;
  border-radius: 20px;
  background: #fc0a0a;
  padding: 15px 25px;

  align-items: center;
`;

export const BtnText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;
