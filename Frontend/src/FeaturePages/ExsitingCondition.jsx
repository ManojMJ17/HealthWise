import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ExistingConditions = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    existingConditions: "",
    medication: "",
    allergies: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNext = () => {
    console.log("Step 5 Data:", formData);
    navigate("/rca-result");
  };

  return (
    <div className="h-screen text-white flex flex-col items-center p-6">
      <div className="w-full max-w-lg">
        <div className="mb-6">
          <p className="text-sm text-gray-400">Step 5 of 5</p>
          <div className="w-full bg-gray-700 h-2 rounded">
            <div className="bg-blue-500 h-2 rounded w-full"></div>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-6">Existing Conditions</h2>

        <div className="mb-4">
          <label className="block text-sm mb-2">
            Do you have any existing conditions?
          </label>
          <input
            type="text"
            name="existingConditions"
            value={formData.existingConditions}
            onChange={handleChange}
            placeholder="E.g., Diabetes, Hypertension"
            className="w-full bg-gray-800 text-white p-3 rounded border border-gray-600"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-2">
            Are you on any medication?
          </label>
          <input
            type="text"
            name="medication"
            value={formData.medication}
            onChange={handleChange}
            placeholder="E.g., Insulin, Antihypertensives"
            className="w-full bg-gray-800 text-white p-3 rounded border border-gray-600"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm mb-2">
            Do you have any allergies?
          </label>
          <input
            type="text"
            name="allergies"
            value={formData.allergies}
            onChange={handleChange}
            placeholder="E.g., Pollen, Penicillin"
            className="w-full bg-gray-800 text-white p-3 rounded border border-gray-600"
          />
        </div>

        <button
          onClick={handleNext}
          className="w-full btn py-3 rounded font-semibold transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ExistingConditions;
