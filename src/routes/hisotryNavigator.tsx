import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

import FlapScreen from "../screens/Flap";
import SelectHistory from "../screens/Flap/SelectHistory";
import ConfirmGender from "../screens/Histories/a_tartaruga_e_a_lebre/ConfirmHistory";

// History Pages

import Page01 from "../screens/Histories/a_tartaruga_e_a_lebre/pages/page_01";
import Page02 from "../screens/Histories/a_tartaruga_e_a_lebre/pages/page_02";

import GoBack from "../components/GoBack";

const HistoryNavigator: React.FC = () => {
  return (
    <Navigator initialRouteName="FlapScreen">
      <Screen
        name="FlapScreen"
        component={FlapScreen}
        options={{ headerShown: false }}
      />
      <Screen
        name="SelectHistory"
        component={SelectHistory}
        options={{
          title: "",
          headerStyle: { backgroundColor: "#0FEBDE" },
          headerLeft: () => <GoBack />,
        }}
      />
      <Screen
        name="ConfirmGender"
        component={ConfirmGender}
        options={{
          title: "",
          headerStyle: { backgroundColor: "#eee" },
          headerLeft: () => <GoBack />,
        }}
      />
      <Screen
        name="Page01"
        component={Page01}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Page02"
        component={Page02}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};

export default HistoryNavigator;
