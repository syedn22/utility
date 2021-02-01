import React from "react";
import { Button, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function AppButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#000",
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Roboto",
  },
  button: {
    width: 330,
    height: 50,
    backgroundColor: "#fff",
    margin: 10,
    color: "#000",
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 10,
  },
});
