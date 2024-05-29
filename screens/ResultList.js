import React, { useEffect } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, BackHandler } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  resultContainer: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  topicText: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: '600',
    color: '#A30A1C',
  },
  resultText: {
    fontSize: 16,
    marginBottom: 5,
  },
  nextLinkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  nextLinkText: {
    color: 'blue',
    fontSize: 16,
    textDecorationLine: 'underline',
    marginHorizontal: 10,
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  scoreLabel: {
    marginRight: 5,
    fontWeight: 'bold',
  },
  scoreValue: {
    color: 'green',
  },
  answerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
  },
  answerLabel: {
    marginRight: 5,
    fontWeight: 'bold',
  },
  answerValue: {
    color: '#333',
  },
});

const ResultsList = () => {
  const [results, setResults] = React.useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetchResults();

    // Add event listener for hardware back button press
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress
    );

    // Clean up event listener on unmount
    return () => backHandler.remove();
  }, []);

  const fetchResults = async () => {
    try {
      const savedResults = await AsyncStorage.getItem("quizResults");
      if (savedResults) {
        const parsedResults = JSON.parse(savedResults);
        const sortedResults = parsedResults.sort((a, b) => new Date(b.date) - new Date(a.date));
        setResults(sortedResults);
      }
    } catch (error) {
      console.error("Error fetching results:", error);
    }
  };

  const handleAgainPress = () => {
    navigation.navigate('Index');
  };

  const handleBackPress = () => {   
    // Exit the app
    BackHandler.exitApp();
    return true;
  };

  const renderResultItem = ({ item }) => {
    return (
      <View style={styles.resultContainer}>
        <Text style={styles.topicText}>{`Topic: ${item.topic}`}</Text>
        <Text style={styles.resultText}>{`Date: ${new Date(item.date).toLocaleString()}`}</Text>
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreLabel}>Score:</Text>
          <Text style={styles.scoreValue}>{((item.correctCount / item.totalCount) * 100).toFixed(2)}%</Text>
        </View>
        <View style={styles.answerContainer}>
          <Text style={styles.answerLabel}>Correct Answers:</Text>
          <Text style={styles.answerValue}>{item.correctCount}</Text>
        </View>
        <View style={styles.answerContainer}>
          <Text style={styles.answerLabel}>Total Questions:</Text>
          <Text style={styles.answerValue}>{item.totalCount}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={results}
        renderItem={renderResultItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.nextLinkContainer}>
        <TouchableOpacity onPress={handleAgainPress}>
          <Text style={styles.nextLinkText}>Again?</Text>
        </TouchableOpacity>       
      </View>
    </View>
  );
};

export default ResultsList;