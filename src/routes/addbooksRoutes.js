const express = require('express');
const addbooksRouter = express.Router();
const bookdata = require('../model/bookdata')

// set up multer for storing uploaded files

var multer = require('multer');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + "_" +
            file.originalname);
    }
});

var upload = multer({ storage: storage }).single("picture");



function addbookrouter(nav1, nav3) {

    addbooksRouter.get('/', function(req, res) {

        res.render('addbooks', {
            nav1,
            nav3,
            title: 'Library',


        })

    })
    addbooksRouter.post('/add', upload, function(req, res) {
        console.log('inside add')
        var item = {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            picture: req.file.filename

        }
        var book = bookdata(item);
        book.save();
        res.redirect('/books')

    });
    return addbooksRouter;
}



module.exports = addbookrouter;