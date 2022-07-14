const fetchItem = async (endPoint) => {
  try {
    const url = `https://api.mercadolibre.com/items/${endPoint}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
  // seu código aqui
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
