import { state } from "../data.js";
import { renderNumberList } from "../components/components.js";

const addNumberHandler = () => {
  // gather user input

  const inputEl = document.getElementById("number-input");
  const userInput = Number(inputEl.value); // convert input in number / before was a string

  // update state

  state.numbers.push(userInput);
  //   state.average = average(state.numbers);

  // render and append new list

  const listView = renderNumberList(state.numbers); // component renderNumberList
  const numbersContainer = document.getElementById("numbers");
  numbersContainer.innerHTML = "";
  numbersContainer.appendChild(listView);
};

export { addNumberHandler };
