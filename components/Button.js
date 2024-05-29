import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "95%",    
    marginTop: 20
  },
  text: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center"
  },
  buttonContainer: {
    flexDirection: "column",
    flexWrap: "wrap",    
    marginTop: 20,
    justifyContent: "space-between"
  }
});

export const Button = ({ text, onPress = () => {}, color, disabled }) => {
  if (disabled) {
    return (
      <View style={[styles.button, { backgroundColor: 'rgba(163, 10, 28, 0.3)' }]}>
        <Text style={styles.text}>{text}</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: color }]}
      activeOpacity={0.7}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export const ButtonContainer = ({ children }) => (
  <View style={styles.buttonContainer}>{children}</View>
);
