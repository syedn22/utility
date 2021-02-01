import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppPicker from "../components/AppPicker";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import MathOperation from "../source/MathOperation";

const items = [
  { label: "LCM", value: "LCM" },
  { label: "GCD", value: "GCD" },
  { label: "Standard Deviation", value: "Standard Deviation" },
  { label: "Variance", value: "Variance" },
];

export default function MathOpertion() {
  const [result, setresult] = useState(0);
  const [selectedItem, setselectedItem] = useState(items[0]);
  const [values, setvalues] = useState(0);

  calculate = () => {
    const calculator = new MathOperation();
    const inputValues = values.split(" ");
    if (selectedItem.value === "LCM")
      setresult(inputValues.reduce(calculator.findLCM));
    if (selectedItem.value === "GCD")
      setresult(inputValues.reduce(calculator.findGCD));
    if (selectedItem.value === "Standard Deviation")
      setresult(calculator.findStandardDeviation(inputValues));
    if (selectedItem.value === "Variance")
      setresult(calculator.findVariance(inputValues));
  };

  return (
    <>
      <AppPicker
        items={items}
        placeholder="Math Operation"
        selectedItem={selectedItem}
        onSelectItem={(item) => setselectedItem(item)}
      />
      <AppText>Enter The Numbers</AppText>
      <AppTextInput
        onChangeText={(e) => setvalues(e)}
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
      <AppText>Result :</AppText>
      <AppText style={{ borderColor: "#000", borderBottomWidth: 2 }}>
        {result}
      </AppText>
    </>
  );
}
