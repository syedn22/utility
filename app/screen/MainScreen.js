import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AppButton from "../components/AppButton";

export default function MainScreen() {
  const navigation = useNavigation();

  return (
    <View>
      <AppButton
        title="Set Operation"
        onPress={() => navigation.navigate("setscreen")}
      />
      <AppButton
        title="Matrix Operation"
        onPress={() => navigation.navigate("matrixscreen")}
      />
      <AppButton
        title="Digits to words"
        onPress={() => navigation.navigate("currencyscreen")}
      />
      <AppButton
        title="Date"
        onPress={() => navigation.navigate("datescreen")}
      />
      <AppButton
        title="Math"
        onPress={() => navigation.navigate("mathscreen")}
      />
    </View>
  );
}
