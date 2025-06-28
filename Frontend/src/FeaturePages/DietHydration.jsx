import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DietHydrationStep = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    dietType: "",
    waterIntake: "",
    mealsPerDay: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNext = () => {
    console.log("Step 2 Data:", formData);
    navigate("/mental-emotional");
  };

  return (
    <div className="h-screen text-white flex flex-col items-center p-6">
      <div className="w-full max-w-lg">
        <div className="mb-6">
          <p className="text-sm text-gray-400">Step 2 of 5</p>
          <div className="w-full bg-gray-700 h-2 rounded">
            <div className="bg-blue-500 h-2 rounded w-2/5"></div>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-6">Diet & Hydration</h2>

        <div className="mb-4">
          <label className="block text-sm mb-2">What is your diet type?</label>
          <select
            name="dietType"
            value={formData.dietType}
            onChange={handleChange}
            className="w-full bg-gray-800 text-white p-3 rounded border border-gray-600"
          >
            <option value="">Select</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Non-Vegetarian">Non-Vegetarian</option>
            <option value="Vegan">Vegan</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-2">
            How much water do you drink daily?
          </label>
          <select
            name="waterIntake"
            value={formData.waterIntake}
            onChange={handleChange}
            className="w-full bg-gray-800 text-white p-3 rounded border border-gray-600"
          >
            <option value="">Select</option>
            <option value="Less than 2 liters">Less than 2 liters</option>
            <option value="2-3 liters">2-3 liters</option>
            <option value="More than 3 liters">More than 3 liters</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-sm mb-2">
            How many meals do you have daily?
          </label>
          <select
            name="mealsPerDay"
            value={formData.mealsPerDay}
            onChange={handleChange}
            className="w-full bg-gray-800 text-white p-3 rounded border border-gray-600"
          >
            <option value="">Select</option>
            <option value="1-2 meals">1-2 meals</option>
            <option value="3 meals">3 meals</option>
            <option value="More than 3 meals">More than 3 meals</option>
          </select>
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

export default DietHydrationStep;
