import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MentalEmotionalStep = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    stressLevel: "",
    mentalHealth: "",
    emotionalState: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFinish = () => {
    console.log("Step 3 Data:", formData);
    navigate("/environment");
  };

  return (
    <div className="h-screen text-white flex flex-col items-center p-6">
      <div className="w-full max-w-lg">
        <div className="mb-6">
          <p className="text-sm text-gray-400">Step 3 of 5</p>
          <div className="w-full bg-gray-700 h-2 rounded">
            <div className="bg-blue-500 h-2 rounded w-3/5"></div>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-6">
          Mental & Emotional Health
        </h2>

        <div className="mb-4">
          <label className="block text-sm mb-2">
            How stressed do you feel daily?
          </label>
          <select
            name="stressLevel"
            value={formData.stressLevel}
            onChange={handleChange}
            className="w-full bg-gray-800 text-white p-3 rounded border border-gray-600"
          >
            <option value="">Select</option>
            <option value="Low">Low</option>
            <option value="Moderate">Moderate</option>
            <option value="High">High</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-2">
            How would you describe your mental health?
          </label>
          <select
            name="mentalHealth"
            value={formData.mentalHealth}
            onChange={handleChange}
            className="w-full bg-gray-800 text-white p-3 rounded border border-gray-600"
          >
            <option value="">Select</option>
            <option value="Good">Good</option>
            <option value="Average">Average</option>
            <option value="Poor">Poor</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-sm mb-2">
            How would you describe your emotional state?
          </label>
          <select
            name="emotionalState"
            value={formData.emotionalState}
            onChange={handleChange}
            className="w-full bg-gray-800 text-white p-3 rounded border border-gray-600"
          >
            <option value="">Select</option>
            <option value="Stable">Stable</option>
            <option value="Unstable">Unstable</option>
          </select>
        </div>

        <button
          onClick={handleFinish}
          className="w-full btn py-3 rounded font-semibold transition"
        >
          Finish
        </button>
      </div>
    </div>
  );
};

export default MentalEmotionalStep;
