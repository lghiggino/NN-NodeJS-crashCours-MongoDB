const express = require("express");
//morgan - middleware logger
const morgan = require("morgan");
//mongoose - mongoDB facilitator
const mongoose = require("mongoose");
//Import the blog model created on blog.js
const Blog = require("./models/blog");
// Import the secret dbURI
const secret = require("./secrets/secret");

//express app
const app = express();

//connecting to mongoDB
const dbURI = secret;
//const dbURI = secret
mongoose.connect(dbURI , { useNewUrlParser: true, useUnifiedTopology: true})
    //then listen for requests only after the connection between the DB is complete
    .then( (result) => app.listen(3000))
    .catch( (error) => { console.log(error)})

//register the view engine
app.set("view engine", "ejs");
app.set("views", "views");


//responding the get requests - vanilla express here
// app.get("/", (req, res) => {
//     //express response send method - auto setHeader and statusCode
//     res.sendFile("./views/index.html", {root: __dirname});
// })

// app.get("/about", (req, res) => {
//     res.sendFile("./views/about.html", {root: __dirname});
// })
//     //sending directhtml - res.send("<p> home page </p> <a href='/about'>about</a>")
    
// //redirects
// app.get("aboutme", (req, res) => {
//     res.redirect("about")
// })
// //404
// //res.status(404).sendFile("./views/404.html", {root: __dirname});
/* RES.RENDER usando app.get

app.get("/", (req, res) => {
    const data = [
        {title: "blablablabla", snippet:"lorem20", blogContent:"lorem100"},
        {title: "fasfasfasfas", snippet:"lorem20", blogContent:"lorem100"},
        {title: "gjhghjghjghj", snippet:"lorem20", blogContent:"lorem100"},
    ];
    res.render("index", {data, moreData: "this is more separate data"})
})*/

//APP.USE + SWITCH TO CONTROL THE REQUESTS/RESPONSES
// app.use( (req, res) => {
//     switch(req.url){
//         case("/"):
//             //passing variables into to be rendered (additional title and others)
//             const blogs = [
//                 {title: "Yoshi finds eggs", snippet: "Right at the begining, mario must jump on yoshi..."},
//                 {title: "Mario finds stars", snippet: "First of all, start your console..."},
//                 {title: "How to defeat Bowser", snippet: "get to the castle, find your way thru..."}
//             ];
//             //calling the render function with aditional variables
//             res.render("index", {title: "Home", blogs})
//             break;
//         case("/about"):
//             res.render("about" , {title: "About"})
//             break;
//         case("/blogs/create"):
//             res.render("create", {title: "Create e a New blogpost"});
//             break;
//         default:
//             res.status(404).render("404", {title: "404"})
//     }
// })

//CREATE Custom Middleware
// app.use( (req, res, next) => {
//     console.log("new request made");
//     console.log(`host: ${req.hostname}`);
//     console.log(`path: ${req.path}`);
//     console.log(`method: ${req.method}`);
//     next();
// });

// middleware & statics files (css, imgs)
app.use(express.static("public"));

//middleware to encode the form data into mongoDB ready
app.use(express.urlencoded({extended: true}));

//calling morgan 
app.use(morgan("dev"));

// //mongoose and mongoDB sandbox routes
/* app.get("/add-blog", (req, res) => {
    blog.save()
        .then( (result) => {
            res.send(result)
        }).catch( (err) => {
            console.log(err)
        })
})
//retrieve all files from mongoDB
app.get("/all-blogs", (req, res) => {
    Blog.find()
        .then( (result) => {
            res.send(result);
        })
        .catch( (error) => {
            console.log(error);
        })
})

//retrive a single blog document from mongoDB
app.get("/single-blog", (req, res) => {
    Blog.findById("5fb2701467edd1136b069aac")
        .then( (result) => {
            res.send(result);
        })
        .catch( (error) => {
            console.log(error);
        })
}) */

//using app.get to render files from EXpress+EJS
app.get("/", (req, res) => {
    res.redirect("/blogs");
})

app.get("/about", (req, res) => {
    res.render("about" , {title: "About"})
})

// blog routes
app.get("/blogs", (req, res) => {
    Blog.find().sort({createdAt: -1})
        .then( result => {
            res.render("index", {title: "All Blogs", blogs: result})
        })
        .catch( error => console.log(error))
});

app.post("/blogs", (req, res) => {
    const blog = new Blog(req.body)
    blog.save()
        .then( result => {
            console.log(`post result: ${result}`)
            res.redirect("/blogs")
        })
        .catch ( error => {
            console.log(error)
        })
})

app.get("/blogs/create", (req, res) => {
    res.render("create", {title: "Create e a New blogpost"});
})

app.get("/blogs/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    Blog.findById(id)
        .then(result => {
            res.render("details", {blog: result, title: "Blog Details"})
        })
        .catch( err => {
            console.log(err)
        })
})

app.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;
    
    Blog.findByIdAndDelete(id)
      .then(result => {
        res.json({ redirect: '/blogs' });
      })
      .catch(err => {
        console.log(err);
      });
  });

app.use((req, res) => {
    res.status(404).render("404", {title: "404"})
})



