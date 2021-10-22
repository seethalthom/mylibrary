const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@seethal.oacel.mongodb.net/Seethal?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const SignupSchema = new Schema({
    username: String,
    password1: String,
    password2: String,
    email: String,


});

var Signupdata = mongoose.model('Signin', SignupSchema);
module.exports = Signupdata;