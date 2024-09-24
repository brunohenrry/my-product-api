let products = [];

// Get all products
exports.getAllProducts = (req, res) => {
  res.status(200).json(products);
};

// Get a single product by ID
exports.getProductById = (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

// Create a new product
exports.createProduct = (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

// Update a product by ID
exports.updateProduct = (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (product) {
    product.name = req.body.name;
    product.price = req.body.price;
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

// Delete a product by ID
exports.deleteProduct = (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  if (index !== -1) {
    products.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};
