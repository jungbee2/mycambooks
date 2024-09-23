import React from "react";
import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import StackContainer from "../CambooksProject/navigation/StackContainer.js";

export default function App() {
  return (
    <NavigationContainer>
      <StackContainer></StackContainer>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
