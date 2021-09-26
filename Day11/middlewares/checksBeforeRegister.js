const emailValidate = require("../utils/emailValidate");
const passwordValidate = require("../utils/passwordValidate");

const checksBeforeRegister = (req, res, next) => {
  const { email, password, confirmPassword } = req.body;
  if (
    typeof email === "string" &&
    typeof password === "string" &&
    typeof confirmPassword === "string" &&
    // email.length > 0 && //This is already being checked by the emailValidate function ka regex. We dont need it here.
    // password.length > 0 &&
    confirmPassword == password &&
    emailValidate(email) &&
    passwordValidate(password)
  ) {
    next();
  } else {
    res.status(401).send("Initial checks failed"); //The HTTP 401 Unauthorized client error status response code indicates that the request has not been applied because it lacks valid authentication credentials for the target resource
    // a 401 Unauthorized response should be used for missing or bad authentication, and a 403 Forbidden response should be used afterwards, when the user is authenticated but isn't authorized to perform the requested operation on the given resource.
  }
  // console.log(typeof email);
  // console.log(typeof password);
  // console.log(password == confirmPassword);
  // console.log(emailValidate(email));
  // console.log(passwordValidate(password));
  // next();
};

module.exports = checksBeforeRegister;
