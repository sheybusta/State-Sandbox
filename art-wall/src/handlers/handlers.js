import { artWall } from "../component/compornents.js";

const handleMouseMove = (event) => {
  const x = Math.floor((event.clientX / window.innerWidth) * 255);
  const y = Math.floor((event.clientY / window.innerHeight) * 255);
  event.target.style.backgroundColor = `rgb(${x},${y},100)`;
};

const handleChangeDimensions = (event) => {
  debugger;
  console.log("-- change dimensions --");
  //read user input
  const form = event.target.form;
  state.height = Number(form.height.value);
  state.width = Number(form.width.value);

  // create new wall with new state
  const newWall = artWall(state.height, state.width); // artWall is a component

  // render state
  const wallContainer = document.getElementById("wall-container");
  wallContainer.innerHTML = "";
  wallContainer.appendChild(newWall);

  console.log(state);
};

export { handleChangeDimensions, handleMouseMove };
