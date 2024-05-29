import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";

const screen = Dimensions.get("window");
const CIRCLE_SIZE = screen.width / 3;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000, // Adjust zIndex to ensure the alert is displayed above other components
  },
  circle: {
    backgroundColor: "#ff4136",
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#fff", // Add border color
  },
  circleCorrect: {
    backgroundColor: "#28A125",
    borderColor: "#fff", // Add border color
  },
  iconText: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
  },
  message: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    marginTop: 20, // Add margin top for spacing
  },
});

export const Alert = ({ correct, visible, message }) => {
  if (!visible) return null;

  const circleStyles = [styles.circle];

  if (correct) {
    circleStyles.push(styles.circleCorrect);
  }

  // Generate random text for the icon
  const iconText = correct ? "✔" : "✘";

  return (
    <View style={styles.container}>
      <View style={circleStyles}>
        <Text style={styles.iconText}>{iconText}</Text>
      </View>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};