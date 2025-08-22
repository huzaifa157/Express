// Express (or Express.js) is a backend web framework for Node.js.
// It helps developers easily build web applications and APIs.

// 👉 In simple words:

// Node.js allows you to run JavaScript on the server.

// Express.js makes it much easier to handle things like:

// Creating routes (/home, /about, /api/users, etc.)

// Handling requests (GET, POST, PUT, DELETE)

// Sending responses (like JSON, HTML, files)

// Using middleware (functions that run between request and response, e.g., logging, authentication).

import express from "express"; // Importing express

const app = express(); // Creating an express application

// When someone goes to "http://localhost:3000/"

// 🔹 app.get()

// Used for specific routes with the GET request (like opening a webpage in a browser).
// Runs only when the URL path matches exactly.

app.get("/", (req, res) => {
  // Send back response
  res.send("you contacted the home path");
});

app.get("/about", (req, res) => {
  res.send("you contacted the about path");
});

// 🔹 What is a Path Parameter?        (also called route parameters)

// A path parameter is a variable part of the URL.
// It’s written with a colon : in your route.
// Whatever the user types in that place, Express captures it in req.params.

// app.get("/:username/:id", (req,res)=>{

//  let {username , id} = req.params;
//  res.send(`Welcome to the page of @${username}.Page id is #${id}`)
// })

// for html format

app.get("/:username/:id", (req, res) => {
  let { username, id } = req.params;

  let htmlstr = `
    <h1>HY Welcome to the page</h1>
    <p>Welcome to the page of @${username}. Page id is #${id}</p>
  `;

  res.send(htmlstr);
});

// query Strings

// How it works
// Query parameters are the part of a URL that comes after a ?.
// They’re written as key=value pairs.

app.get("/search", (req, res) => {
  let { q } = req.query;

  if (!q) {
    res.send(`Nothing search`);
  }
  res.send(`<h1>Search result for Query: ${q}</h1>`);
});

// app.use()

// Used to add middleware or functions that run for every request (all routes), unless you specify a path.
// Can work for all request types (GET, POST, etc.)

app.use((req, res) => {
  /*all random request other than mentioned path in get */
  res.send("this path is not valid. Something is missing or path is invalid");
});

// Start server on port 3000
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

// What is nodemon?

// It’s a tool that automatically restarts your Node.js server whenever you save changes.
// Saves you from running node index.js again and again.

// you run:
// nodemon index.js
