const express = require('express');
const signinRouter = express.Router();

const signupdata = require('../model/signupdata')

function signinrouter(nav5) {

    signinRouter.get('/', function(req, res) {

        res.render('signin', {
            nav5,
            title: 'Library',


        })

    })
    signinRouter.get('/admlogin', function(req, res) {

        res.render('adminlogin', {
            nav5,
            title: 'Library',


        })

    })
    signinRouter.post('/login', function(req, res) {

        var item = {
            username: req.body.username,
            password1: req.body.password1,
            password2: req.body.password2,
            email: req.body.email,


        };

        signupdata.findOne({
                username: item.username,
                password1: item.password1
            },
            (err, user) => {
                if (err) {
                    console.log(err);
                } else if (user !== null) {
                    console.log(" user exist");
                    res.redirect('/user');
                } else if (item.username === "admin " && item.password1 === '12345') {
                    res.redirect('/admin');
                } else if (user === null) {
                    console.log('user doesnt exist')
                    res.redirect('/signup');
                } else {
                    res.send('Inavlidusername and password')

                }


            })




    })


    return signinRouter;
}

module.exports = signinrouter;