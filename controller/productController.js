const Product = require("../models/productModel");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../error-handlers");
const path = require("path");

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

  const product = await Product.findOne({ _id: productId }).populate("reviews");

  if (!product) {
    throw new CustomError.NotFoundError(`No Product with id: ${productId}`);
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
    throw new CustomError.NotFoundError(`No Product with id: ${productId}`);
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
  if (!req.files) {
    throw new CustomError.BadRequestError("No file Uploaded");
  }

  const productImage = req.files.image;

  if (!productImage.mimetype.startsWith("image")) {
    throw new CustomError.BadRequestError("Please Upload an Image");
  }

  const maxSize = 1024 * 1024;

  if (!productImage.size > maxSize) {
    throw new CustomError.BadRequestError(
      "Please Upload Image smaller than 1MB"
    );
  }

  const imagePath = path.join(
    __dirname,
    "..public/upload/" + `${productImage.name}`
  );
  await productImage.mv(imagePath);

  res.status(StatusCodes.OK).json({ image: `/upload/${productImage.name}` });
};

module.exports = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  UpdateProduct,
  deleteProduct,
  uploadImage,
};
