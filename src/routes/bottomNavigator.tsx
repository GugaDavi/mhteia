import React from "react";
import { Image } from "react-native";

import homeIcon from "../../assets/app_assets/home.png";
import teiaIcon from "../../assets/app_assets/teia_icon.png";
import atividade from "../../assets/app_assets/atividades.png";
import perfil from "../../assets/app_assets/perfil.png";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/Home";
import HistoryNavigator from "./hisotryNavigator";
import ActivitiesScreen from "../screens/Activities";
import ProfileSCreen from "../screens/Profile";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        inactiveBackgroundColor: "#0FEBDE",
        activeBackgroundColor: "#0FEBDE",
        activeTintColor: "#000",
        inactiveTintColor: "#000",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Image source={homeIcon} style={{ width: 33, height: 33 }} />
          ),
          title: "INÍCIO",
        }}
      />
      <Tab.Screen
        name="Flap"
        component={HistoryNavigator}
        options={{
          tabBarIcon: () => (
            <Image source={teiaIcon} style={{ width: 33, height: 33 }} />
          ),
          title: "TEIA",
        }}
      />
      <Tab.Screen
        name="Activities"
        component={ActivitiesScreen}
        options={{
          tabBarIcon: () => (
            <Image source={atividade} style={{ width: 33, height: 33 }} />
          ),
          title: "ATIVIDADES",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileSCreen}
        options={{
          tabBarIcon: () => (
            <Image source={perfil} style={{ width: 33, height: 33 }} />
          ),
          title: "PERFIL",
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
