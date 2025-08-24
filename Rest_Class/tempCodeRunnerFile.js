const express = require("express");
const app = express();
const path = require("path");
const port = 6464;
const { v4: uuidv4 } = require("uuid");
uuidv4(); // ⇨ create new random id'1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

const methodOverride = require("method-override");
// Ye package forms me PUT/PATCH/DELETE methods use karne ke liye Express me zaruri hota hai kyunki HTML forms sirf GET/POST support karte hain.
app.use(methodOverride("_method"));


// path.join(__dirname, "views")
// __dirname → gives the absolute path of the current project folder.
// path.join(...) → safely joins paths (works on Windows, Mac, Linux).
// So this makes sure Express always finds the correct views folder no matter where the project runs.

app.set("view engine","ejs"); /* tell express to use ejs as view engine as all .ejs file will be inside views*/
app.set("views", path.join(__dirname, "views")); /* required path before using */

app.use(express.static(path.join(__dirname, "public"))); /*This tells Express:
👉 “Serve all static files (HTML, CSS, JS, images, etc.) directly from the public folder.”*/

app.use(
    express.urlencoded({ extended: true })
); /*Middleware to parse form data (application/x-www-form-urlencoded)  
// Puts data into req.body  for post request
// extended:true => allows nested objects in form data*/

// creating array to store the data of post

let posts = [
    {
        id: uuidv4(),
        username: "apna college",
        content: "i love coding",
    },
    {
        id: uuidv4(),
        username: "M huzaifa Ibrahim",
        content: "i got selected in Amazon",
    },
    {
        id: uuidv4(),
        username: "Hassan",
        content: "Finally! I succeed to run my startup!!",
    },
];

app.get("/posts", (req, res) => {
    /*What res.render() does:*/
    /* It looks for a template file (e.g., .ejs, .pug, etc.) inside your views folder.*/
    res.render("index", { posts });
});
/* It renders (converts) that template into plain HTML.*/
/* It then sends that HTML as a response to the browser.*/

app.get("/posts/new", (req, res) => {
    /* get form to create new post*/
    res.render("new");
});

// after  getting content sent post request
app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content });
    res.redirect("/posts");
});

// working for specific id post

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show", { post });
});

// edit post

app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit", { post });
});

app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    let newContent = req.body.content;
    post.content = newContent;
    res.redirect("/posts");
});















app.listen(port, () => {
    console.log("server is running on " + port);
});
