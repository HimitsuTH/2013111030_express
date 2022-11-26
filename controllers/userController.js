exports.index = (req, res, next) => {
  res.json({ fullname: "Chinnawich Ampai" }).status(200);
};

exports.bio = (req, res, next) => {
  res.json({
    fullname: "Chinnawich",
    nickname: "Chin",
    hobby: "game",
    gitusername: "HimitsuTH",
  });
};

//---- test----
// router.get("/user/:id", (req, res, next) => {
//   res.send(`id: ${req.params.id}`);
// });

// router.get("/qurey", (req, res, next) => {
//   res.json({a: req.query.a , b:req.query.b})
// });

// router.get("/redirect", (req, res) => {
//   res.redirect(
//     "https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjN_dP4-8r7AhUcTmwGHbXhBcMQPAgI"
//   );
// });
