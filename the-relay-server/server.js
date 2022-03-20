const express = require("express")
const cors = require("cors")
const app = express()

const port = 5000

app.use(cors())
app.use(express.json())
app.use(require("./routes/accountRoutes"))
app.use(require("./routes/categoryRoutes"))
app.use(require("./routes/listingRoutes"))
 
app.listen(port, () => {
  console.log("Server started")
});