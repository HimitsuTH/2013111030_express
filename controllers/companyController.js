const Companys = require("../models/company");
const Settings = require("../models/setting");

exports.index = async (req, res, next) => {
  const companys = await Companys.find().sort({ _id: -1 });

  res.status(200).json({
    data: companys,
  });
};

exports.insert = async (req, res, next) => {
  const { name, address } = req.body;

  let company = new Companys({
    name: name,
    address: address,
  });

  await company.save();

  res.status(200).json({
    message: "Insert Successfully",
  });
};

exports.show = async (req, res, next) => {
  try {
    const { id } = req.params;
    const company = await Companys.findById(id);

    if (!company) {
      const error = new Error("Company id: not found!");
      error.statusCode = 400;
      throw error;
    }

    res.json({
      data: company,
    });
  } catch (err) {
    next(err);
  }
};

exports.destroy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const company = await Companys.deleteOne({
      _id: id,
    });
    console.log(company);
    if (company.deletedCount === 0) {
      const error = new Error("Can't delete Company");
      error.statusCode = 400;
      throw error;
    }
    res.status(200).json({
      message: "deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, address } = req.body;

    const company = await Companys.findByIdAndUpdate(id, {
      name: name,
      address: {
        province: address.province,
      },
    });

    if (!company) {
      const error =  new Error("Company not founded");
      error.statusCode = 400
      throw error
    }
    res.status(200).json({
      message: "Updated Successfully",
    });
  } catch (err) {
    next(err);
  }
};

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
