const { startApolloServer } = require("./app");
async function startServer() {
  const app = await startApolloServer();
  app.listen(8000, () => {
    console.log("Server is running on http://localhost:8000");
  });
}

startServer();
