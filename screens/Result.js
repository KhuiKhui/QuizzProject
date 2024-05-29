import React, { useEffect } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, BackHandler } from "react-native";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { commonStyles } from "../img/commonStyles";

const styles = StyleSheet.create({ 
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
});

const Result = ({ route }) => {
  const navigation = useNavigation();  
  const { topic, correctCount, totalCount, selectedAnswerIndices, questions } = route.params;

  useEffect(() => {
    saveResult();
  }, []);

  const saveResult = async () => {
    try {
      const currentResult = {
        date: new Date().toISOString(),
        topic: topic,       
        correctCount,
        totalCount,
        selectedAnswerIndices,
        questions,
      };
      const existingResults = await AsyncStorage.getItem('quizResults');
      const results = existingResults ? JSON.parse(existingResults) : [];
      results.push(currentResult);
      await AsyncStorage.setItem('quizResults', JSON.stringify(results));
    } catch (error) {
      console.error('Error saving result:', error);
    }
  };

  const renderQuestionItem = ({ item, index }) => {    
    const selectedAnswerIndex = selectedAnswerIndices[index];
    const selectedAnswer = selectedAnswerIndex !== undefined ? item.answers[selectedAnswerIndex].text : 'No answer';
    const correctAnswer = item.answers.find(answer => answer.correct).text;
    const isCorrect = selectedAnswer === correctAnswer;

    return (
      <View style={commonStyles.questionContainer}>
        <Text style={commonStyles.questionText}>{item.question}</Text>
        <Text style={isCorrect ? commonStyles.correctAnswerText : commonStyles.incorrectAnswerText}>
          Your Answer: {selectedAnswer}
        </Text>
        <Text style={commonStyles.correctAnswerText}>Correct Answer: {correctAnswer}</Text>
      </View>
    );
  };

  const handleAgainPress = () => {
    navigation.navigate('Index'); // Navigate to the Index screen
  };

  const handleClosePress = () => {
    BackHandler.exitApp(); // Close the app
  };

  const handleViewResultsPress = () => {
    navigation.navigate('ResultsList'); // Navigate to the ResultsList screen
  };

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.scoreText}>{`Score: ${(correctCount / totalCount * 100).toFixed(2)}%`}</Text>
      <Text style={commonStyles.scoreText}>{`Correct Answers: ${correctCount}`}</Text>
      <Text style={commonStyles.scoreText}>{`Total Questions: ${totalCount}`}</Text>

      <FlatList
        data={questions}
        renderItem={renderQuestionItem}
        keyExtractor={(item, index) => index.toString()}
      />

      <View style={styles.nextLinkContainer}>
        <TouchableOpacity onPress={handleAgainPress}>
          <Text style={styles.nextLinkText}>Again?</Text>
        </TouchableOpacity>       
        <TouchableOpacity onPress={handleViewResultsPress}>
          <Text style={styles.nextLinkText}>View Results</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Result;