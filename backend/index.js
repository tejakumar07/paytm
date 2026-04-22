const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const cors = require("cors");
const PORT = 3000;


const mainRouter = require("../backend/routes/index");


app.use(cors());
app.use(express.json())

app.use("/sapi/v1", mainRouter);

app.listen(PORT)