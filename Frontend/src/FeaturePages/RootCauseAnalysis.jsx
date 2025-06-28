import React from "react";
import { useNavigate } from "react-router-dom";

const RootCauseAnalysis = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/diagnosis-page");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
        Find What’s Really Causing Your Health Issues
      </h1>
      <p className="text-center text-gray-400 mb-8 max-w-lg">
        This will take 2-3 minutes and help provide long-term wellness advice.
      </p>
      <button
        onClick={handleStart}
        className="btn py-3 px-8 rounded-4xl shadow-md transition duration-200"
      >
        Start Root Cause Diagnosis
      </button>
    </div>
  );
};

export default RootCauseAnalysis;
