//make handler

const showResultsHandler = () => {
  // gather answer

  const quizContainer = document.getElementById("quiz");
  const answerContainers = quizContainer.querySelectorAll(".answers");

  // update state with new user answers
  state.userAnswers = [];
  for (let i = 0; i < answerContainers.length; i++) {
    const answerContainer = answerContainers[i]; // reach index of answer
    const userAnswer = (
      answerContainer.querySelector("input[name=question" + i + "]:checked") ||
      {}
    ).value; //reach selected answer
    state.userAnswers.push(userAnswer); // update state with selected answer
  }

  // update UI to show if it correct or incorrect
  state.numCorrect = 0;

  for (let i = 0; i < state.questions.length; i++) {
    // if answer is correct
    if (state.userAnswers[i] === state.questions[i].correctAnswer) {
      // add to the number of correct answers
      state.numCorrect++;

      // color the answers green
      answerContainers[i].style.color = "lightgreen";
    }
    // if answer is wrong or blank
    else {
      // color the answers red
      answerContainers[i].style.color = "red";
    }
  }

  // show number of correct answers out of total
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML =
    state.numCorrect + " out of " + state.questions.length;
};

export { showResultsHandler };

/*

// First thought: structure  

// for me this is entery component
function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

}
function showQuestions(questions, quizContainer) {

}
function showResults(questions, quizContainer, resultsContainer)

showQuestions(question, quizContainer);

//when user clicks sumit, show results

submitButton.onclick = function() {
    showResults(questions, quizContainer, resultsContainer);

}
*/
