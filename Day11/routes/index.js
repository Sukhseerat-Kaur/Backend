var express = require("express");
var router = express.Router();
var checksBeforeRegister = require("../middlewares/checksBeforeRegister");
var register = require("../controllers/register");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

/**
 * @requires {firstName, email, password, confirmPassword} from req.body
 *
 * LEVEL1: Performed by the "checksBeforeRegister" middleware
 * email validation
 * password validation
 * password === confirmPassword
 * *****************************
 * LEVEL2:
 * JS/SQL injection
 * *****************************
 * LEVEL3: Performed by the "register" controller
 * Check if email already exists
 * If not, then for storing this email, hash the password (for encrypting the password)
 * convert email to all lowercase just so that if Sukhseerat@gmail.com is there, then it gets converted to sukhseerat@gmail.com
 * and save the new user into the database
 *
 * This level3 is our actual logic, which deals with connectivity eith the database too. So whenever we write the actual logic, we make that file in the controllers folder
 *We will be using Sequelize for connecting with the database (in app.js)
 *
 * We will be making different middlewares for these subtasks, so that if at one middleware only, the checks fail, then it doesnt go to the next steps, haults there only.
 */
router.post("/register", checksBeforeRegister, register);

module.exports = router;
