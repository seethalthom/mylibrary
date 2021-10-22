const express = require('express');
const adminrouter = require('./src/routes/adminRoutes');
const port = process.env.PORT || 2021;


const app = new express();



const usernav = [{
        link: '/user/books',
        name: 'Books'
    },
    {
        link: '/user/authors',
        name: 'Authors'
    }, {
        link: '/',
        name: 'Logout'

    }

]
const adminnav = [{
        link: '/admin/books',
        name: 'Books'
    },
    {
        link: '/admin/authors',
        name: 'Authors'
    },
    {
        link: '/admin/addBooks',
        name: 'Add Books'
    },
    {
        link: '/admin/addAuthors',
        name: 'Add Authors'
    }, {
        link: '/',
        name: 'Logout'

    }

]
const nav2 = [{
        link: '/',
        name: 'Home'

    }, {
        link: '/signin',
        name: 'Sign In'

    },
    {
        link: '/signup',
        name: 'Sign Up'

    }
]

const nav3 = [{
    link: '/',
    name: 'Logout'

}]



const nav5 = [{
        link: '/',
        name: 'Home'
    }]
    // const booksRouter = require('./src/routes/bookRoutes')(nav1, nav3);
    // const authorsRouter = require('./src/routes/authorRoutes')(nav1, nav3);
const signinRouter = require('./src/routes/loginRoutes')(nav5);
const signupRouter = require('./src/routes/signupRoutes')(nav5);
// const addbooksRouter = require('./src/routes/addbooksRoutes')(nav1, nav3);
// const addauthorsRouter = require('./src/routes/addauthorsRoutes')(nav1, nav3);
const adminRouter = require('./src/routes/adminRoutes')(adminnav);
const userRouter = require('./src/routes/userRoutes')(usernav);

app.use(express.urlencoded({ extended: true }));
// app.use(express.static('./uploads'));
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', './src/views');


// app.use('/books', booksRouter);
// app.use('/authors', authorsRouter);
app.use('/signin', signinRouter);
app.use('/signup', signupRouter);
// app.use('/addbooks', addbooksRouter);
// app.use('/addauthors', addauthorsRouter);
app.use('/admin', adminRouter);
app.use('/user', userRouter);



app.get("/", function(req, res) {
    res.render("index", {
        nav2,

        title: 'Library'
    });


});




app.listen(port, () => {
    console.log("Server ready at" + port)
});