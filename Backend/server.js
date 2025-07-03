const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const remedyRoutes = require("./routes/remedyRoutes");
const geminiRoutes = require("./routes/geminiRoutes");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("Mongo Error:", err));

app.use("/user", userRoutes);
app.use("/api/remedy", remedyRoutes);
app.use("/api", geminiRoutes); // ✅ important

app.get("/", (req, res) => {
  res.send("<h1>Server running!</h1>");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
