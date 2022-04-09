const Product = require("../models/productModel");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../error-handlers");

const createProduct = async (req, res) => {
  req.body.user = req.user.userId;
  const product = await Product.create(req.body);
  res.status(StatusCodes.CREATED).json({ product });
};
const getAllProduct = async (req, res) => {
  const products = await Product.find({});
  res.status(StatusCodes.OK).json({ products, count: products.length });
};
const getSingleProduct = async (req, res) => {
  const { id: productId } = req.params;

  const product = await Product.findOne({ _id: productId });

  if (!product) {
    throw new CustomError.NotFoundError(`Not Product with id: ${productId}`);
  }
  res.status(StatusCodes.OK).json({ product });
};
const UpdateProduct = async (req, res) => {
  const { id: productId } = req.params;

  const product = await Product.findOneAndUpdate({ _id: productId }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!product) {
    throw new CustomError.NotFoundError(`Not Product with id: ${productId}`);
  }

  res.status(StatusCodes.OK).json({ product });
};
const deleteProduct = async (req, res) => {
  const { id: productId } = req.params;

  const product = await Product.findOne({ _id: productId });

  if (!product) {
    throw new CustomError.NotFoundError(`Not Product with id: ${productId}`);
  }

  await product.remove();

  res.status(StatusCodes.OK).json({ msg: "delete successful" });
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
