const express = require('express');
const authorsRouter = express.Router();
const authordata = require('../model/authordata');

function authrouter(nav1, nav3) {
    // var authors = [{
    //     title: 'Tom and Jerry',
    //     author: 'Joseph Barbera',
    //     genre: 'Cartoon',
    //     img: 'joseph.jpg'

    // }, {
    //     title: 'Harry Potter',
    //     author: 'J K Rowling',
    //     genre: 'Fantasy',
    //     img: 'rowling.jpg'

    // }, {
    //     title: 'Pathumede aadu',
    //     author: 'Basheer',
    //     genre: 'Drama',
    //     img: 'basheer.jpg'

    // }]

    authorsRouter.get('/', function(req, res) {
        authordata.find()
            .then(function(authors) {
                res.render("authors", {
                    nav1,
                    nav3,
                    title: 'Library',
                    authors
                })

            })


    });
    authorsRouter.get('/:id', function(req, res) {
        const id = req.params.id;
        authordata.findOne({ _id: id })
            .then(function(author) {
                res.render('updateauthor', {
                    nav1,
                    title: 'Library',
                    author

                })

            })
    })
    return authorsRouter;
}

module.exports = authrouter;