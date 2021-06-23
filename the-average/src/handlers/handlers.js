import { state } from "../data.js";
import { renderNumberList, renderAverage } from "../components/components.js";
import { average } from "../logic/logic.js";

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

  //render and append new average

  const averageView = renderAverage(state.average); // component renderAverage
  const averageContainer = document.getElementById("average");
  averageContainer.innerHTML = "";
  averageContainer.appendChild(averageView);
};

const resetHandler = () => {
  // reset state to it's initial values
  state.numbers = [];
  state.average = 0;

  // reset Ui
  document.getElementById("numbers").innerHTML = ""; // clear out container
  document.getElementById("average").innerHTML = ""; // clear out container
};
export { addNumberHandler, resetHandler };
