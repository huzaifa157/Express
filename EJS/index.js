// 🌐 What is EJS?

// EJS stands for Embedded JavaScript.
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



app.get("/" , (req,res)=>{
     res.render("home")
/* In Express + EJS, the function .render() is what actually renders (converts) an EJS file into HTML and then sends it to the browser.*/
})

app.get("/ludo", (req,res)=>{
    let dicevalue = Math.floor(Math.random()*6)+1;
    res.render("rolldice" , {num : dicevalue})
})

app.get("/instagram/:username", (req, res) => {
  const { username } = req.params;
  res.render("instagram", { username });
});





app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})