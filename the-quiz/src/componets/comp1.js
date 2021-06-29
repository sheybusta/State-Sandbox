const renderQuestions = (questions) => {
  // we'll need a place to store the output and the answer choices
  const output = [];

  // for each question...
  for (var i = 0; i < questions.length; i++) {
    // first reset the list of answers
    const questionAnswers = [];

    // for each available answer to this question...
    for (letter in questions[i].answers) {
      // ...add an html radio button
      questionAnswers.push(
        "<label>" +
          '<input type="radio" name="question' +
          i +
          '" value="' +
          letter +
          '">' +
          letter +
          ": " +
          questions[i].answers[letter] +
          "</label>"
      );
    }

    // add this question and its answers to the output
    output.push(
      '<div class="question">' +
        questions[i].question +
        "</div>" +
        '<div class="answers">' +
        questionAnswers.join("") +
        "</div>"
    );
  }

  // finally combine our output list into one string of html and put it on the page
  return output.join("");
};
