const Staff = require("../models/staff");
const config = require("../config/index");

const fs = require("fs");
const path = require("path");
const uuidv4 = require("uuid");
const { promisify } = require("util");
const writeFileAsync = promisify(fs.writeFile);

exports.index = async (req, res, next) => {
  let staffs = await Staff.find().sort({ _id: -1 });
  res.status(200).json({
    data: staffs,
  });
};

exports.insert = async (req, res, next) => {
  const { name, salary, photo } = req.body;

  try {
    let _ph;
    if (!photo) {
      _ph = `nopic.png`;
    } else {
      _ph = await saveImageToDisk(photo);
    }

    let staff = new Staff({
      name: name,
      salary: salary,
      photo: `${config.DOMAIN}/images/${_ph}`,
      // photo:  await saveImageToDisk(photo)
    });
    await staff.save();
  } catch (err) {
    console.log(err);
  }

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
      const error = new Error("User not found!");
      error.statusCode = 400;
      throw error;
    }

    res.status(200).json({
      data: staff,
    });
  } catch (err) {
    next(err);
  }
};

exports.destroy = async (req, res, next) => {
  try {
    const { id } = req.params;
    // const staff = await Staff.findByIdAndDelete(id);
    const staff = await Staff.deleteOne({
      _id: id,
    });
    console.log(staff);

    if (staff.deletedCount === 0) {
      const error = new Error("User not found!");
      error.statusCode = 400;
      throw error;
    }
    res.status(200).json({
      message: [
        {
          text: "Delted successfully",
          data: staff,
        },
      ],
    });
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, salary } = req.body;

    const staff_id = await Staff.findById(id);
    // const staff = await Staff.findByIdAndUpdate(id, {
    //   name: name,
    //   salary: salary,
    // });
    

    const staff = await Staff.updateOne(
      { _id: id },
      {
        name: name,
        salary: salary,
      }
    );
    // if (staff.n === 0) {
    //   const error = new Error("Update failed!");
    //   error.statusCode = 400;
    //   throw error;
    // }

    if(!staff_id) {
      const error = new Error("Update failed!");
      error.statusCode = 400;
      throw error;
    }


    res.status(200).json({
      message: "Updated Successfully",
    });
  } catch (err) {
    next(err);
  }
};

async function saveImageToDisk(baseImage) {
  //หา path จริงของโปรเจค
  const projectPath = path.resolve("./");
  //โฟลเดอร์และ path ของการอัปโหลด
  const uploadPath = `${projectPath}/public/images/`;

  //หานามสกุลไฟล์
  const ext = baseImage.substring(
    baseImage.indexOf("/") + 1,
    baseImage.indexOf(";base64")
  );

  //สุ่มชื่อไฟล์ใหม่ พร้อมนามสกุล
  let filename = "";
  if (ext === "svg+xml") {
    filename = `${uuidv4.v4()}.svg`;
  } else {
    filename = `${uuidv4.v4()}.${ext}`;
  }

  //Extract base64 data ออกมา
  let image = decodeBase64Image(baseImage);

  //เขียนไฟล์ไปไว้ที่ path
  await writeFileAsync(uploadPath + filename, image.data, "base64");
  //return ชื่อไฟล์ใหม่ออกไป
  return filename;
}

function decodeBase64Image(base64Str) {
  var matches = base64Str.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);

  var image = {};
  if (!matches || matches.length !== 3) {
    throw new Error("Invalid base64 string");
  }

  image.type = matches[1];
  image.data = matches[2];

  return image;
}
