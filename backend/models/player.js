// import mongoose module
const mongoose = require("mongoose");
// create player schema (structure )
const playerSchema = mongoose.Schema({
   position : String ,
   name  : String,
   age : String,
   team: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Team'
      },
      
});

// AFFECT MODEL NAME TO SCHEMA 
const player = mongoose.model("player", playerSchema);
 // export player
 module.exports = player ;
