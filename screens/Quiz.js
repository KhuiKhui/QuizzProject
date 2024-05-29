import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import { Button, ButtonContainer } from '../components/Button';

import { commonStyles } from '../img/commonStyles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 20,
  },
  safearea: {
    flex: 1,
    marginTop: 100,
    justifyContent: 'space-between',
  },
  buttonContainer: {
    marginBottom: 10,
  },
  nextLinkContainer: {
    alignItems: 'flex-end', // Align text to the right
    marginBottom: 20,
  },
  nextLinkText: {
    color: 'blue',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    // Initialize state with selectedAnswerIndices as an empty array
    this.state = {
      correctCount: 0,
      totalCount: this.props.route.params.questions.length,
      activeQuestionIndex: 0,
      answered: false,
      answerCorrect: false,
      selectedAnswerIndices: [],
      selectedAnswerIndex: null,
      questions: this.props.route.params.questions,
      topic: this.props.route.params.title
    };
  }

  answerFunction = (correct, index) => {
  this.setState(prevState => {
    // Create a copy of selectedAnswerIndices array
    const selectedAnswerIndices = [...prevState.selectedAnswerIndices];
    // Update the selected answer index for the current question
    selectedAnswerIndices[prevState.activeQuestionIndex] = index;
    
    // Return the updated state
    return {
      answered: true,      
      answerCorrect: correct,
      selectedAnswerIndices: selectedAnswerIndices,
      selectedAnswerIndex: index
    };
  });
};

  // Method to move to the next question
 nextQuestion = () => {
  this.setState(prevState => {
    // Calculate the index of the next question
    const nextIndex = prevState.activeQuestionIndex + 1;

    // Create a copy of selectedAnswerIndices array
    const selectedAnswerIndices = [...prevState.selectedAnswerIndices];
    // Add the currently selected answer index to the array
    selectedAnswerIndices[prevState.activeQuestionIndex] = prevState.selectedAnswerIndex;

    // Increment correctCount if the selected answer is correct
    const isCorrect = prevState.questions[prevState.activeQuestionIndex].answers[prevState.selectedAnswerIndex].correct;
    const correctCount = isCorrect ? prevState.correctCount + 1 : prevState.correctCount;

    // If all questions have been answered, navigate to result page
    if (nextIndex >= prevState.totalCount) {
      this.props.navigation.navigate('Result', {
        correctCount: correctCount,
        totalCount: prevState.totalCount,
        selectedAnswerIndices: selectedAnswerIndices,
        questions: prevState.questions,
      });
      return null; // Return null to prevent further state updates
    }

    // Otherwise, move to the next question
    return {
      activeQuestionIndex: nextIndex,
      answered: false,
      selectedAnswerIndices: selectedAnswerIndices,
      correctCount: correctCount,
    };
  });
};

  navigateToResult = () => {
  this.setState(prevState => {
    // Calculate the index of the next question
    const nextIndex = prevState.activeQuestionIndex + 1;

    // If all questions have been answered, increment correctCount
    const isCorrect = prevState.questions[prevState.activeQuestionIndex].answers[prevState.selectedAnswerIndex].correct;
    const correctCount = isCorrect ? prevState.correctCount + 1 : prevState.correctCount;

    // If all questions have been answered, navigate to result page
    if (nextIndex >= prevState.totalCount) {
      this.props.navigation.navigate('Result', {
        correctCount: correctCount,
        totalCount: prevState.totalCount,
        selectedAnswerIndices: prevState.selectedAnswerIndices,
        questions: prevState.questions,
        topic: prevState.topic
      });
      return null; // Return null to prevent further state updates
    }
    return {
      correctCount: correctCount,
    };
  });
};

  render() {
    const questions = this.props.route.params.questions;
    const { activeQuestionIndex, answered, selectedAnswerIndex } = this.state;
    const question = questions[this.state.activeQuestionIndex];
    const isLastQuestion = activeQuestionIndex === questions.length - 1;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.safearea}>
          <View>
            <Text style={commonStyles.text}>{question.question}</Text>

            <ButtonContainer style={styles.buttonContainer}>
              {question.answers.map((answer, index) => (
                <Button
                  key={answer.id}
                  text={answer.text}
                  onPress={() => this.answerFunction(answer.correct, index)}
                  color={
                    answered && selectedAnswerIndex === index
                      ? 'green'
                      : '#7D0816'
                  }
                 
                />
              ))}
            </ButtonContainer>

            {answered && (
              <View style={styles.nextLinkContainer}>
                <TouchableOpacity
                  onPress={
                    isLastQuestion ? this.navigateToResult : this.nextQuestion
                  }>
                  <Text> </Text>
                  <Text style={[styles.nextLinkText, { textAlign: 'right' }]}>
                    {isLastQuestion ? 'View Result' : 'Next Question'}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>

          <Text style={commonStyles.text}>
            {`${this.state.activeQuestionIndex + 1}/${this.state.totalCount}`}
          </Text>
        </SafeAreaView>
      </View>
    );
  }
}
export default Quiz;