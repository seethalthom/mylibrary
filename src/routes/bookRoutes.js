const express = require('express');
const booksRouter = express.Router();
const bookdata = require('../model/bookdata')

function router(nav1, nav3) {
    // var books = [{
    //     title: 'Tom and Jerry',
    //     author: 'Joseph Barbera',
    //     genre: 'Cartoon',
    //     img: 'tom.jpg'

    // }, {
    //     title: 'Harry Potter',
    //     author: 'J K Rowling',
    //     genre: 'Fantasy',
    //     img: 'harry.jpg'

    // }, {
    //     title: 'Paathumede Aadu',
    //     author: 'Basheer',
    //     genre: 'Drama',
    //     img: 'basheer.jpg'

    // }]

    booksRouter.get('/', function(req, res) {
        bookdata.find()
            .then(function(books) {
                res.render("books", {
                    nav1,
                    nav3,
                    title: 'Library',
                    books
                })

            })


    });
    booksRouter.get('/:id', function(req, res) {
        const id = req.params.id;

        bookdata.findOne({ _id: id })
            .then(function(book) {
                res.render('updatebook', {
                    nav1,
                    title: 'Library',
                    book

                })

            })


    })
    booksRouter.get('/:id/delete', function(req, res, next) {
        const id = req.params.id;
        console.log(id)
            // res.send('Hi')

        bookdata.findByIdAndRemove(id)
            .then(function(books) {
                res.redirect('/books')
                    // res.render('books', {
                    //     nav1,
                    //     nav3,

                //     title: 'Library',
                //     books


                // })

            })


    })

    return booksRouter;
}

module.exports = router;