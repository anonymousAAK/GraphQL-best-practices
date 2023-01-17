const products = {
  products: [
    {
      id: 1,
      description: "Product 1",
      price: 10.0,
      reviews: [],
    },
    {
      id: 2,
      description: "Product 2",
      price: 20.0,
      reviews: [],
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

function addnewProduct(id, description, price) {
  const newProducts = { id, description, price, reviews: []}
  products.push(newProducts);
  return newProducts;
}

module.exports = {
  getAllProducts,
  getproductsByPrice,
  getproductById,
  addnewProduct,
};