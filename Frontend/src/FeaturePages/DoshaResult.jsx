import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const DoshaResult = () => {
  const [dosha, setDosha] = useState("");

  useEffect(() => {
    const result = localStorage.getItem("dosha_result");
    setDosha(result);
  }, []);

  const getDoshaInfo = (type) => {
    switch (type) {
      case "Vata":
        return "You are Vata dominant: creative, energetic, but may get anxious when out of balance.";
      case "Pitta":
        return "You are Pitta dominant: driven, intelligent, but prone to anger or overheating.";
      case "Kapha":
        return "You are Kapha dominant: calm, nurturing, but may experience weight gain and sluggishness.";
      default:
        return "Dosha type not determined.";
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold mb-4">Your Dosha Result</h1>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md max-w-lg text-center">
          <h2 className="text-2xl mb-2 text-blue-400">{dosha}</h2>
          <p className="text-gray-300">{getDoshaInfo(dosha)}</p>
        </div>
      </div>
    </div>
  );
};

export default DoshaResult;
