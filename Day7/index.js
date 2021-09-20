const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Landing Page");
});

app.get("/json", (req, res) => {
  res.json({ a: 1 });
});

app.get("/status", (req, res) => {
  res.status(200);
  res.send("Status 200 OK");
});

app.get("/query", (req, res) => {
  res.send(req.query);
});

app.get("/ab?cd", (req, res) => {
  res.send("b is optional");
});

app.get("/ab+cd", (req, res) => {
  res.send("For multiple b's");
});

app.get("/a*cd", (req, res) => {
  res.send("For a(anything)cd");
});

app.get("/team/:memberId", (req, res) => {
  const member = req.params;
  if (member.memberId > 0 && member.memberId <= 10)
    res.send("Registered member");
  else res.send("Member not registered");
});

app.listen(PORT, () => console.log(`Server listening at port ${PORT}`));
