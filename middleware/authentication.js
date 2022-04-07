const CustomError = require("../error-handlers");
const { isTokenValid } = require("../utils");

const authenticateUser = async (req, res) => {
  const token = req.signedCookies.token;

  if (!token) {
    console.log("error is present");
  } else {
    console.log("no error present");
  }
  next();
};

module.exports = { authenticateUser };
