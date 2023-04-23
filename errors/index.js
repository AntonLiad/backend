const NotFoundError = require("./NotFoundError");
const BadRequestError = require("./BadRequestError");
const UnauthorizedError = require("./UnauthorizedError");
const ConflictError = require("./ConflictError");
const ForbiddenError = require("./ForbiddenError");

const errorList = {
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
  ConflictError,
  ForbiddenError,
};

module.exports = errorList;
