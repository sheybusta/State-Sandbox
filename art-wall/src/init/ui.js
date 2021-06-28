import { artWall } from "../component/compornents.js";

import { state } from "../data.js";

// import { height, width } from "../data.js";

console.log("initial state:", state);

document.getElementById("wall-dimensions").height.value = state.height;
document.getElementById("wall-dimensions").width.value = state.width;

const theWall = artWall(state.height, state.width);
document.getElementById("wall-container").appendChild(theWall);
