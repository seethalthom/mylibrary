const express = require('express');
const adminRouter = express.Router();
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

function adminrouter(adminnav) {

    adminRouter.get('/', function(req, res) {

        res.render('admin', {
            adminnav,

            title: 'Library',


        })

    })

    adminRouter.get('/books', function(req, res) {

        bookdata.find()
            .then(function(books) {
                res.render('books', {
                    adminnav,
                    title: 'Library',
                    books
                })

            })

    })

    adminRouter.get('/books/:id', function(req, res) {
        const id = req.params.id;

        bookdata.findOne({ _id: id })
            .then(function(book) {
                res.render('updatebook', {
                    adminnav,
                    title: 'Library',
                    book

                })

            })


    })

    adminRouter.get('/books/:id/delete', function(req, res, next) {
        const id = req.params.id;
        console.log(id)
            // res.send('Hi')

        bookdata.findByIdAndRemove(id)
            .then(function() {
                res.redirect('/admin/books')

            })


    })

    adminRouter.get('/books/:id/edit', function(req, res, book) {

        const id = req.params.id;

        bookdata.findOne({ _id: id })
            .then(function(book) {
                res.render('editbooks', {
                    adminnav,
                    title: 'Library',
                    book

                })

            })

    })

    adminRouter.post('/books/:id/edit/update', upload, function(req, res) {
        const id = req.params.id;
        var item = {
            author: req.body.author,
            title: req.body.title,
            genre: req.body.genre,
            picture: req.file.filename

        }


        bookdata.findByIdAndUpdate({ "_id": id }, item)
            .then(function() {
                res.redirect('/admin/books')

            })

    })



    adminRouter.get('/authors/:id/delete', function(req, res, next) {
        const id = req.params.id;
        console.log(id)
            // res.send('Hi')

        authordata.findByIdAndRemove(id)
            .then(function() {
                res.redirect('/admin/authors')

            })


    })
    adminRouter.get('/addBooks', function(req, res) {

        res.render('addbooks', {
            adminnav,
            title: 'Library',


        })

    })
    adminRouter.post('/addBooks/add', upload, function(req, res) {
        console.log('inside add')
        var item = {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            picture: req.file.filename

        }
        var book = bookdata(item);
        book.save();
        res.redirect('/admin/books')

    });
    adminRouter.get('/authors', function(req, res) {
        authordata.find()
            .then(function(authors) {
                res.render("authors", {
                    adminnav,
                    title: 'Library',
                    authors
                })

            })


    });
    adminRouter.get('/authors/:id', function(req, res) {
        const id = req.params.id;
        authordata.findOne({ _id: id })
            .then(function(author) {
                res.render('updateauthor', {
                    adminnav,
                    title: 'Library',
                    author

                })

            })
    })
    adminRouter.get('/addAuthors', function(req, res) {

        res.render('addauthors', {
            adminnav,
            title: 'Library',


        })

    })
    adminRouter.post('/addAuthors/add', upload, function(req, res) {
        var item = {
            author: req.body.author,
            title: req.body.title,
            genre: req.body.genre,
            picture: req.file.filename

        }
        var author = authordata(item);
        author.save();
        res.redirect('/admin/authors')

    });

    adminRouter.get('/authors/:id/edit', function(req, res, author) {

        const id = req.params.id;

        authordata.findOne({ _id: id })
            .then(function(author) {
                res.render('editauthors', {
                    adminnav,
                    title: 'Library',
                    author

                })

            })

    })

    adminRouter.post('/authors/:id/edit/update', upload, function(req, res) {
        const id = req.params.id;
        var item = {
            author: req.body.author,
            title: req.body.title,
            genre: req.body.genre,
            picture: req.file.filename

        }


        authordata.findByIdAndUpdate({ "_id": id }, item)
            .then(function() {
                res.redirect('/admin/authors')

            })

    })
    return adminRouter;
}

module.exports = adminrouter;