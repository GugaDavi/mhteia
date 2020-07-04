import React, { useState } from "react";

import {
  View,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  Text
} from "react-native";

// import spiderIconH from '';
// import paisagemIcon from ;
// import spiderIconM from ;

import { Container, Toys, BoxTex, BoxHistory, BoxSpider, Paisagem, SpiderH , SpiderM, Info } from './styles';

const History: React.FC = () => {
  return (
    <Container>
      <Toys>
        <SpiderH
          source={require('../../../assets/app_assets/aranha-h.png')}
        />
      </Toys>

      <BoxTex>
        <Info>A Tartaruga e a Lebre</Info>
      </BoxTex>

      <BoxHistory>
        <Paisagem
          source={require('../../../assets/app_assets/paisagem.jpeg')}
        />
      </BoxHistory>

      <BoxSpider>
        <SpiderM
          source={require('../../../assets/app_assets/aranha-m.png')}
        />
      </BoxSpider>


    </Container>
  )
}

export default History;
