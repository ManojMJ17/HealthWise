// src/FeaturePages/DoshaResult.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const doshaDetails = {
  Vata: {
    title: "Primary Dosha: Vata",
    description:
      "Vata types are characterized by their creativity, flexibility, and quick thinking. They are often energetic and enthusiastic, but can also be prone to anxiety and restlessness when out of balance.",
    characteristics: [
      ["Creative", "Often generates innovative ideas"],
      ["Quick-thinking", "Processes information rapidly"],
      ["Enthusiastic", "Expresses passion and excitement"],
      ["Flexible", "Adapts easily to new situations"],
      ["Energetic", "Maintains high energy levels"],
    ],
    symptoms: [
      ["Anxiety", "Experiences excessive worry and nervousness"],
      ["Restlessness", "Feels unable to stay still or relax"],
      ["Dry skin", "Skin lacks moisture and appears flaky"],
      ["Irregular digestion", "Digestion is unpredictable and inconsistent"],
      ["Difficulty sleeping", "Struggles to fall asleep or stay asleep"],
    ],
    lifestyle:
      "To balance Vata, focus on grounding and warming foods, regular routines, and calming activities. Favor warm, cooked meals, and avoid cold, dry foods. Engage in gentle exercises like yoga or walking, and prioritize relaxation techniques such as meditation or deep breathing.",
  },
  // Add "Pitta" and "Kapha" details similarly
};

const DoshaResult = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { dosha = "Vata" } = location.state || {}; // default to Vata if nothing passed
  const data = doshaDetails[dosha];

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
      <Navbar />
      <div className="max-w-3xl mx-auto mt-8 space-y-6">
        <h2 className="text-2xl font-semibold">Your Dosha Result</h2>
        <h3 className="text-xl font-bold text-blue-400">{data.title}</h3>
        <p className="text-gray-300">{data.description}</p>

        <div>
          <h4 className="text-lg font-semibold border-b border-gray-700 pb-1 mb-2">
            Characteristics
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {data.characteristics.map(([title, desc], i) => (
              <div key={i}>
                <p className="font-semibold">{title}</p>
                <p className="text-sm text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold border-b border-gray-700 pb-1 mb-2">
            Imbalance Symptoms
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {data.symptoms.map(([title, desc], i) => (
              <div key={i}>
                <p className="font-semibold">{title}</p>
                <p className="text-sm text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold border-b border-gray-700 pb-1 mb-2">
            Suggested Diet/Lifestyle
          </h4>
          <p className="text-gray-300">{data.lifestyle}</p>
        </div>

        <button
          onClick={() => navigate("/dashboard")}
          className="mt-6 px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 transition"
        >
          Track Dosha Over Time
        </button>
      </div>
    </div>
  );
};

export default DoshaResult;
