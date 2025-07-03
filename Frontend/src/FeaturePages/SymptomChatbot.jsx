import React, { useState } from "react";
import {
  Send,
  Bot,
  User,
  AlertTriangle,
  Heart,
  Clock,
  Thermometer,
  Wind,
  Flame,
  Droplets,
} from "lucide-react";
import { Link } from "react-router-dom";

const AyurvedicSymptomChatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "🧘‍♂️ Namaste! Let's begin with your Dosha type (Vata, Pitta, Kapha)." },
  ]);
  const [userInput, setUserInput] = useState("");
  const [step, setStep] = useState("dosha");
  const [collectedData, setCollectedData] = useState({
    dosha: "",
    symptoms: "",
  });

  const handleSend = async () => {
    const trimmed = userInput.trim();
    if (!trimmed) return;

    const newMessages = [...messages, { sender: "user", text: trimmed }];
    setUserInput("");

    if (step === "dosha") {
      setCollectedData({ ...collectedData, dosha: trimmed });
      setStep("symptoms");
      newMessages.push({ sender: "bot", text: "🙏 Got it. Please describe your symptoms in detail." });
    } else if (step === "symptoms") {
      const finalData = { ...collectedData, symptoms: trimmed };
      setCollectedData(finalData);

      newMessages.push({ sender: "bot", text: "🔍 Analyzing your symptoms..." });
      setMessages(newMessages);

      try {
        const res = await fetch("http://localhost:3000/api/gemini", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: `Ayurvedic analysis for someone with ${finalData.dosha} dosha experiencing: ${finalData.symptoms}`,
          }),
        });
        const data = await res.json();
        newMessages.push({ sender: "bot", text: data.reply || "⚠️ Could not get a response." });
      } catch (err) {
        console.error(err);
        newMessages.push({ sender: "bot", text: "⚠️ Error contacting Gemini API." });
      }
    }

    setMessages([...newMessages]);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-4">🧬 Symptom Analysis Chatbot</h1>

      <div className="max-w-2xl mx-auto bg-gray-800 p-4 rounded-md shadow h-[500px] overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-3 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-lg shadow text-sm whitespace-pre-wrap ${msg.sender === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-green-200 text-gray-900"
                }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2 mt-4 max-w-2xl mx-auto">
        <input
          type="text"
          className="flex-1 p-2 rounded bg-gray-700 text-white border border-gray-600"
          placeholder={step === "dosha" ? "Enter your Dosha (Vata/Pitta/Kapha)" : "Describe your symptoms"}
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
        >
          <Send size={18} />
        </button>
      </div>

      <div className="max-w-2xl mx-auto mt-6">
        <Link to="/dashboard">
          <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600">
            ⬅ Back to Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AyurvedicSymptomChatbot;
