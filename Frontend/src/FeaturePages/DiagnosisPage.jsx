import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function DiagnosisPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    sleepHours: "",
    wakeUpTime: "",
    energyLevels: "",
    screenTime: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNext = () => {
    console.log("Step 1 Data:", formData);
    navigate("/diet-hydration");
  };

  return (
    <div className="h-screen text-white flex flex-col items-center p-6">
      <div className="w-full max-w-lg">
        <div className="mb-6">
          <p className="text-sm text-gray-400">Step 1 of 5</p>
          <div className="w-full bg-gray-700 h-2 rounded">
            <div className="bg-blue-500 h-2 rounded w-1/5"></div>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-6">
          Lifestyle & Daily Routine
        </h2>

        <div className="mb-4">
          <label className="block text-sm mb-2">
            How many hours do you sleep daily?
          </label>
          <select
            name="sleepHours"
            value={formData.sleepHours}
            onChange={handleChange}
            className="w-full bg-gray-800 text-white p-3 rounded border border-gray-600"
          >
            <option value="">Select</option>
            <option value="Less than 4 hours">Less than 4 hours</option>
            <option value="4-6 hours">4-6 hours</option>
            <option value="6-8 hours">6-8 hours</option>
            <option value="More than 8 hours">More than 8 hours</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-2">
            When do you usually wake up?
          </label>
          <select
            name="wakeUpTime"
            value={formData.wakeUpTime}
            onChange={handleChange}
            className="w-full bg-gray-800 text-white p-3 rounded border border-gray-600"
          >
            <option value="">Select</option>
            <option value="Before 6 AM">Before 6 AM</option>
            <option value="6 AM - 8 AM">6 AM - 8 AM</option>
            <option value="After 8 AM">After 8 AM</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-2">
            How are your energy levels throughout the day?
          </label>
          <select
            name="energyLevels"
            value={formData.energyLevels}
            onChange={handleChange}
            className="w-full bg-gray-800 text-white p-3 rounded border border-gray-600"
          >
            <option value="">Select</option>
            <option value="High">High</option>
            <option value="Moderate">Moderate</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-sm mb-2">
            How much screen time do you get daily (TV, phone, laptop)?
          </label>
          <select
            name="screenTime"
            value={formData.screenTime}
            onChange={handleChange}
            className="w-full bg-gray-800 text-white p-3 rounded border border-gray-600"
          >
            <option value="">Select</option>
            <option value="Less than 2 hours">Less than 2 hours</option>
            <option value="2-4 hours">2-4 hours</option>
            <option value="More than 4 hours">More than 4 hours</option>
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
}

export default DiagnosisPage;
