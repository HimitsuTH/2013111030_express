const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({
    data: [
      {
        id: 01,
        name: "TNI1",
        address: {
          province: "Bangkok1",
          postcode: 10011,
        },
      },
      {
        id: 02,
        name: "TNI2",
        address: {
          province: "Bangkok2",
          postcode: 10022,
        },
      },
      {
        id: 03,
        name: "TNI",
        address: {
          province: "Bangkok3",
          postcode: 10033,
        },
      },
    ],
  });
});

module.exports = router;
