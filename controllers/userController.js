const User = require("../models/user");
const { validationResult } = require('express-validator')
exports.index = async (req, res, next) => {
  let user = await User.find().sort({ _id: -1 });
  res.status(200).json({
    data: user,
  });

  // res.json({ fullname: "Chinnawich Ampai" }).status(200);
};

exports.bio = (req, res, next) => {
  res.json({
    fullname: "Chinnawich",
    nickname: "Chin",
    hobby: "game",
    gitusername: "HimitsuTH",
  });
};

exports.register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error("received incorrect information!")
      error.statusCode = 422
      error.validation = errors.array()
      throw error
    }



    let user = new User();
    const existEmail = await User.findOne({ email: email });

    if (existEmail) {
      const error = new Error("Email has alrealy exist!");
      error.statusCode = 400
      throw error
    }
    if(password.length < 5) {
      const error = new Error("Password not match!");
      error.statusCode = 400
      throw error
    }

    user.name = name;
    user.email = email;
    user.password = await user.encryptPassword(password);

    await user.save();

    res.status(200).json({
      message: `Hello , ${name} : ${email}`,
    });
  } catch (err) {
    next(err);
  }
};

exports.login = ({ req, res ,next }) => {
  res.status(200).json({
    message: "Hello, login"
  })
}

