const createProduct = async (req, res) => {
  res.send("create product");
};
const getAllProduct = async (req, res) => {
  res.send("get all product");
};
const getSingleProduct = async (req, res) => {
  res.send("get single product");
};
const UpdateProduct = async (req, res) => {
  res.send("update product");
};
const deleteProduct = async (req, res) => {
  res.send("delete product");
};
const uploadImage = async (req, res) => {
  res.send("Upload product image");
};

module.exports = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  UpdateProduct,
  deleteProduct,
  uploadImage,
};