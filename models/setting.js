const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema({
  name: String,
  address: {
    province: String,
  },
},{
    collection: 'setting',
});

const setting = mongoose.model('company', companySchema);

module.exports = setting; 