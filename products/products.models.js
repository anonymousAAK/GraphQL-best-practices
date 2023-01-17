const products = {
  products: [
    {
      id: 1,
      description: "Product 1",
      price: 10.0,
    },
    {
      id: 2,
      description: "Product 2",
      price: 20.0,
    },
  ],
};

function getAllProducts() {
  return products;
}

function getproductsByPrice(minPrice, maxPrice) {
  return products.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  );
}
function getproductById(id) {
  return products.find((product) => product.id === id);
}

module.exports = {
  getAllProducts,
  getproductsByPrice,
  getproductById,
};