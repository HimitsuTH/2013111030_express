const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const shopSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    photo: { type: String, default: "nopic.png" },
    location: {
      lat: Number,
      lgn: Number,
    },
    // createdAt: { type: Date, default: Date.now },
    // updatedAt: { type: Date, default: Date.now },
  },
  {
    toJSON: { virtuals: true },
    timestamps: true,
    collection: "shops",
  }
);

const shop = mongoose.model("shop", shopSchema);

shopSchema.virtual('menus', {
  ref: 'Menu',
  localField: '_id',
  foreignField: 'shop',

})

module.exports = shop;
