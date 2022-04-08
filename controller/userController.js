const User = require("../models/userModel");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../error-handlers");

const getAllUsers = async (req, res) => {
  console.log(req.user);
  const users = await User.find({ role: "user" }).select("-password");
  res.status(StatusCodes.OK).json({ user });
};
const getSingleUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById({ _id: id }).select("-password");

  if (!user) {
    throw new CustomError.NotFoundError(`No user with id: ${id}`);
  }
  res.status(StatusCodes.OK).json({ user });
  res.send("get single user");
};
const showCurrentUser = async (req, res) => {
  res.send("show current user");
};
const updateUser = async (req, res) => {
  res.send("update user");
};
const updateUserPassword = async (req, res) => {
  res.send("update users password");
};
const deleteUser = async (req, res) => {
  res.send("delete user");
};

module.exports = {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
  deleteUser,
};
