const express = require("express");

const bodyParser = require("body-parser");
const app = express();
const Files = require("./src/routes/files");

const port = process.env.PORT || 3001;

app.use(express.json());
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use("/v1", Files);




app.listen(port, function () {
  console.log("Runnning on " + port);
});


module.exports = app;