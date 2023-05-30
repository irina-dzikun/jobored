const KEY = "favoritesList";
const DELIMITER = " ";

function getFavoritesList() {
  const value = localStorage.getItem(KEY);

  if (value == null || value === "") {
    return [];
  } else {
    return value.split(DELIMITER).map((i) => Number(i));
  }
}

function addFavoritesList(id) {
  const array = getFavoritesList();
  array.push(id);
  localStorage.setItem(KEY, array.join(DELIMITER));
}

function removeFavoritesList(id) {
  const array = getFavoritesList();
  let newArray = array.filter((item) => item !== id);
  localStorage.setItem(KEY, newArray.join(DELIMITER));
}

function favoriteHasId(id) {
  const array = getFavoritesList();
  let newArray = array.filter((item) => (item === id ? true : false));
  if (newArray.length === 0) {
    return false;
  } else {
    return true;
  }
}

export {
  getFavoritesList,
  addFavoritesList,
  removeFavoritesList,
  favoriteHasId,
};
