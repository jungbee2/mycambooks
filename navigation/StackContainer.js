import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login.js";
import MemberJoin from "./screens/MemberJoin.js";
import MemberJoin2 from "./screens/MemberJoin2.js";
import OneMain from "./screens/OneMain.js";
import TwoMain from "./screens/TwoMain.js";
import ThreeMain from "./screens/ThreeMain.js";
import FourMain from "./screens/FourMain.js";
import FiveMain from "./screens/FiveMain.js";
import MySetting from "./screens/MySetting.js";
import GuestFiveMain from "./screens/GuestFiveMain.js";
import MyInfo from "./screens/MyInfo.js";
import ChatPage from "./screens/ChatPage.js";

const Stack = createStackNavigator();

export default function StackContainer() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MemberJoin"
        component={MemberJoin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MemberJoin2"
        component={MemberJoin2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OneMain"
        component={OneMain}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TwoMain"
        component={TwoMain}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ThreeMain"
        component={ThreeMain}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FourMain"
        component={FourMain}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FiveMain"
        component={FiveMain}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GuestFiveMain"
        component={GuestFiveMain}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MySetting"
        component={MySetting}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MyInfo"
        component={MyInfo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChatPage"
        component={ChatPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
