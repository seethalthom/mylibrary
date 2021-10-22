const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@seethal.oacel.mongodb.net/Seethal?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({

    author: String,
    title: String,
    genre: String,
    picture: String

});

var Authordata = mongoose.model('Authors', AuthorSchema);
module.exports = Authordata;