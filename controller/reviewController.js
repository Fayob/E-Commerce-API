const Review = require("../models/reviewModel");
const Product = require("../models/productModel");

const { StatusCodes } = require("http-status-codes");
const CustomError = require("../error-handlers");
const { checkPermissions } = require("../utils");

const createReview = async (req, res) => {
  const { product: productId } = req.body;

  const isProductValid = await Product.findOne({ _id: productId });

  if (!isProductValid) {
    throw new CustomError.NotFoundError(`No Product with id: ${productId}`);
  }

  const alreadyComment = await Review.findOne({
    product: productId,
    user: req.user.userId,
  });

  if (alreadyComment) {
    throw new CustomError.BadRequestError(
      "You already dropped a comment for this product"
    );
  }

  req.body.user = req.user.userId;
  const review = await Review.create(req.body);
  res.status(StatusCodes.CREATED).json({ review });
};
const getAllReviews = async (req, res) => {
  res.send("get all Reviews");
};
const getSingleReview = async (req, res) => {
  res.send("get single Review");
};
const updateReview = async (req, res) => {
  res.send("update Review");
};
const deleteReview = async (req, res) => {
  res.send("delete Review");
};

module.exports = {
  getAllReviews,
  getSingleReview,
  createReview,
  updateReview,
  deleteReview,
};
