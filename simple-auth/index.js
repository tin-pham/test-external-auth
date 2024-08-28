const express = require("express");
const app = express();
const port = 8081;

app.use((req, res, next) => {
  if (req.headers["token"]) {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
});

app.get("/", (req, res) => {
  res.send("Authorized");
});

app.listen(port, () => {
  console.log(`Simple Auth app listening at http://localhost:${port}`);
});
