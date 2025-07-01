const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const remedyRoutes = require("./routes/remedyRoutes");

const userRoutes = require("./routes/userRoutes");

const app = express();

const PORT = 3000;

dotenv.config();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Mongo DB is connected");
  })
  .catch((err) => console.log(err));

app.use("/user", userRoutes);

app.listen(PORT, (req, res) => {
  console.log(`Server runnning at ${PORT}`);
});

app.use("/api/remedy", remedyRoutes);

app.use("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});
