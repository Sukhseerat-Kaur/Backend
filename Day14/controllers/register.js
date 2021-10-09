//Level3: Working with the databse
const User = require("../models/user");
const bcrypt = require("bcrypt");
//https://www.youtube.com/watch?v=ro1WmoP4CZs To undrstand what bcrypt really does

const register = async (req, res) => {
  const { email, password, fullName } = req.body;

  try {
    const emailALreadyExists = await User.findOne({ where: { email } });
    if (emailALreadyExists) {
      res.status(401).send("Email already exists");
    } else {
      const slatRounds = 10;
      const salt = bcrypt.genSaltSync(slatRounds);
      const hash = bcrypt.hashSync(password, salt);

      const newUser = new User({
        email: email.toLowerCase(),
        password: hash,
        fullName,
      });
      const savedUser = await newUser.save();
      res.status(201).send("User Registered " + savedUser); //201 Created. The request has been fulfilled and resulted in a new resource being created
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong"); //The HTTP status code 500 is a generic error response. It means that the server encountered an unexpected condition that prevented it from fulfilling the request. This error is usually returned by the server when no other error code is suitable.
  }
};

module.exports = register;
