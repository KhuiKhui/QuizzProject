import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  text: {
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
    letterSpacing: -0.02,
    fontWeight: '600',
  },
  questionContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 15,
  },
  questionText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  correctAnswerText: {
    fontSize: 16,
    color: "#28A745",
    marginBottom: 5,
  },
  incorrectAnswerText: {
    fontSize: 16,
    color: "#7D0816",
    marginBottom: 5,
  },  
  scoreText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  // Add more common styles as needed
});
