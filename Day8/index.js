const express = require("express");
const app = express();
PORT = 5000;
//Middleware is a function that is going to run between the time the server gets a request and the time the server gives the response out to the client

function logger(req, res, next) {
  console.log("log");
  next();
}

app.use(logger);

function auth(req, res, next) {
  if (req.query.admin === "true") {
    req.admin = true; //sending info from middleware to the next middleware
    next();
  } else {
    res.send("This page is only for admins. Get out of here");
  }
}

//As the middlewares get executed in order, therefore, we can have a nice trick as if we want any middleware to be executed AFTER every request then...
function executeAfter(req, res, next) {
  next();
  console.log("executing after");
}

app.use(executeAfter);
app.get("/", (req, res) => {
  console.log(req.admin);
  res.send("Home page");
});

app.get("/user", auth, (req, res) => {
  res.send("Hey admin");
});

app.listen(PORT, () => console.log(`Server listening at port ${PORT}`));
