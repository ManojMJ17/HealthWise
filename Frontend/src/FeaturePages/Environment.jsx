import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Environment = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    livingEnvironment: "",
    exerciseRoutine: "",
    workEnvironment: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNext = () => {
    console.log("Step 4 Data:", formData);
    navigate("/exsiting-condition");
  };

  return (
    <div className="h-screen text-white flex flex-col items-center p-6">
      <div className="w-full max-w-lg">
        <div className="mb-6">
          <p className="text-sm text-gray-400">Step 4 of 5</p>
          <div className="w-full bg-gray-700 h-2 rounded">
            <div className="bg-blue-500 h-2 rounded w-4/5"></div>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-6">Environment & Activity</h2>

        <div className="mb-4">
          <label className="block text-sm mb-2">
            What is your living environment like?
          </label>
          <select
            name="livingEnvironment"
            value={formData.livingEnvironment}
            onChange={handleChange}
            className="w-full bg-gray-800 text-white p-3 rounded border border-gray-600"
          >
            <option value="">Select</option>
            <option value="Urban">Urban</option>
            <option value="Suburban">Suburban</option>
            <option value="Rural">Rural</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-2">
            Do you have an exercise routine?
          </label>
          <select
            name="exerciseRoutine"
            value={formData.exerciseRoutine}
            onChange={handleChange}
            className="w-full bg-gray-800 text-white p-3 rounded border border-gray-600"
          >
            <option value="">Select</option>
            <option value="Daily">Daily</option>
            <option value="Occasionally">Occasionally</option>
            <option value="Rarely">Rarely</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-sm mb-2">
            What is your work environment like?
          </label>
          <select
            name="workEnvironment"
            value={formData.workEnvironment}
            onChange={handleChange}
            className="w-full bg-gray-800 text-white p-3 rounded border border-gray-600"
          >
            <option value="">Select</option>
            <option value="Office">Office</option>
            <option value="Field">Field</option>
            <option value="Remote">Remote</option>
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

export default Environment;
