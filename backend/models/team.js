// import mongoose module
const mongoose = require("mongoose");
// create team schema (structure )
const teamSchema = mongoose.Schema({
    name  : String,
    stadium : String,
    owner : String ,
    players: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player'
        }],
        
});

// AFFECT MODEL NAME TO SCHEMA 
const team = mongoose.model("team", teamSchema);
 // export team
 module.exports = team ;
