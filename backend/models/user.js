// import mongoose module
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
// create user schema (structure )
const userSchema = mongoose.Schema({
    firstName : String ,
    lastName : String,
    email :{ type : String, unique : true},
    pwd : {type : String ,},
    tel : String ,
    role : String ,
    avatar : String ,
});
userSchema.plugin(uniqueValidator);
// AFFECT MODEL NAME TO SCHEMA 
const user = mongoose.model("User", userSchema);
 // export user
 module.exports = user ;