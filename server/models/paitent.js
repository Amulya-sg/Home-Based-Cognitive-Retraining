const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    name: String,
    data : Buffer,
});

const paitentSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    Address:String,
    DateOfBirth:String,
    Gender:String,
    otp:String,
    Education:String,
    colorMemoscore : String,
    files:[fileSchema],
    autism: String,

});

const PaitentModel = mongoose.model("Paitent", paitentSchema);

module.exports = PaitentModel;