const computerData = {
  title: "Computer History",  
  questions: [
    {
      question: "Who is considered the 'father of modern computers'?",
      answers: [
        { id: "1", text: "Alan Turing" },
        { id: "2", text: "Charles Babbage", correct: true },
        { id: "3", text: "John von Neumann" },
        { id: "4", text: "Ada Lovelace" }
      ]
    },
    {
      question: "In what year was the first electronic general-purpose computer built?",
      answers: [
        { id: "1", text: "1936" },
        { id: "2", text: "1943" },
        { id: "3", text: "1946", correct: true },
        { id: "4", text: "1951" }
      ]
    },
    {
      question: "What was the name of the first computer virus?",
      answers: [
        { id: "1", text: "Creeper" },
        { id: "2", text: "Brain" },
        { id: "3", text: "Elk Cloner" },
        { id: "4", text: "Creeper", correct: true }
      ]
    },
    {
      question: "Which company introduced the first commercially successful personal computer?",
      answers: [
        { id: "1", text: "IBM" },
        { id: "2", text: "Apple", correct: true },
        { id: "3", text: "Microsoft" },
        { id: "4", text: "Commodore" }
      ]
    },
    {
      question: "What was the name of the first programming language designed for electronic computers?",
      answers: [
        { id: "1", text: "Fortran" },
        { id: "2", text: "COBOL" },
        { id: "3", text: "Assembly language" },
        { id: "4", text: "Short Code", correct: true }
      ]
    },
    {
      question: "Who invented the World Wide Web?",
      answers: [
        { id: "1", text: "Tim Berners-Lee", correct: true },
        { id: "2", text: "Bill Gates" },
        { id: "3", text: "Steve Jobs" },
        { id: "4", text: "Larry Page" }
      ]
    },
    {
      question: "Which computer company was founded by Steve Jobs and Steve Wozniak in 1976?",
      answers: [
        { id: "1", text: "Microsoft" },
        { id: "2", text: "Apple", correct: true },
        { id: "3", text: "IBM" },
        { id: "4", text: "Intel" }
      ]
    },
    {
      question: "What was the first computer game?",
      answers: [
        { id: "1", text: "Spacewar!" },
        { id: "2", text: "Pong" },
        { id: "3", text: "Tennis for Two", correct: true },
        { id: "4", text: "Space Invaders" }
      ]
    },
    {
      question: "Who coined the term 'bug' when referring to computer glitches?",
      answers: [
        { id: "1", text: "Charles Babbage" },
        { id: "2", text: "Grace Hopper", correct: true },
        { id: "3", text: "Alan Turing" },
        { id: "4", text: "John von Neumann" }
      ]
    },
    {
      question: "Which programming language was developed by Dennis Ritchie in the early 1970s?",
      answers: [
        { id: "1", text: "C", correct: true },
        { id: "2", text: "Python" },
        { id: "3", text: "Java" },
        { id: "4", text: "Ruby" }
      ]
    },
    {
      question: "What was the first electronic digital computer called?",
      answers: [
        { id: "1", text: "ENIAC", correct: true },
        { id: "2", text: "UNIVAC" },
        { id: "3", text: "EDSAC" },
        { id: "4", text: "MANIAC" }
      ]
    },
    {
      question: "Who is known as the 'father of the computer mouse'?",
      answers: [
        { id: "1", text: "Bill Gates" },
        { id: "2", text: "Steve Jobs" },
        { id: "3", text: "Douglas Engelbart", correct: true },
        { id: "4", text: "Alan Turing" }
      ]
    },
    {
      question: "What was the first message sent over the ARPANET?",
      answers: [
        { id: "1", text: "Hello, world!" },
        { id: "2", text: "LO" },
        { id: "3", text: "LOGIN" },
        { id: "4", text: "LO", correct: true }
      ]
    },
    {
      question: "Who developed the first graphical user interface (GUI) for computers?",
      answers: [
        { id: "1", text: "Bill Gates" },
        { id: "2", text: "Steve Jobs" },
        { id: "3", text: "Xerox", correct: true },
        { id: "4", text: "IBM" }
      ]
    },
    {
      question: "What year was the first Apple Macintosh computer released?",
      answers: [
        { id: "1", text: "1980" },
        { id: "2", text: "1984", correct: true },
        { id: "3", text: "1986" },
        { id: "4", text: "1990" }
      ]
    },
    {
      question: "Who is often credited with the invention of the computer keyboard layout?",
      answers: [
        { id: "1", text: "Douglas Engelbart" },
        { id: "2", text: "Tim Berners-Lee" },
        { id: "3", text: "Christopher Latham Sholes", correct: true },
        { id: "4", text: "Alan Turing" }
      ]
    },
    {
      question: "What was the first commercially successful portable computer?",
      answers: [
        { id: "1", text: "Osborne 1" },
        { id: "2", text: "IBM ThinkPad" },
        { id: "3", text: "Compaq Portable" },
        { id: "4", text: "Compaq Portable", correct: true }
      ]
    },
    {
      question: "What was the name of the first widely-used web browser",
      answers: [
          { id: "1", text: "Internet Explorer" },
          { id: "2", text: "Netscape Navigator", correct: true },
          { id: "3", text: "Mozilla Firefox" },
          { id: "4", text: "Google Chrome" }
        ]
      },
      {
        question: "Who founded Microsoft in 1975?",
        answers: [
          { id: "1", text: "Steve Jobs" },
          { id: "2", text: "Bill Gates", correct: true },
          { id: "3", text: "Steve Wozniak" },
          { id: "4", text: "Paul Allen" }
        ]
      },
      {
        question: "What was the first computer to be marketed specifically for home use?",
        answers: [
          { id: "1", text: "Altair 8800" },
          { id: "2", text: "Commodore PET" },
          { id: "3", text: "TRS-80" },
          { id: "4", text: "Apple II", correct: true }
        ]
      }
    ],
        get numberOfQuestions() {
        return this.questions.length;
        }
 };  

export default computerData;