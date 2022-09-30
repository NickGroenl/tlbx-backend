const express = require("express");

const bodyParser = require("body-parser");
const app = express();
const Files = require("./src/routes/files");

const port = process.env.PORT || 3001;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/v1", Files);




app.listen(port, function () {
  console.log("Runnning on " + port);
});


module.exports = app;