const Staff = require("../models/staff");

exports.index = async (req, res, next) => {
  let staffs = await Staff.find().sort({ _id: -1 });
  res.status(200).json({
    data: staffs,
  });
};

exports.insert = async (req, res, next) => {
  const { name, salary } = req.body;

  let staff = new Staff({
    name: name,
    salary: salary,
  });
  await staff.save();

  res.status(200).json({
    message: "Insert Successfully",
  });
};

exports.show = async (req, res, next) => {
  try {
    const { id } = req.params;
    // const staff = await Staff.findById(id);
    const staff = await Staff.findOne({
      _id: id,
    });
    if (!staff) {
      throw new Error("user not found");
    } else {
      res.status(200).json({
        data: staff,
      });
    }
  } catch (err) {
    res.status(400).json({
      error: {
        message: [
          {
            err,
            text: "เกิดข้อผิดพลาด: " + err.message,
          },
        ],
      },
    });
  }
};

exports.destroy = async (req, res, next) => {
  try {
    const { id } = req.params;
    // const staff = await Staff.findByIdAndDelete(id);
    const staff = await Staff.deleteOne({
      _id: id,
    });
    // console.log(staff);
    if (staff.deleteCount === 0) {
      throw new Error("Can't delete user");
    } else {
      res.status(200).json({
        message: [
          {
            text: "Delted successfully",
            data: staff,
          },
        ],
      });
    }
  } catch (err) {
    res.status(400).json({
      message: err,
    });
  }
};

exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, salary } = req.body;

    // const staff = await Staff.findById(id);
    // const staff = await Staff.findByIdAndUpdate(id, {
    //   name: name,
    //   salary: salary,
    // });

    const staff = await Staff.updateOne({_id: id},{
        name: name,
        salary: salary
    })

    console.log(staff);

    res.status(200).json({
      message: "Updated Successfully",
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};
