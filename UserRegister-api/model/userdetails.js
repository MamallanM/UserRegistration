const mongoose = require("mongoose");

var UserDetails = mongoose.model('UserInfo', {
    firstName: { type: String },
    lastName: { type: String },
    password: { type: String },
    dob: { type: String },
    email:{type:String},
    profileImage:{type: String}
});

module.exports = { UserDetails };