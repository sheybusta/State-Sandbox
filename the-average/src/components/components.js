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

export { renderNumberList };
