const express = require("express");
const cors = require("cors");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const UserType = require("../graphql/product");

async function startApolloServer() {
  const app = express();
  app.use(express.json());
  app.use(cors());

  const server = new ApolloServer({
    typeDefs: `
    ${UserType.type}
      type Query {
        ${UserType.queries}
      }
    `,
    resolvers: {
      Query: {
        ...UserType.Query,
      },
    },
  });

  await server.start();
  app.use("/graphql", expressMiddleware(server));

  return app;
}

module.exports = { startApolloServer };
