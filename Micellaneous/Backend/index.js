const express = require("express");
const app = express();
const port = 4000;

app.use(express.urlencoded({extended: true})) //  Middleware to parse form data (req.body) when seding post request 
// extended: true => allows nested objects in form data 

app.use(express.json());   // Middleware to parse JSON data (req.body) from client

// So basically:

// express.urlencoded() → for form data (HTML forms).
// express.json() → for JSON data (like from APIs or fetch requests).


app.get("/register", (req, res) => {
    let {user , password} = req.query;
    res.send(`Its Get response Welcome dear ${user}`);
});

app.post("/register", (req, res) => {

    let {user , password} = req.body;
     res.send(`Its Get response Welcome dear ${user}`);

    res.send("It's Post response");
    console.log(req.body)
});











app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})