const express = require('express');
const userRouter = express.Router();
const bookdata = require('../model/bookdata')

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

function userrouter(usernav) {

    userRouter.get('/', function(req, res) {

        res.render('user', {
            usernav,

            title: 'Library',


        })

    })
    userRouter.get('/books', function(req, res) {
        bookdata.find()
            .then(function(books) {
                res.render("userbooks", {
                    usernav,
                    title: 'Library',
                    books
                })

            })


    });
    userRouter.get('/books/:id', function(req, res) {
        const id = req.params.id;

        bookdata.findOne({ _id: id })
            .then(function(book) {
                res.render('book', {
                    usernav,
                    title: 'Library',
                    book

                })

            })


    })
    userRouter.get('/authors', function(req, res) {
        authordata.find()
            .then(function(authors) {
                res.render("userauthors", {
                    usernav,
                    title: 'Library',
                    authors
                })

            })


    });
    userRouter.get('/authors/:id', function(req, res) {
        const id = req.params.id;

        authordata.findOne({ _id: id })
            .then(function(author) {
                res.render('author', {
                    usernav,
                    title: 'Library',
                    author

                })

            })


    })

    return userRouter;
}

module.exports = userrouter;