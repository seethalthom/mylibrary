const express = require('express');
const signupRouter = express.Router();
const signupdata = require('../model/signupdata')


function signuprouter(nav5) {

    signupRouter.get('/', function(req, res) {

        res.render('signup', {
            nav5,
            title: 'Library',


        })

    })
    signupRouter.post('/add', function(req, res) {
        var item = {
            username: req.body.username,
            password: req.body.password,
            password2: req.body.password2,
            email: req.body.email,

        }
        console.log(item.username);
        console.log(item.password);
        console.log(item.password2);
        signupdata.findOne({
            username: item.username
        }, function(err, user) {
            if (user !== null) {
                console.log("Username is not available.Try another")
                res.send('Username is not available.Try another')
                    // alert("Username is not available.Try another")

            } else {
                var signup = signupdata(item);
                signup.save();
                res.redirect('/signin')
            }


        })


    });


    return signupRouter;
}

module.exports = signuprouter;