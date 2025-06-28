import React, { useState } from "react";

import axios from "axios";

const SymptomAnalyzer = () => {
  const [symptoms, setSymptoms] = useState("");
  const [voiceInput, setVoiceInput] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [medications, setMedications] = useState("");

  const commonSymptoms = [
    "Fever",
    "Fatigue",
    "Headache",
    "Cough",
    "Sore Throat",
    "Muscle Aches",
  ];

  const handleAnalyze = async () => {
    const data = {
      symptoms: symptoms || voiceInput,
      age,
      gender,
      medications,
    };

    try {
      const res = await axios.post("http://localhost:5000/analyze", data);
      console.log(res.data);
    } catch (error) {
      console.error("Error analyzing symptoms:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4">
          Tell us what you're feeling
        </h1>
        <input
          type="text"
          placeholder="Search for symptoms"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          className="w-full mb-4 px-4 py-2 rounded bg-gray-800 border border-gray-600 focus:outline-none"
        />

        <div className="flex flex-wrap gap-2 mb-4">
          {commonSymptoms.map((symptom) => (
            <button
              key={symptom}
              onClick={() => setSymptoms(symptom)}
              className="bg-gray-700 px-4 py-1 rounded-full hover:bg-gray-600"
            >
              {symptom}
            </button>
          ))}
        </div>

        <input
          type="text"
          placeholder="Tap to speak your symptoms"
          value={voiceInput}
          onChange={(e) => setVoiceInput(e.target.value)}
          className="w-full mb-4 px-4 py-2 rounded bg-gray-800 border border-gray-600"
        />

        <input
          type="number"
          placeholder="Age (optional)"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full mb-4 px-4 py-2 rounded bg-gray-800 border border-gray-600"
        />

        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="w-full mb-4 px-4 py-2 rounded bg-gray-800 border border-gray-600"
        >
          <option value="">Gender (optional)</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <input
          type="text"
          placeholder="Recent Medications (optional)"
          value={medications}
          onChange={(e) => setMedications(e.target.value)}
          className="w-full mb-6 px-4 py-2 rounded bg-gray-800 border border-gray-600"
        />

        <button
          onClick={handleAnalyze}
          className="w-full bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white font-medium"
        >
          Analyze Symptoms
        </button>
      </div>
    </div>
  );
};

export default SymptomAnalyzer;
