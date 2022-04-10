const createReview = async (req, res) => {
  res.send("create Review");
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
