import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const SymptomAnalyzer = () => {
  const [chatMessages, setChatMessages] = useState([
    { sender: "bot", text: "Hi! Can you describe your symptoms?" },
  ]);
  const [currentInput, setCurrentInput] = useState("");
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    symptoms: "",
    age: "",
    gender: "",
    medications: "",
  });

  const questions = [
    { id: "symptoms", text: "What symptoms are you experiencing?" },
    { id: "age", text: "What is your age?" },
    { id: "gender", text: "What is your gender?" },
    { id: "medications", text: "Are you on any medications?" },
  ];

  const handleSend = async () => {
    if (!currentInput.trim()) return;

    const key = questions[step].id;
    const updatedData = { ...formData, [key]: currentInput };
    setFormData(updatedData);

    const newMessages = [
      ...chatMessages,
      { sender: "user", text: currentInput },
    ];

    if (step < questions.length - 1) {
      const next = step + 1;
      newMessages.push({ sender: "bot", text: questions[next].text });
      setStep(next);
    } else {
      const prompt = `Analyze these symptoms: ${updatedData.symptoms}, Age: ${updatedData.age}, Gender: ${updatedData.gender}, Medications: ${updatedData.medications}`;
      try {
        const res = await axios.post("http://localhost:3000/gemini/analyze", {
          messages: prompt,
        });
        const reply = res.data?.reply || "No analysis available.";
        newMessages.push({ sender: "bot", text: reply });
      } catch (err) {
        newMessages.push({ sender: "bot", text: "Error analyzing symptoms." });
      }
    }

    setChatMessages(newMessages);
    setCurrentInput("");
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-900 text-white p-6">
        <div className="max-w-xl mx-auto bg-gray-800 rounded-lg p-6 shadow">
          <h2 className="text-2xl font-bold mb-4">Symptom Analysis Chatbot</h2>

          <div className="h-96 overflow-y-auto border border-gray-700 p-4 mb-4 rounded">
            {chatMessages.map((msg, i) => (
              <div
                key={i}
                className={`mb-2 ${msg.sender === "user" ? "text-right text-blue-400" : "text-left text-green-400"
                  }`}
              >
                <span className="inline-block bg-gray-700 px-3 py-1 rounded">
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              placeholder="Type your answer..."
              className="flex-1 px-4 py-2 rounded bg-gray-700 border border-gray-600"
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SymptomAnalyzer;
