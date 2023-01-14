const User = require("../models/user");

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
  const { name, email, password } = req.body;

  let user = new User();

  user.name = name;
  user.email = email;
  user.password = await user.encryptPassword(password);

  

  try {
    await user.save();
    res.status(200).json({
      message: `Hello , ${name} : ${email}`,
    });
  } catch (err) {
    let message;
    if (password.length < 5) {
      message = `Error, Password not match`;
    } else {
      message = `Error, Email has already exist`;
    }
    res.status(400).json({
      message: `${message} : ${err}`,
    });
  }
};
