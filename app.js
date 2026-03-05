const express = require("express");
const notFoundMiddleware = require("./middlewares/notFoundMiddleware");
const postsRouter = require("./routers/posts");
const app = express();
const port = 3000;
const appURL = `http://localhost:${port}`;

// Middleware assets statici
app.use(express.static("public"));
// Middleware body-parser
app.use(express.json());

// Routers
app.use("/posts", postsRouter);

// Error middlewares
app.use(notFoundMiddleware);

// Avvio server
app.listen(port, () => {
  console.log(`App.js is listening on ${appURL}`);
});
