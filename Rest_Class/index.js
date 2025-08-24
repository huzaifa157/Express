const express = require("express");
const app = express();
const path = require("path");
const port = 6464;

// path.join(__dirname, "views")

// __dirname → gives the absolute path of the current project folder.
// path.join(...) → safely joins paths (works on Windows, Mac, Linux).
// So this makes sure Express always finds the correct views folder no matter where the project runs.

app.set("view engine" , "ejs"); /* tell express to use ejs as view engine as all .ejs file will be inside views*/
app.set("views" , path.join(__dirname, "views")) /* required path before using */ 

app.use(express.static(path.join(__dirname,"public")))   /*This tells Express:
👉 “Serve all static files (HTML, CSS, JS, images, etc.) directly from the public folder.”*/

app.use(express.urlencoded({extended:true}))  /*Middleware to parse form data (application/x-www-form-urlencoded)  
// Puts data into req.body  for post request
// extended:true => allows nested objects in form data*/


app.get("/",(req,res)=>{
    res.send("server is working fine")
})




app.listen(port,()=>{
    console.log("server is running on " + port);
})