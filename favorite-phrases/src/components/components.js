const renderPhrasesList = (arrOfStrings) => {
  // parameter it is the structure of state
  const list = document.createElement("ol");
  list.start = 0; // list start from the first element

  for (let i = 0; i < arrOfStrings.length; i++) {
    // going through all phrases
    const listItem = document.createElement("li"); //create li for each phrase
    listItem.innerHTML = arrOfStrings[i];
    listItem.id = i;
    list.appendChild(listItem); // <ol><li></li></ol>
  }

  return list; // <ol></ol>
};

export { renderPhrasesList };
