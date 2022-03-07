const express = require("express");
const dbo = require("./db/connection");
const cors = require("cors");
const app = express();

const port = 5000;

app.use(cors());
app.use(express.json());
app.use(require("./routes/routes"));
 
app.listen(port, () => {

  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log("Server started");
});