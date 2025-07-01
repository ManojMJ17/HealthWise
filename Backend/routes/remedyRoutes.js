const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

router.post("/get-remedy", (req, res) => {
  const { age, symptom, severity, duration } = req.body;

  console.log("Request received:", req.body);

  // Determine age group
  let ageGroup = "adult";
  if (age < 13) ageGroup = "child";
  else if (age > 60) ageGroup = "senior";

  console.log("Resolved ageGroup:", ageGroup);

  try {
    const dataPath = path.join(__dirname, "../data/remedies.json");
    const remedies = JSON.parse(fs.readFileSync(dataPath, "utf-8")); // safer with encoding
    console.log("Loaded remedies:", remedies.length);

    const match = remedies.find(
      (r) =>
        r.symptom.toLowerCase() === symptom.toLowerCase() &&
        r.ageGroup === ageGroup &&
        r.severity.toLowerCase() === severity.toLowerCase() &&
        r.duration.toLowerCase() === duration.toLowerCase()
    );

    console.log("Matching result:", match);

    if (match) {
      res.json({ remedy: match.remedyText });
    } else {
      res.status(404).json({ remedy: "No remedy found for given input." });
    }
  } catch (err) {
    console.error("Error reading remedies:", err);
    res.status(500).json({ remedy: "Server error. Please try again." });
  }
});

module.exports = router;
