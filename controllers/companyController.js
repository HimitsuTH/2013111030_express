const Companys = require('../models/company')
const Settings = require('../models/setting')


exports.index = async (req, res, next) => {
  const settings = await Settings.findOne();

  res.status(200).json({
    data: settings,
  })
  // res.json({
  //   data: [
  //     {
  //       id: 01,
  //       name: "Dentsu",
  //       address: {
  //         province: "Bangkok",
  //         postcode: 10500,
  //       },
  //     },
  //     {
  //       id: 02,
  //       name: "Sony",
  //       address: {
  //         province: "Bangkok",
  //         postcode: 10110,
  //       },
  //     },
  //     {
  //       id: 03,
  //       name: "seven peaks software co. ltd.",
  //       address: {
  //         province: "Bangkok",
  //         postcode: 10110,
  //       },
  //     },
  //   ],
  // });
};

exports.create = (req, res, next) => {
  res.send(JSON.stringify(req.data));
};
