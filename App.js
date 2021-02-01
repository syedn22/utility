import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import MainScreen from "./app/screen/MainScreen";
import Screen from "./app/components/Screen";
import MatrixScreen from "./app/screen/MatrixScreen";
import MathOperation from "./app/screen/MathOpertion";
import SetScreen from "./app/screen/SetScreen";
import DateScreen from "./app/screen/DateScreen";
import CurrencyScreen from "./app/screen/CurrencyScreen";

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Utilities" component={MainScreen} />
    <Stack.Screen name="matrixscreen" component={MatrixScreen} />
    <Stack.Screen name="mathscreen" component={MathOperation} />
    <Stack.Screen name="setscreen" component={SetScreen} />
    <Stack.Screen name="datescreen" component={DateScreen} />
    <Stack.Screen name="currencyscreen" component={CurrencyScreen} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Screen>
        <StackNavigator />
      </Screen>
    </NavigationContainer>
  );
}
