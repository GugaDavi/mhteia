import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

import FlapScreen from "../screens/Flap";
import ConfirmGender from "../screens/Histories/a_tartaruga_e_a_lebre/ConfirmHistory";

const HistoryNavigator: React.FC = () => {
  return (
    <Navigator initialRouteName="FlapScreen">
      <Screen
        name="FlapScreen"
        component={FlapScreen}
        options={{ headerShown: false }}
      />
      <Screen
        name="ConfirmGender"
        component={ConfirmGender}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default HistoryNavigator;
