const express = require("express");
const app = express();
PORT = 5000;
//Middleware is a function that is going to run between the time the server gets a request and the time the server gives the response out to the client

function logger(req, res, next) {
  console.log("log");
  next();
}

app.use(logger);
app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/users", (req, res) => {
  res.send("Users page");
});
app.listen(PORT, () => console.log(`Server listening at port ${PORT}`));
