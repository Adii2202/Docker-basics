const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.json({
    hey: "node",
  });
});

app.listen;
port,
  () => {
    console.log(`PORT is running on port : ${port}`);
  };
