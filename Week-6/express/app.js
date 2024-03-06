const express = require("express");
const Userroutes = require('./routes/Userroutes')
const app = express();
app.use(express.json())

app.use('/user',Userroutes)

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

app.get('/sendjson/query',(req,res) => {

  let {limit} = req.query;
  // console.log(limit)
  res.send("The limit set is " + limit)
})



app.listen("5000", () => {
  console.log(`Server Started on port  5000`);
});
