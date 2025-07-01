// src/FeaturePages/DoshaQuiz.jsx
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    id: 1,
    question: "What is your natural body frame?",
    options: ["Thin and light", "Medium and athletic", "Heavy and broad"],
    doshas: ["Vata", "Pitta", "Kapha"],
  },
  {
    id: 2,
    question: "What is your skin type?",
    options: ["Dry and rough", "Oily and sensitive", "Thick and smooth"],
    doshas: ["Vata", "Pitta", "Kapha"],
  },
  {
    id: 3,
    question: "How would you describe your digestion?",
    options: ["Irregular, bloating", "Strong, fast", "Slow, sluggish"],
    doshas: ["Vata", "Pitta", "Kapha"],
  },
  {
    id: 4,
    question: "How is your sleep?",
    options: ["Light, interrupted", "Moderate, sound", "Heavy, long"],
    doshas: ["Vata", "Pitta", "Kapha"],
  },
  {
    id: 5,
    question: "How is your energy level during the day?",
    options: ["Comes in bursts", "Consistent and intense", "Stable but slow"],
    doshas: ["Vata", "Pitta", "Kapha"],
  },
  {
    id: 6,
    question: "How do you react to stress?",
    options: ["Anxious or fearful", "Irritable or angry", "Withdrawn or dull"],
    doshas: ["Vata", "Pitta", "Kapha"],
  },
  {
    id: 7,
    question: "What is your body temperature like?",
    options: ["Cold hands and feet", "Warm body", "Cool but moist"],
    doshas: ["Vata", "Pitta", "Kapha"],
  },
  {
    id: 8,
    question: "How is your appetite?",
    options: ["Variable", "Strong and consistent", "Mild and slow"],
    doshas: ["Vata", "Pitta", "Kapha"],
  },
  {
    id: 9,
    question: "How would you describe your hair?",
    options: ["Dry and frizzy", "Soft and oily", "Thick and wavy"],
    doshas: ["Vata", "Pitta", "Kapha"],
  },
  {
    id: 10,
    question: "Which climate do you prefer?",
    options: ["Warm and moist", "Cool and dry", "Warm and dry"],
    doshas: ["Vata", "Pitta", "Kapha"],
  },
];

const DoshaQuiz = () => {
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const handleChange = (id, value) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const doshaScores = { Vata: 0, Pitta: 0, Kapha: 0 };

    questions.forEach((q) => {
      const selected = answers[q.id];
      const idx = q.options.indexOf(selected);
      const dosha = q.doshas[idx];
      if (dosha) doshaScores[dosha]++;
    });

    const dominantDosha = Object.keys(doshaScores).reduce((a, b) =>
      doshaScores[a] > doshaScores[b] ? a : b
    );

    localStorage.setItem("dosha_result", dominantDosha);
    navigate("/dosha-result");
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
        <div className="w-full max-w-2xl">
          <h1 className="text-2xl font-semibold mb-4">Discover Your Dosha Type</h1>
          <p className="mb-6 text-gray-300">Please answer the following questions:</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {questions.map((q) => (
              <div key={q.id}>
                <label className="block mb-2">{`Question ${q.id}: ${q.question}`}</label>
                <select
                  className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white"
                  value={answers[q.id] || ""}
                  onChange={(e) => handleChange(q.id, e.target.value)}
                  required
                >
                  <option value="">Select an option</option>
                  {q.options.map((option, idx) => (
                    <option key={idx} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            ))}

            <div className="text-right">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DoshaQuiz;
