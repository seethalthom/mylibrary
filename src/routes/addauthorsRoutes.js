const express = require('express');
const addauthorsRouter = express.Router();
const authordata = require('../model/authordata')

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


function addauthorRouter(nav1, nav3) {

    addauthorsRouter.get('/', function(req, res) {

        res.render('addauthors', {
            nav1,
            nav3,
            title: 'Library',


        })

    })
    addauthorsRouter.post('/add', upload, function(req, res) {
        var item = {
            author: req.body.author,
            title: req.body.title,
            genre: req.body.genre,
            picture: req.file.filename

        }
        var author = authordata(item);
        author.save();
        res.redirect('/authors')

    });
    return addauthorsRouter;
}

module.exports = addauthorRouter;