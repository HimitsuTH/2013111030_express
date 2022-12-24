const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shopSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    photot: { type: String , default: 'nopic.png'},
    location: {
        lat: Number,
        lgn: Number,
    },
    // createdAt: { type: Date, default: Date.now },
    // updatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
    collection: "shops",
  }
);

const shop = mongoose.model("shop", shopSchema);

module.exports = shop
