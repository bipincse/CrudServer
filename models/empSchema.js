const mongoose = require("mongoose");

const empSchema = mongoose.Schema({
    name: {
    type: String,
  },
  
  email: {
    type: String,
    // required: true,
    // unique: true,
  },
  mobile: {
    type: Number,
     },
  address: {
    type: String,
  },

    role: {
    type: String,
  },
  
 
});


const Employee = mongoose.model("employee", empSchema);

module.exports = Employee;
