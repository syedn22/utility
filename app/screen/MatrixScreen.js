import React, { useState } from "react";
import { View } from "react-native";
import { TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import Matrix from "../components/Matrix";
import MatrixOperation from "../source/MatrixOperation";

export default function MatrixScreen() {
  const [lowerDiagonal, setlowerDiagonal] = useState([]);
  const [matrix, setmatrix] = useState([]);
  const [numberOfColumns, setnumberOfColumns] = useState(0);
  const [numberOfRows, setnumberOfRows] = useState(0);
  const [transpose, settranspose] = useState([]);
  const [upperDiagonal, setupperDiagonal] = useState([]);
  const [value, setvalue] = useState(null);
  const [error, seterror] = useState(false);

  calculate = () => {
    let arrayOfNumbers = value.split(" ");
    if (numberOfColumns * numberOfRows !== arrayOfNumbers.length)
      return seterror(true);
    seterror(false);
    const calculator = new MatrixOperation();
    let k = 0;
    let temp = [];
    for (let i = 0; i < numberOfRows; i++) {
      temp[i] = new Array();
      for (let j = 0; j < numberOfColumns; j++) {
        temp[i][j] = arrayOfNumbers[k];
        k++;
      }
    }
    setmatrix(temp);
    settranspose(calculator.transposeMatrix(temp));
    if (numberOfColumns === numberOfRows) {
      setlowerDiagonal(calculator.lowerDiagonalOfMatrix(temp));
      setupperDiagonal(calculator.upperDiagonalOfMatrix(temp));
    } else {
      setlowerDiagonal(null);
      setupperDiagonal(null);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <AppText>Row X Column</AppText>
        <AppTextInput
          onChangeText={(e) => setnumberOfRows(e)}
          placeholder="0"
          keyboardType="number-pad"
          style={styles.input}
        />
        <AppTextInput
          onChangeText={(e) => setnumberOfColumns(e)}
          placeholder="0"
          keyboardType="number-pad"
          style={styles.input}
        />
      </View>

      <AppText>Enter Matrix Values:</AppText>
      <AppTextInput
        onChangeText={(e) => setvalue(e)}
        placeholder="0"
        keyboardType="number-pad"
        style={styles.matrixInput}
      />
      <TouchableOpacity onPress={() => calculate()}>
        <MaterialCommunityIcons
          name="equal-box"
          size={40}
          style={{ alignSelf: "center" }}
        />
      </TouchableOpacity>
      {error && (
        <AppText style={styles.danger}>
          Input values should be equal to Row x Column value
        </AppText>
      )}
      <AppText>Matrix</AppText>
      {matrix && <Matrix data={matrix} />}
      <AppText>Transpose</AppText>
      {transpose && <Matrix data={transpose} />}
      <AppText>Upper Diagonal</AppText>
      {upperDiagonal ? (
        <Matrix data={upperDiagonal} />
      ) : (
        <AppText style={styles.danger}>
          Upper Diagonal is can be applied for Square matrix
        </AppText>
      )}
      <AppText>Lower Diagonal</AppText>
      {lowerDiagonal ? (
        <Matrix data={lowerDiagonal} />
      ) : (
        <AppText style={styles.danger}>
          Lower Diagonal is can be applied for Square matrix
        </AppText>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  danger: {
    height: 50,
    fontSize: 14,
    color: "tomato",
  },
  input: {
    width: 50,
  },
  matrixInput: {
    height: 100,
  },
});
