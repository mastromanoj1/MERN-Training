const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/sendjson", (req, res) => {
  res.json([
    {
      name: "Manoj",
      age: 22,
    },
    {
        name: "Pavi",
        age: 21,
      },
      {
        name: "Shaeen",
        age: 22,
      },
  ]);
});

app.get("/:id", (req, res) => {
   const {id} = req.params;
    res.send("The given id is" + id);
});

app.listen("5000", () => {
  console.log(`Server Started on port  5000`);
});
