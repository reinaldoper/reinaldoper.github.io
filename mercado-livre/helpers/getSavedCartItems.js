const getSavedCartItems = (items) => {
  const result = localStorage.getItem(items);
  return result;
  // seu código aqui
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
