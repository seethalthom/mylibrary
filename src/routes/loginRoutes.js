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
    signinRouter.post('/add', function(req, res) {

        var itemm = {
            username: req.body.username,
            password: req.body.password,
            password2: req.body.password2,
            email: req.body.email,


        };
        console.log(itemm.username);
        console.log(itemm.password);
        console.log(itemm.password2);
        signupdata.findOne({
                username: itemm.username,
                password: itemm.password
            },
            (err, user) => {
                console.log(user)

                const usname = itemm.username;
                const pas = itemm.password;
                console.log(usname)
                if (err) {
                    console.log(err);
                } else
                if (user !== null) {
                    console.log(" user exist");
                    res.redirect('/user');
                } else if (usname == "admin" && pas == '12345admin') {
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