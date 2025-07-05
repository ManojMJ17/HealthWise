const express = require("express");
const router = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// 🔹 Symptom Chatbot Route (used earlier)
router.post("/gemini", async (req, res) => {
  try {
    const { message } = req.body;
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `${message}\n\nSummarize in 5 lines line by line heading with bold letters and design.`,
            },
          ],
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

// 🔹 Root Cause Chatbot Route
router.post("/root-cause", async (req, res) => {
  try {
    const { message } = req.body;
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `You are an Ayurvedic health assistant. The patient says: "${message}". 
Ask one question to clarify the symptom and try to narrow down the possible root causes.`,
            },
          ],
        },
      ],
    });

    const text = result.response.text();
    if (!text || text.trim() === "") {
      return res.status(400).json({ reply: "⚠️ No valid response from Gemini." });
    }

    res.json({ reply: text });
  } catch (error) {
    console.error("Gemini Root Cause Error:", error);
    res.status(500).json({ reply: "⚠️ Error contacting Gemini API." });
  }
});

module.exports = router;
