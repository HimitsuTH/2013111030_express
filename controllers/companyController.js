exports.index = (req, res, next) => {
  res.json({
    data: [
      {
        id: 01,
        name: "Agoda",
        address: {
          province: "Bangkok",
          postcode: 10011,
        },
      },
      {
        id: 02,
        name: "Google",
        address: {
          province: "USA",
          postcode: 10022,
        },
      },
      {
        id: 03,
        name: "Facebook",
        address: {
          province: "USA",
          postcode: 10033,
        },
      },
    ],
  });
};

exports.create = (req, res, next) => {
  res.send(JSON.stringify(req.data));
};
