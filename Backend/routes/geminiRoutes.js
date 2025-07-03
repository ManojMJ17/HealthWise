// routes/geminiRoutes.js
const express = require("express");
const router = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post("/gemini", async (req, res) => {
  try {
    const { message } = req.body;

    // ✅ Use the Gemini 2.0 Flash model
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{
            text: `${message}\n\nSummarize the result.`,
          },],
        },
      ],
    });

    const text = result.response.text();
    res.json({ reply: text });

  } catch (error) {
    console.error("Gemini error:", error);
    res.status(500).json({ reply: "⚠️ Error contacting Gemini API." });
  }
});

module.exports = router;
