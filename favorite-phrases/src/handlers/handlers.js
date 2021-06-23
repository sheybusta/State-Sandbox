import { state } from "../data.js";
import { renderPhrasesList } from "../components/components.js";

const addPhraseHandler = (event) => {
  // this is the handler to add phrase

  //read user input

  const inputEl = document.getElementById("phrase-input"); // take from html element
  const userInput = inputEl.value; // take user phrase

  // exit early if there was no input

  if (userInput === "") {
    // condition to check if it is empty
    console.log("empty user input");
    return; // try again because it is empty
  }

  // update state
  state.phrases.push(userInput); // take phrase and store in state

  // render state and update UI
  const renderedLis = renderPhrasesList(state.phrases); // component function
  const phrasesEl = document.getElementById("phrases");
  phrasesEl.innerHTML = "";
  phrasesEl.appendChild(renderedLis); // component its inside of big div.
};

export { addPhraseHandler };
