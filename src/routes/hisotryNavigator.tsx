import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

import FlapScreen from "../screens/Flap";
import SelectHistory from "../screens/Flap/SelectHistory";
import ConfirmGender from "../screens/Histories/a_tartaruga_e_a_lebre/ConfirmHistory";

// History Pages

import Page01 from "../screens/Histories/a_tartaruga_e_a_lebre/pages/page_01";
import Page02 from "../screens/Histories/a_tartaruga_e_a_lebre/pages/page_02";
import Page03 from "../screens/Histories/a_tartaruga_e_a_lebre/pages/page_03";
import Page04 from "../screens/Histories/a_tartaruga_e_a_lebre/pages/page_04";
import Page05 from "../screens/Histories/a_tartaruga_e_a_lebre/pages/page_05";
import Page06 from "../screens/Histories/a_tartaruga_e_a_lebre/pages/page_06";
import Page07 from "../screens/Histories/a_tartaruga_e_a_lebre/pages/page_07";
import Page08 from "../screens/Histories/a_tartaruga_e_a_lebre/pages/page_08";

import FinalPage from "../screens/Histories/a_tartaruga_e_a_lebre/pages/final_page";
import PointPage from "../screens/Histories/a_tartaruga_e_a_lebre/pages/points_page";

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
          gestureEnabled: false,
        }}
      />
      <Screen
        name="Page02"
        component={Page02}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Screen
        name="Page03"
        component={Page03}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Screen
        name="Page04"
        component={Page04}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Screen
        name="Page05"
        component={Page05}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Screen
        name="Page06"
        component={Page06}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Screen
        name="Page07"
        component={Page07}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Screen
        name="Page08"
        component={Page08}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Screen
        name="FinalPage"
        component={FinalPage}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />

      <Screen
        name="PointPage"
        component={PointPage}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
    </Navigator>
  );
};

export default HistoryNavigator;
