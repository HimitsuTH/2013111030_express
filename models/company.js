const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema({
  name: {type: String, trim: true},
  address: {
    province: {type: String},
  },
  created: { type: Date, default: Date.now },
},{
    collection: 'companys',
    versionKey: false,
});



const company = mongoose.model('Company', companySchema);

module.exports = company; 

