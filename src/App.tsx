import "react-native-gesture-handler";

import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Routes from "./routes";

// import { Container } from './styles';

console.disableYellowBox = true;

function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="transparent" hidden />
      <Routes />
    </NavigationContainer>
  );
}

export default App;
