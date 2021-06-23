import { addPhraseHandler, setFavoriteHandler } from "../handlers/handlers.js";

document
  .getElementById("add-button")
  .addEventListener("click", addPhraseHandler);

document
  .getElementById("phrases")
  .addEventListener("click", setFavoriteHandler);
