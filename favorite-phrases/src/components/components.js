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

  return list; // ELEMENT <ol></ol>
};

const renderFavorite = (id, phrase) => {
  const favoriteCaption = document.createElement("p"); // render in PARAGRAPH
  favoriteCaption.innerHTML = "favorite";

  const favorite = document.createElement("code");
  favorite.innerHTML = `${id}. ${phrase}`;

  const favoriteContainer = document.createElement("div");
  favoriteContainer.appendChild(favoriteCaption);
  favoriteContainer.appendChild(favorite);
  return favoriteContainer; // render div
};

export { renderPhrasesList, renderFavorite };
