const APComputerData = {
  title: "Computer Science",  
  questions: [
    {      
      question: "Which data structure uses LIFO (Last In, First Out) principle?",
      answers: [
        { id: "1", text: "Queue" },
        { id: "2", text: "Stack", correct: true },
        { id: "3", text: "ArrayList" },
        { id: "4", text: "HashMap" }
      ]
    },
    {      
      question: "Which of the following statements about interfaces in Java is true?",
      answers: [
        { id: "1", text: "A class can implement multiple interfaces.", correct: true },
        { id: "2", text: "Interfaces can contain instance fields" },
        { id: "3", text: "Methods in an interface can have a body." },
        { id: "4", text: "Interfaces can extend multiple classes." }
      ]
    },
    {      
      question: "Which Java collection allows duplicate elements?",
      answers: [
        { id: "1", text: "HashSet" },
        { id: "2", text: "TreeSet" },
        { id: "3", text: "ArrayList", correct: true },
        { id: "4", text: "None of the above" }
      ]
    },
    {
      question: "What is the time complexity of a binary search algorithm?",
      answers: [
        { id: "1", text: "O(n)" },
        { id: "2", text: "O(n log n)" },
        { id: "3", text: "O(log n)", correct: true },
        { id: "4", text: "O(1)" }
      ]
    },
    {
      question: "Which keyword is used to inherit a class in Java?",
      answers: [
        { id: "1", text: "implements" },
        { id: "2", text: "extends", correct: true },
        { id: "3", text: "inherits" },
        { id: "4", text: "uses" }
      ]
    },
    {
      question: "Which of the following keywords is used to prevent a method from being overridden in Java?",
      answers: [
        { id: "1", text: "static" },
        { id: "2", text: "abstract" },
        { id: "3", text: "final", correct: true },
        { id: "4", text: "synchronized" }
      ]
    },
    {
      question: "What does the `this` keyword refer to in Java?",
      answers: [
        { id: "1", text: "It refers to the superclass of the current object." },
        { id: "2", text: "It refers to the current object itself.", correct: true },
        { id: "3", text: "It refers to the subclass of the current object." },
        { id: "4", text: "It refers to the immediate parent class of the current class." }
      ]
    },
    {
      question: "Which of the following is not a valid access modifier in Java?",
      answers: [
        { id: "1", text: "public" },
        { id: "2", text: "private" },
        { id: "3", text: "protected" },
        { id: "4", text: "default", correct: true }
      ]
    },    
    {
      question: "What is the purpose of the `final` keyword in Java?",
      answers: [
        { id: "1", text: "To define a constant value" },
        { id: "2", text: "To prevent method overriding" },
        { id: "3", text: "To prevent inheritance of a class" },
        { id: "4", text: "All of the above", correct: true }
      ]
    },
    {
      question: "Which of the following is not a primitive data type in Java?",
      answers: [
        { id: "1", text: "int" },
        { id: "2", text: "boolean" },
        { id: "3", text: "char" },
        { id: "4", text: "String", correct: true }
      ]
    },
    {
      question: "Which of the following is a characteristic of a constructor in Java?",
      answers: [
        { id: "1", text: "It has a return type." },
        { id: "2", text: "It is called automatically when an object is created.", correct: true },
        { id: "3", text: "It can be called explicitly like other methods." },
        { id: "4", text: "It must be declared as public." }
      ]
    },
    {
      question: "What is method overloading in Java?",
      answers: [
        { id: "1", text: "Defining multiple methods with the same name but different parameters.", correct: true },
        { id: "2", text: "Defining multiple methods with the same name and same parameters." },
        { id: "3", text: "Defining multiple methods with different names but same parameters." },
        { id: "4", text: "Defining multiple methods with different names and different parameters." }
      ]
    },
    {
      question: "Which of the following exceptions is thrown when a null object is dereferenced?",
      answers: [
        { id: "1", text: "IOException" },
        { id: "2", text: "NullPointerException", correct: true },
        { id: "3", text: "ArrayIndexOutOfBoundsException" },
        { id: "4", text: "ClassCastException" }
      ]
    },
    {
      question: "In Java, which keyword is used to create a subclass?",
      answers: [
        { id: "1", text: "inherits" },
        { id: "2", text: "extends", correct: true },
        { id: "3", text: "implements" },
        { id: "4", text: "creates" }
      ]
    },
    {
      question: "Which of the following loops is guaranteed to execute at least once?",
      answers: [
        { id: "1", text: "for loop" },
        { id: "2", text: "while loop" },
        { id: "3", text: "do-while loop", correct: true },
        { id: "4", text: "enhanced for loop" }
      ]
    },    
    {
      question: "Which of the following data types can be used in a switch statement in Java?",
      answers: [
        { id: "1", text: "int" },
        { id: "2", text: "char" },
        { id: "3", text: "String" },
        { id: "4", text: "All of the above", correct: true }
      ]
    },
    {
      question: "What does the `this` keyword refer to in Java?",
      answers: [
        { id: "1", text: "It refers to the superclass of the current object." },
        { id: "2", text: "It refers to the current object itself.", correct: true },
        { id: "3", text: "It refers to the subclass of the current object." },
        { id: "4", text: "It refers to the immediate parent class of the current class." }
      ]
    },
    {
      question: "Which of the following is not a valid access modifier in Java?",
      answers: [
        { id: "1", text: "public" },
        { id: "2", text: "private" },
        { id: "3", text: "protected" },
        { id: "4", text: "default", correct: true }
      ]
    },
    {
      question: "What does the `super` keyword refer to in Java?",
      answers: [
        { id: "1", text: "It refers to the superclass of the current object." },
        { id: "2", text: "It refers to the current object itself." },
        { id: "3", text: "It refers to the subclass of the current object." },
        { id: "4", text: "It refers to the immediate parent class of the current class.", correct: true }
      ]
    },
    {
      question: "Which of the following is not a valid identifier in Java?",
      answers: [
        { id: "1", text: "myVariable" },
        { id: "2", text: "_myVariable" },
        { id: "3", text: "2myVariable", correct: true },
        { id: "4", text: "$myVariable" }
      ]
    }
  ],
  get numberOfQuestions() {
    return this.questions.length;
  }
};

export default APComputerData;