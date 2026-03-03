const express = require("express");
const postsRouter = require("./routers/posts");
const app = express();
const port = 3000;
const appURL = `http://localhost:${port}`;

// Middleware assets statici
app.use(express.static("public"));

// Routers
app.use("/posts", postsRouter);

// Avvio server
app.listen(port, () => {
  console.log(`App.js is listening on ${appURL}`);
});
