// src/FeaturePages/DoshaBalance.jsx
import { use, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const AyurvedicDosha = () => {
  const [selectedDosha, setSelectedDosha] = useState(null);
  const doshas = ["Vata", "Pitta", "Kapha"];

  const navigate = useNavigate();
  return (
    <div>
      <Navbar></Navbar>

      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">

        <div className="text-center max-w-md w-full">
          <h1 className="text-2xl font-semibold mb-2">Discover Your Ayurvedic Dosha</h1>
          <p className="text-sm text-gray-300 mb-6">
            Understanding your dosha can help us tailor remedies to your unique constitution.
            Take our quick quiz or skip to continue.
          </p>

          <div className="flex justify-center space-x-4 mb-6">
            {doshas.map((dosha) => (
              <button
                key={dosha}
                // onClick={() => setSelectedDosha(dosha)}
                className={`px-4 py-2 rounded border ${selectedDosha === dosha
                  ? "bg-blue-600 border-blue-600 text-white"
                  : "border-gray-600 text-gray-300 hover:border-white"
                  }`}
              >
                {dosha}
              </button>
            ))}
          </div>

          <div className="flex justify-center space-x-4">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
              onClick={() => navigate("/dosha-quiz")}
            >
              Take Quiz
            </button>
            <button
              className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded"
              onClick={() => {
                // handle skip
                console.log("Skip Clicked");
                navigate("/home")
              }}
            >
              Skip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AyurvedicDosha;
