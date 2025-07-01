import React, { useState } from "react";

const QuickSymptom = () => {
  const [age, setAge] = useState("");
  const [symptom, setSymptom] = useState("");
  const [duration, setDuration] = useState("");
  const [severity, setSeverity] = useState("Mild");
  const [remedy, setRemedy] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setRemedy("");
    setError("");

    try {
      const response = await fetch("http://localhost:3000/api/remedy/get-remedy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          age: Number(age),
          symptom,
          duration,
          severity,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setRemedy(data.remedy);
      } else {
        setError(data.remedy || "No remedy found.");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Quick Symptom Entry</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <label htmlFor="age">Age</label>
        <input
          className="p-4 rounded-md bg-gray-800 text-white"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <label htmlFor="symptom">Symptom</label>
        <input
          className="p-4 rounded-md bg-gray-800 text-white"
          placeholder="Describe your symptom"
          value={symptom}
          onChange={(e) => setSymptom(e.target.value)}
        />

        <label htmlFor="duration">Duration</label>
        <input
          className="p-4 rounded-md bg-gray-800 text-white"
          placeholder="How long have you had this symptom?"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />

        <label htmlFor="severity">Severity</label>
        <select
          className="p-4 rounded-md bg-gray-800 text-white"
          value={severity}
          onChange={(e) => setSeverity(e.target.value)}
        >
          <option>Mild</option>
          <option>Moderate</option>
          <option>Severe</option>
        </select>

        <button
          type="submit"
          className="p-2 bg-[#215787] text-white rounded-3xl cursor-pointer"
          disabled={loading}
        >
          {loading ? "Getting Remedy..." : "Get Remedy"}
        </button>
      </form>

      {remedy && (
        <div className="mt-4 bg-green-100 p-4 rounded text-black">
          <h3 className="font-semibold">Suggested Remedy:</h3>
          <p>{remedy}</p>
        </div>
      )}

      {error && (
        <div className="mt-4 bg-red-100 p-4 rounded text-red-800">
          <h3 className="font-semibold">Error:</h3>
          <p>{error}</p>
        </div>
      )}
    </>
  );
};

export default QuickSymptom;
