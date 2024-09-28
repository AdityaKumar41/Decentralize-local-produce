const { type } = require("./types");
const { queries } = require("./query");
const { Query } = require("./resolvers");

const UserType = {
  type,
  queries,
  Query,
};

module.exports = UserType;
