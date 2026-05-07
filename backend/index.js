const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();

const mainRouter = require("../backend/routes/index");

app.use(cors());
app.use(express.json());

app.use("/sapi/v1", mainRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
