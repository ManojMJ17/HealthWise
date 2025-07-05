const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const analyzeRootCause = async (req, res) => {
  try {
    const { message } = req.body;
    const model = genAI.getGenerativeModel({ model:"gemini-2.0-flash" });

    const result = await model.generateContent(message);
    const response = await result.response;
    const reply = response.text();

    res.json({ reply });
  } catch (err) {
    console.error("Gemini error:", err);
    res.status(500).json({ error: "Failed to get AI response" });
  }
};

module.exports = { analyzeRootCause };
