const express = require ("express")
const cors = require ("cors")
const app = express ()
app.use(cors());

app.use(express.json());

const apiRoutes = require("./routes/apiRoutes")

app.use("/", apiRoutes)

module.exports = app