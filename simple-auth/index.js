const express = require("express");
const app = express();
const port = 8081;

// Middleware to check token
app.use((req, res, next) => {
  console.log(`Received request with path: ${req.path}`); // Log the request path
  if (req.headers["token"]) {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
});

// Handle all paths
app.use((req, res) => {
  console.log(`Path authorized: ${req.path}`); // Log authorized path
  res.send("Authorized");
});

app.listen(port, () => {
  console.log(`Simple Auth app listening at http://localhost:${port}`);
});
