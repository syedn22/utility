import React, { useState } from "react";
import { TouchableOpacity, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import SetOperations from "../source/SetOpertions";

export default function CurrencyScreen() {
  const [SetA, setSetA] = useState(null);
  const [SetB, setSetB] = useState(null);
  const [unionSet, setunionSet] = useState(null);
  const [intersectionSet, setintersectionSet] = useState(null);
  const [A_B, setA_B] = useState(null);
  const [B_A, setB_A] = useState(null);

  calculate = () => {
    if (!SetA && !SetB) return;
    const calculator = new SetOperations();
    const firstSet = SetA ? SetA.split(" ") : [];
    const secondSet = SetB ? SetB.split(" ") : [];
    setunionSet(calculator.union(firstSet, secondSet));
    setintersectionSet(calculator.intersection(firstSet, secondSet));
    setA_B(calculator.difference(firstSet, secondSet));
    setB_A(calculator.difference(secondSet, firstSet));
  };

  return (
    <>
      <ScrollView>
        <AppText>Set Opertions</AppText>
        <AppText>Enter Set A:</AppText>
        <AppTextInput
          onChangeText={(e) => setSetA(e)}
          placeholder="0"
          keyboardType="number-pad"
        />
        <AppText>Enter Set B:</AppText>
        <AppTextInput
          onChangeText={(e) => setSetB(e)}
          placeholder="0"
          keyboardType="number-pad"
        />
        <TouchableOpacity onPress={() => calculate()}>
          <MaterialCommunityIcons
            name="equal-box"
            size={40}
            style={{ alignSelf: "center" }}
          />
        </TouchableOpacity>
        <AppText>Union : {unionSet ? unionSet : "[ ]"}</AppText>
        <AppText>
          Intersection : {intersectionSet ? intersectionSet : "[ ]"}
        </AppText>
        <AppText>Minus (A/B) : {A_B ? A_B : "[ ]"}</AppText>
        <AppText>Minus (B/A) : {B_A ? B_A : "[ ]"}</AppText>
      </ScrollView>
    </>
  );
}
