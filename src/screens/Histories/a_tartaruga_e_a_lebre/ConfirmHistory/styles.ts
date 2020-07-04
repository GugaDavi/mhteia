import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Toys = styled.View`
  justify-content: flex-end;
`;

export const SpiderH = styled.Image`
  width: 208px;
  height: 116px;
  margin-left: 30%;
  margin-bottom: 10px;
`;

export const BoxTex = styled.TouchableOpacity`
  background-color: #0af905;
  border-radius: 10px;
  padding: 18px 25px;
  box-shadow: 0px 0px 3px #0af905;
`;

export const Info = styled.Text`
  color: #fff;
  font-size: 24px;
  text-align: center;
  font-weight: bold;
`;

export const BoxHistory = styled.View`
  flex: 1;
  justify-content: center;
  box-shadow: 2px 4px 4px #0af905;
`;

export const Paisagem = styled.Image`
  width: 350px;
  height: 250px;
`;

export const BoxSpider = styled.View`
  justify-content: flex-start;
`;

export const SpiderM = styled.Image`
  width: 140px;
  height: 85px;
  margin-right: 28%;
  margin-bottom: 10px;
`;
