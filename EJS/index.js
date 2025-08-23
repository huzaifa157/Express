// 🌐 What is EJS?

// EJS stands for Embedded JavaScript templating.
//    🔹It is a templating engine for Node.js + Express.
//    🔹It allows you to write HTML with embedded JavaScript code.
//    🔹With EJS, you can dynamically generate HTML pages using data from your server.

// 🔧 How it works with Express

//    🔹// Install EJS
//    🔹// npm install ejs

// Tell Express to use EJS as the view engine:

// import express from "express";
// const app = express();

// app.set("view engine", "ejs"); // setting EJS as template engine

// 📌 Why use EJS?

// Helps keep HTML separate from backend logic.
// Makes pages dynamic (showing data from DB, forms, etc.).
// Easy to integrate with Express.



const express = require("express")
const app = express();
const path = require("path")

const port = 8080;

app.set("view engine", "ejs");
// This line tells Express where to find our EJS templates.
// By default, Express looks inside a folder named "views" in the root directory.
// path.join(__dirname, "views") makes sure Express always points to the correct "views" folder,
// no matter where the project is run from.either it is runing from root or from main folder it will run after it .
// to use path.join we have to require it 
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// What does express.static() do?

// In an Express.js app, you usually want to serve files like: HTML ,CSS ,JavaScript (frontend) ,Images

// These files don’t change on the server — they are called static files.
// 👉 express.static() is a built-in middleware in Express that tells your app where to look for these static files. it looks on public folder

// path.join(__dirname, "public") → makes sure Express always finds the folder correctly, so we can also run project from root 
//  no matter which operating system you’re using (Windows, Mac, Linux).



app.get("/" , (req,res)=>{
     res.render("home")
/* In Express + EJS, the function .render() is what actually renders (converts) an EJS file into HTML and then sends it to the browser.*/
})

app.get("/ludo", (req,res)=>{
    let dicevalue = Math.floor(Math.random()*6)+1;
    res.render("rolldice" , {num : dicevalue})
})




app.get("/instagram/:username", (req, res) => {
  let { username } = req.params;
  const instaData = require("./data.json");

  let data = instaData[username];
  if (data) {
    res.render("instagram", { data });
  } else {
    res.render("err");
  }
});





app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})


        //    Tags 

// <%= for Outputs the value into the template (HTML escaped) %>

// <% 'Scriptlet' tag, for control-flow means for loops and condition statements etc, no output %>

                                    // include 
                                          
//   <%- include("folder-name/file") %> in EJS is used to reuse common parts of your site (like headers, navbars, or footers) 
//   so you don’t repeat the same code in every page.