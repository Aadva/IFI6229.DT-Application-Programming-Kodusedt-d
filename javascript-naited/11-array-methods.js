const products = [
  { id: 1, name: "Telefon", price: 500 },
  { id: 2, name: "Arvuti", price: 1000 },
  { id: 3, name: "Hiir", price: 30 }
];

const productNames = products.map((product) => product.name);

console.log(productNames);

const expensiveProducts = products.filter(
  (product) => product.price >= 500
);

console.log(expensiveProducts);

const product = products.find(
  (product) => product.id === 2
);

console.log(product);

const missingProduct = products.find(
  (product) => product.id === 10
);

console.log(missingProduct);

const emptyResult = products.filter(
  (product) => product.price > 5000
);

console.log(emptyResult);