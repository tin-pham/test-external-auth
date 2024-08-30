const express = require("express");
const app = express();
const port = 8082;

app.get("/", (req, res) => {
  res.send("Mario");
});

app.listen(port, () => {
  console.log(`Mario app listening at http://localhost:${port}`);
});
