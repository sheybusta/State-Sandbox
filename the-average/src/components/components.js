const renderNumberList = (arrOfNumbers) => {
  const list = document.createElement("ul");

  for (let i = 0; i < arrOfNumbers.length; i++) {
    const listItem = document.createElement("li");
    listItem.innerHTML = arrOfNumbers[i];
    listItem.id = i;
    list.appendChild(listItem);
  }

  return list;
};

const renderAverage = (avg) => {
  const averageCaption = document.createElement("p");
  averageCaption.innerHTML = "average:";

  const average = document.createElement("code");
  average.innerHTML = avg;

  const averageContainer = document.createElement("div");
  averageContainer.appendChild(averageCaption);
  averageContainer.appendChild(average);
  return averageContainer;
};

export { renderNumberList, renderAverage };
