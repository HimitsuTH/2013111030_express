const Shop = require("../models/shop");
const Menu = require("../models/menu");
const config = require('../config/index')

exports.index = async (req, res, next) => {
  const shops = await Shop.find()
    .select("name photo location")
    .sort({ _id: -1 });

  const shopWithPhotoDomain = await shops.map((shop, index) => {
    return {
      _id: shop._id,
      name: shop.name,
      photo: `${config.DOMAIN}/images/${shop.photo}`,
      location: shop.location,
    };
  });

  res.status(200).json({
    data: shopWithPhotoDomain,
  });
};

exports.menu = async (req, res, next) => {
  const menus = await Menu.find().populate('shop')
  // .select('name price')
  // .where('price').gt(200);

  res.status(200).json({
    data: menus,
  });
};



exports.show = async (req, res, next) => {
  try {
    const { id } = req.params;
    const shop = await Shop.findById(id).populate('menus')

    

    res.status(200).json({
      data: shop,
    });
  } catch (err) {
    res.status(400).json({
      message: err,
    });
  }
};