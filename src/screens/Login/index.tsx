import React from "react";

import {
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Text
} from "react-native";

import { Container, Form, Input, BtnSub, BtnTex } from './styles';

const Login: React.FC = () => {
  return (
   <Container>
     <View>

     </View>

     <Form>
       <Input
        placeholder="Nome"
        autoCorrect={false}
        onChangeText={()=> {}}
       />

       <Input
        placeholder="Sobrenome"
        autoCorrect={false}
        onChangeText={()=> {}}
       />

       <BtnSub>
         <BtnTex>Acessar</BtnTex>
       </BtnSub>


     </Form>
   </Container>
  );
};

export default Login;
