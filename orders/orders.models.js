const orders = {
  orders: [
    {
      date: "2020-01-01",
      subtotal: 30.0,
      items: [
        {
          product: {
            id: 1,
            description: "Product 1",
            price: 10.0,
          },
          quantity: 1,
        },
      ],
    },
  ],
};

function getAllOrders() {
  return orders;
}

module.exports = {
  getAllOrders,
};