require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

const mainRouter = require("./routes/index");

app.use(cors());
app.use(express.json());

app.use("/sapi/v1", mainRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
