import React from "react";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";

import computerData from "../data/computers.js";
import apStatistics from "../data/apStatistics.js";
import apComputerData from "../data/apComputer.js";
import apComPrinciples from "../data/apComPrinciples.js";

import { RowItem } from "../components/RowItem";

const Index = ({ navigation }) => (
  <ScrollView contentContainerStyle={styles.container}>
    <StatusBar barStyle="dark-content" />
    <View style={styles.row}>
      <RowItem
        name={`${apStatistics.title} (${apStatistics.numberOfQuestions} questions)`}
        color="#A30A1C"
        onPress={() =>
          navigation.navigate("Quiz", {
            title: apStatistics.title,
            questions: apStatistics.questions,
          })
        }
        icon={require("../img/computer_icon.png")}
        description="The major concepts and tools used for collecting, analyzing, and drawing conclusions from data."
      />
      <RowItem
        name={`${computerData.title} (${computerData.numberOfQuestions} questions)`}
        color="#78769C"
        onPress={() =>
          navigation.navigate("Quiz", {
            title: computerData.title,
            questions: computerData.questions,            
          })
        }
        icon={require("../img/computer_icon.png")}
        description="Dive into the world of computing and technology."
      />
      <RowItem
        name={`${apComputerData.title} (${apComputerData.numberOfQuestions} questions)`}
        color="#A30A1C"
        onPress={() =>
          navigation.navigate("Quiz", {
            title: apComputerData.title,
            questions: apComputerData.questions,           
          })
        }
        icon={require("../img/computer_icon.png")}
        description="Get familiar with the concepts and tools of computer science as you learn a subset of the Java programming language."
      />
       <RowItem
        name={`${apComPrinciples.title} (${apComPrinciples.numberOfQuestions} questions)`}
        color="#78769C"
        onPress={() =>
          navigation.navigate("Quiz", {
            title: apComPrinciples.title,
            questions: apComPrinciples.questions,            
          })
        }
        icon={require("../img/computer_icon.png")}
        description="The principles that underlie the science of computing and develop the thinking skills that computer scientists use."
      />
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  row: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});

export default Index;