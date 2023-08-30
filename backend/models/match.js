// import mongoose module
const mongoose = require("mongoose");
// create match schema (structure )
const matchSchema = mongoose.Schema({
    scoreOne : Number ,
    scoreTwo : Number,
    teamOne : String,
    teamTwo : String,
});

// AFFECT MODEL NAME TO SCHEMA 
const match = mongoose.model("Match", matchSchema);
 // export match
 module.exports = match ;
