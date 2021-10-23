const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@seethal.oacel.mongodb.net/Seethal?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const SignupSchema = new Schema({
    username: String,
    password: String,
    password2: String,
    email: String,


});

var Signupdata = mongoose.model('Signup', SignupSchema);
module.exports = Signupdata;