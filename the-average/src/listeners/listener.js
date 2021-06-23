import { addNumberHandler } from "../handlers/handlers.js";

document
  .getElementById("add-button")
  .addEventListener("click", addNumberHandler);

document.getElementById("reset-button").addEventListener("click", resetHandler);
