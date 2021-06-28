// First think: what you want from users data to them interact with our application?

const state = {
    // store "correct" answers. we start with 0 correct answer
    numCorrect: 
    // store "all user answer" even the wrong ones 
    answers = [],

    // these are questions you provide to get the specific answer. Why it is object? 
    myQuestions = [
  {
    question: "What is 10/2?",
    answers: {
      a: "3",
      b: "5",
      c: "115",
    },
    correctAnswer: "b",
  },
  {
    question: "What is 30/3?",
    answers: {
      a: "3",
      b: "5",
      c: "10",
    },
    correctAnswer: "c",
  },
]

}
