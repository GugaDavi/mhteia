import React, { useState, FormEvent } from "react";

import {
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  Button,
  Text
} from "react-native";

import { Container, Form, Input, BtnSub, BtnTex } from './styles';

const Login: React.FC = () => {
  const [name, setName ] = useState('');

  handleAddLogin = () =>{
    const nome = this._form.getValue();
    console.log('nome: ', nome);
  }

  return (
   <Container>
     <View>

     </View>

     <Form >
       <Input
        placeholder="Eu me chamo:"
        autoCorrect={false}
        value={name}
       />


       <BtnSub
        title="Entrar"
        onPress={}
       />



     </Form>
   </Container>
  );
};

export default Login;
