import React, { useState } from "react";
import { TouchableOpacity, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppDatePicker from "../components/AppDatePicker";
import AppText from "../components/AppText";
import Date from "../source/Date";

export default function DateScreen() {
  const [fromDate, setfromDate] = useState();
  const [toDate, settoDate] = useState();
  const [result, setresult] = useState(null);

  const calculate = () => {
    setresult(Date.findDifference(fromDate, toDate));
  };

  return (
    <ScrollView>
      <AppDatePicker
        dateTitle="From Date"
        timeTitle="From time"
        setDateTime={(e) => {
          setfromDate(e);
          console.log(e);
        }}
      />
      <AppDatePicker
        dateTitle="To Date"
        timeTitle="To time"
        setDateTime={(e) => {
          settoDate(e);
          console.log(e);
        }}
      />
      <TouchableOpacity onPress={() => calculate()}>
        <MaterialCommunityIcons
          name="equal-box"
          size={40}
          style={{ alignSelf: "center" }}
        />
      </TouchableOpacity>
      {result && <AppText> Year : {result["year"]}</AppText>}
      {result && <AppText> Month : {result["month"]}</AppText>}
      {result && <AppText> Day : {result["day"]}</AppText>}
      {result && <AppText> Hour : {result["hour"]}</AppText>}
      {result && <AppText> Minute : {result["minute"]}</AppText>}
    </ScrollView>
  );
}
