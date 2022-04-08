const CustomError = require("../error-handlers");
const { isTokenValid } = require("../utils");

const authenticateUser = async (req, res, next) => {
  const token = req.signedCookies.token;

  if (!token) {
    throw new CustomError.UnauthenticatedError("Authentication Invalid");
  }

  try {
    const { name, userId, role } = isTokenValid({ token });
    req.user = { name, userId, role };
    next();
  } catch (error) {
    throw new CustomError.UnauthenticatedError("Authentication Invalid");
  }
};

const authorizePermission = (req, res, next) => {
  if (req.user.role !== "admin") {
    throw new CustomError.UnauthorizedError(
      "Unauthorized to access this route"
    );
  }
  next();
};

module.exports = { authenticateUser, authorizePermission };
