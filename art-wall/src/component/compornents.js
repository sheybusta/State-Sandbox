import { handleMouseMove } from "../handlers/handlers";

const colorChanger = (className) => {
  // create div
  const element = document.createElement("div");
  element.className = className;
  element.addEventListener("mousemove", handleMouseMove);
  return element;
};

const artWall = (height, width) => {
  // parameters same as keys of state
  //
  // can you figure out how to write this component with classes instead of .style?
  const table = document.createElement("table");
  table.className = "wall";

  for (let i = 0; i < height; i++) {
    const row = document.createElement("tr"); //
    row.style.height = `${100 / height}%`;

    for (let j = 0; j < width; j++) {
      const changer = colorChanger("wall-colorr");

      const cell = document.createElement("td");
      cell.style.width = `${100 / width}%;`;
      cell.appendChild(changer);

      row.appendChild(cell); //<tr><td></td></tr>
    }
    table.appendChild(row);
  }
  return table;
};

export { colorChanger, artWall };
