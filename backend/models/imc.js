// import mongoose module
const mongoose = require("mongoose");
// create imc schema (structure )
const imcSchema = mongoose.Schema({
    taille : Number ,
    poids : Number,
    name : String,
    imc : Number ,
});
// AFFECT MODEL NAME TO SCHEMA 
const imc = mongoose.model("Imc", imcSchema);
 // export imc
 module.exports = imc ;