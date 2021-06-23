import { state } from "../data.js";
import { renderFavorite, renderPhrasesList } from "../components/components.js";

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

const setFavoriteHandler = (event) => {
  // make sure LI was clicked
  if (event.target.nodeName !== "LI") {
    console.log("did not click a list item"); // if user doesn't click on LI
    return;
  }

  // read and process user input
  const favoriteLi = event.target; // take Li #2
  const favoriteIndexStr = favoriteLi.id; // take the id converto to string -> "2"
  const favoriteIndex = Number(favoriteIndexStr); // convert number -> 2

  // update state

  state.favorite = favoriteIndex; // we know that is 2

  // render state and update UI
  const favoritePhrase = state.phrases[state.favorite]; // phrase and 2
  const favoriteView = renderFavorite(favoriteIndex, favoritePhrase); // order in 2 and phrase
  const favoriteEl = document.getElementById("favorite");
  favoriteEl.innerHTML = ""; // delete previuos element and adds new one
  favoriteEl.appendChild(favoriteView);
};
export { addPhraseHandler, setFavoriteHandler };
