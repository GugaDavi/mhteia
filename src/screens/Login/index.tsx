import React, { useState, FormEvent } from "react";
import TeiaColorida from "./assets/teia_colorida.png"
import SpiderM from "./assets/spiderm.png"
import SpiderH from "./assets/spiderh.png"
import { useAuth } from "../../store/user";
import {
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Text
} from "react-native";

import { Container, BoxImg, BoxSpider, ContainerLogo, Form, Input, BtnSub, BtnTex } from './styles';

const Login: React.FC = () => {
  const [ nome, setNome] = useState('');
  const { signIn } = useAuth();

  function handleAddLogin(){
    signIn(nome)
  }

  return (
   <Container>

     <BoxImg>
       <Image source={SpiderM}  />
     </BoxImg>

     <ContainerLogo>
        <Image source={TeiaColorida} />
     </ContainerLogo>

    <BoxSpider>
      <Image source={SpiderH} />
    </BoxSpider>


     <Form >
       <Input
        placeholder="Eu me chamo:"
        autoCorrect={false}
        value={nome}
        onChangeText={(value) => setNome(value)}
       />


       <BtnSub onPress={nome.length > 3 ? handleAddLogin: () =>{}} disable = {nome.length < 4}>
         <BtnTex>Entrar</BtnTex>
       </BtnSub>

     </Form>
   </Container>
  );
};

export default Login;
