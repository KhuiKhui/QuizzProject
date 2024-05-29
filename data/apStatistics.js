const apStatisticsData = {
  title: "AP Statistics", 
  questions: [
    {
      question: "What is the mean of the data set {4, 8, 6, 5, 3}?",
      answers: [
        { id: "1", text: "4.5" },
        { id: "2", text: "5.2", correct: true },
        { id: "3", text: "5" },
        { id: "4", text: "6" }
      ]
    },    
    {
      question: "What does the standard deviation measure?",
      answers: [
        { id: "1", text: "The average value" },
        { id: "2", text: "The spread of data around the mean", correct: true },
        { id: "3", text: "The middle value" },
        { id: "4", text: "The most frequent value" }
      ]
    },
    {
      question: "Which of the following is a characteristic of a normal distribution?",
      answers: [
        { id: "1", text: "It is skewed to the left" },
        { id: "2", text: "It is bimodal" },
        { id: "3", text: "It is symmetrical and bell-shaped", correct: true },
        { id: "4", text: "It has a uniform shape" }
      ]
    },
    {
      question: "What is the probability of flipping a fair coin and getting heads?",
      answers: [
        { id: "1", text: "0.5", correct: true },
        { id: "2", text: "0.25" },
        { id: "3", text: "0.75" },
        { id: "4", text: "1" }
      ]
    },
    {
      question: "In a standard normal distribution, what is the mean?",
      answers: [
        { id: "1", text: "0", correct: true },
        { id: "2", text: "1" },
        { id: "3", text: "-1" },
        { id: "4", text: "2" }
      ]
    },
    {
      question: "What is the purpose of a scatterplot?",
      answers: [
        { id: "1", text: "To show the distribution of a single variable" },
        { id: "2", text: "To show the relationship between two variables", correct: true },
        { id: "3", text: "To compare parts of a whole" },
        { id: "4", text: "To show the frequency of data points" }
      ]
    },
    {
      question: "Which of the following best describes a sample?",
      answers: [
        { id: "1", text: "A subset of a population used to represent the whole population", correct: true },
        { id: "2", text: "The entire group being studied" },
        { id: "3", text: "The parameter of interest" },
        { id: "4", text: "The variable being measured" }
      ]
    },
    {
      question: "What is a type I error in hypothesis testing?",
      answers: [
        { id: "1", text: "Rejecting a true null hypothesis", correct: true },
        { id: "2", text: "Failing to reject a false null hypothesis" },
        { id: "3", text: "Rejecting a false null hypothesis" },
        { id: "4", text: "Failing to reject a true null hypothesis" }
      ]
    },
    {
      question: "Which of the following is not a measure of spread?",
      answers: [
        { id: "1", text: "Range" },
        { id: "2", text: "Interquartile range" },
        { id: "3", text: "Variance" },
        { id: "4", text: "Mode", correct: true }
      ]
    },
    {
      question: "What does a p-value indicate in hypothesis testing?",
      answers: [
        { id: "1", text: "The probability of the sample statistic occurring by random chance if the null hypothesis is true", correct: true },
        { id: "2", text: "The probability that the null hypothesis is true" },
        { id: "3", text: "The probability that the alternative hypothesis is true" },
        { id: "4", text: "The sample size" }
      ]
    },
    {
      question: "What is the interquartile range (IQR)?",
      answers: [
        { id: "1", text: "The difference between the highest and lowest values" },
        { id: "2", text: "The difference between the first quartile and the third quartile", correct: true },
        { id: "3", text: "The difference between the median and the mode" },
        { id: "4", text: "The difference between the mean and the median" }
      ]
    },
    {
      question: "What is a box plot used for?",
      answers: [
        { id: "1", text: "To show the relationship between two variables" },
        { id: "2", text: "To display the distribution of a dataset", correct: true },
        { id: "3", text: "To compare parts of a whole" },
        { id: "4", text: "To show frequency of categories" }
      ]
    },
    {
      question: "What is an outlier?",
      answers: [
        { id: "1", text: "A value much greater or much less than the others in a data set", correct: true },
        { id: "2", text: "The average of a data set" },
        { id: "3", text: "The middle value of a data set" },
        { id: "4", text: "The most frequent value in a data set" }
      ]
    },
    {
      question: "What is the main purpose of inferential statistics?",
      answers: [
        { id: "1", text: "To summarize a data set" },
        { id: "2", text: "To make inferences about a population based on sample data", correct: true },
        { id: "3", text: "To describe the shape of a data distribution" },
        { id: "4", text: "To find the most frequent value" }
      ]
    },
    {
      question: "What is a parameter?",
      answers: [
        { id: "1", text: "A numerical summary of a sample" },
        { id: "2", text: "A numerical summary of a population", correct: true },
        { id: "3", text: "A variable that is measured" },
        { id: "4", text: "A type of hypothesis test" }
      ]
    },
    {
      question: "Which of the following best describes a stratified sample?",
      answers: [
        { id: "1", text: "A sample drawn from a list of all members of the population" },
        { id: "2", text: "A sample where every member of the population has an equal chance of being selected" },
        { id: "3", text: "A sample that is divided into groups and then a random sample is taken from each group", correct: true },
        { id: "4", text: "A sample chosen for convenience" }
      ]
    },
    {
      question: "What is a histogram used for?",
      answers: [
        { id: "1", text: "To display the frequency distribution of a dataset", correct: true },
        { id: "2", text: "To show the relationship between two variables" },
        { id: "3", text: "To compare parts of a whole" },
        { id: "4", text: "To summarize categorical data" }
      ]
    },
    {
      question: "What does a confidence interval estimate?",
      answers: [
        { id: "1", text: "The range within which the true population parameter lies with a certain degree of confidence", correct: true },
        { id: "2", text: "The probability that a sample mean is accurate" },
        { id: "3", text: "The range of values in a data set" },
        { id: "4", text: "The most frequent value in a data set" }
      ]
    },
    {
      question: "What is a null hypothesis?",
      answers: [
        { id: "1", text: "A hypothesis that predicts a relationship between variables" },
        { id: "2", text: "A hypothesis that predicts no effect or no difference", correct: true },
        { id: "3", text: "A hypothesis that is always true" },
        { id: "4", text: "A hypothesis that is always false" }
      ]
    },
    {
      question: "What is the primary purpose of descriptive statistics?",
      answers: [
        { id: "1", text: "To make inferences about a population" },
        { id: "2", text: "To summarize and describe the features of a data set", correct: true },
        { id: "3", text: "To determine the cause of an observed effect" },
        { id: "4", text: "To predict future outcomes based on data" }
      ]
    }
  ],
  get numberOfQuestions() {
    return this.questions.length;
  }
};

export default apStatisticsData;