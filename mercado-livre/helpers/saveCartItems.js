const saveCartItems = (items) => {
  localStorage.setItem('cartItems', items);
  // seu código aqui
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
