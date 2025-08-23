const express = require("express");
const app = express();
const port = 4000;

app.use(express.urlencoded({extended: true})) //  Middleware to parse form data (req.body) when seding post request 
// extended: true => allows nested objects in form data 


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