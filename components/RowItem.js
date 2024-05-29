import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export const RowItem = ({ name, color, onPress, icon, description }) => (
  <TouchableOpacity style={[styles.container, { backgroundColor: color }]} onPress={onPress}>
    <Image source={icon} style={styles.icon} />
    <View style={styles.textContainer}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  description: {
    fontSize: 14,
    color: "#fff",
  },
});