const addNumberHandler = () => {
  // gather user input

  const inputEl = document.getElementById("number-input");
  const userInput = Number(inputEl.value); // convert input in number / before was a string

  // update state

  state.numbers.push(userInput);
  state.average = average(state.numbers);
};
