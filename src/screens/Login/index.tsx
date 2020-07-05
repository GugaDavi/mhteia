import React, { useState } from "react";
import TeiaColorida from "../../../assets/app_assets/teia2.png";
import SpiderM from "../../../assets/app_assets/aranha-h.png";
import SpiderF from "../../../assets/app_assets/aranha-m.png";
import { useAuth } from "../../store/user";
import { Image } from "react-native";

import {
  Container,
  BoxImg,
  BoxSpider,
  ContainerLogo,
  Form,
  Input,
  BtnSub,
  BtnTex,
} from "./styles";

const Login: React.FC = () => {
  const [nome, setNome] = useState("");
  const { signIn } = useAuth();

  function handleAddLogin() {
    signIn(nome);
  }

  return (
    <Container>
      <BoxImg>
        <Image source={SpiderM} />
      </BoxImg>

      <ContainerLogo>
        <Image source={TeiaColorida} style={{ width: 266, height: 266 }} />
      </ContainerLogo>

      <BoxSpider>
        <Image source={SpiderF} />
      </BoxSpider>

      <Form>
        <Input
          placeholder="Eu me chamo:"
          autoCorrect={false}
          value={nome}
          onChangeText={(value) => setNome(value)}
        />

        <BtnSub
          onPress={nome.length > 3 ? handleAddLogin : () => {}}
          disable={nome.length < 4}
        >
          <BtnTex>Entrar</BtnTex>
        </BtnSub>
      </Form>
    </Container>
  );
};

export default Login;
