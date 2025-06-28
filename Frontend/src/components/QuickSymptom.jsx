import React from "react";

const QuickSymptom = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4 ">Quick Symptom Entry</h2>
      <form className="flex flex-col gap-4">
        <label htmlFor="age">Age</label>
        <input
          className="p-4 rounded-md bg-gray-800 text-white"
          placeholder="Enter your age"
        />
        <label htmlFor="symptom">Symptom</label>
        <input
          className="p-4 rounded-md bg-gray-800 text-white"
          placeholder="Describe your symptom"
        />
        <label htmlFor="duration">Duration</label>
        <input
          className="p-4 rounded-md bg-gray-800 text-white"
          placeholder="How long have you had this symptom?"
        />
        <label htmlFor="severity">Severity</label>
        <select className="p-4 rounded-md bg-gray-800 text-white">
          <option>Select severity</option>
          <option>Mild</option>
          <option>Moderate</option>
          <option>Severe</option>
        </select>
        <button className="p-2 bg-[#215787] rounded-3xl cursor-pointer">
          Get Remedy
        </button>
      </form>
    </>
  );
};

export default QuickSymptom;
