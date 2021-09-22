var express = require("express");
var router = express.Router();
const path = require("path");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/images/:imageId", (req, res) => {
  const { imageId } = req.params;
  res.sendFile(path.join(__dirname, `../public/images/${imageId}.jpg`));
});

router.get("/download/:imageId", (req, res) => {
  const { imageId } = req.params;
  res.download(path.join(__dirname, `../public/images/${imageId}.jpg`));
});
module.exports = router;
