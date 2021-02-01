import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import Currency from "../source/Currency";

export default function CurrencyScreen() {
  const [result, setresult] = useState("");
  const [value, setvalue] = useState(0);

  convert = () => {
    const currency = new Currency();
    const afterDecimal = value.split(".");
    if (afterDecimal[1] && afterDecimal[1].length > 2)
      return setresult("After Decimal Two Digits are allowed");
    setresult(currency.convertDigitToWords(value));
  };

  return (
    <>
      <AppText>Amount to Words</AppText>
      <AppText>Enter the amount: </AppText>
      <AppTextInput
        onChangeText={(e) => setvalue(e)}
        placeholder="0"
        keyboardType="number-pad"
      />
      <TouchableOpacity onPress={() => convert()}>
        <MaterialCommunityIcons
          name="equal-box"
          size={40}
          style={{ alignSelf: "center" }}
        />
      </TouchableOpacity>
      <AppText style={{ height: 200 }}>{result}</AppText>
    </>
  );
}
