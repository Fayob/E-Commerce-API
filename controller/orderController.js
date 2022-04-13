const createOrder = async (req, res) => {
  res.send("Create Order");
};

const getAllOrders = async (req, res) => {
  res.send("get all Order");
};

const getSingleOrder = async (req, res) => {
  res.send("get single Order");
};

const getCurrentUserOrder = async (req, res) => {
  res.send("get current user Order");
};

const updateOrder = async (req, res) => {
  res.send("update Order");
};

module.exports = {
  createOrder,
  getAllOrders,
  getSingleOrder,
  getCurrentUserOrder,
  updateOrder,
};
