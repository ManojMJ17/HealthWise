import React from "react";
import Navbar from "../components/Navbar";

const RCAResult = () => {
  return (
    <div className="">
      <Navbar />

      {/* Main Content */}
      <div className=" text-white min-h-screen p-6 md:p-12 max-w-4xl mx-auto">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Your Personalized Health Insight
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Based on your recent health assessment, we've identified key factors
            influencing your well-being. This analysis provides a comprehensive
            view of your health, linking symptoms to underlying causes and
            offering tailored recommendations.
          </p>
        </section>

        {/* Root Causes */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">
            Identified Root Causes
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold">Stress & Anxiety</h4>
              <p className="text-gray-400">
                Elevated stress levels can significantly impact your physical
                and mental health. Managing stress is crucial for overall
                well-being.
              </p>
            </div>
            <div>
              <h4 className="font-bold">Dietary Imbalance</h4>
              <p className="text-gray-400">
                An unbalanced diet lacking essential nutrients can contribute to
                various health issues. A balanced diet is key for optimal
                health.
              </p>
            </div>
            <div>
              <h4 className="font-bold">Sleep Disturbance</h4>
              <p className="text-gray-400">
                Insufficient or disrupted sleep can affect your energy levels,
                mood, and overall health. Prioritizing quality sleep is
                essential.
              </p>
            </div>
          </div>
        </section>

        {/* Mapped Symptoms */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Mapped Symptoms</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold">Headaches</h4>
              <p className="text-gray-400">Linked to Vata imbalance</p>
            </div>
            <div>
              <h4 className="font-bold">Fatigue</h4>
              <p className="text-gray-400">Linked to Kapha imbalance</p>
            </div>
          </div>
        </section>

        {/* Ayurvedic Body Type Insight */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">
            Ayurvedic Body Type Insight
          </h3>
          <div>
            <h4 className="font-bold">Vata</h4>
            <p className="text-gray-400">
              Imbalance Level: Moderate. Vata governs movement in the body and
              mind. An imbalance can manifest as anxiety, restlessness, and
              digestive issues.
            </p>
          </div>
        </section>

        {/* Recommendations */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">
            Recommendations & Lifestyle Tips
          </h3>
          <div className="mb-6">
            <h4 className="font-bold">Lifestyle Changes</h4>
            <ul className="list-disc list-inside text-gray-400">
              <li>Improve Sleep Hygiene</li>
              <li>Balance Your Diet</li>
              <li>Reduce Screen Time</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">Natural Remedies Suggestions</h4>
            <ul className="list-disc list-inside text-gray-400">
              <li>Herbal Teas</li>
              <li>Self-Massage</li>
            </ul>
          </div>
        </section>

        {/* CTA Buttons */}
        <section className="flex flex-wrap gap-4 justify-center">
          <button className="btn py-2 px-4 rounded-md shadow-md">
            Explore Remedies
          </button>
          <button className="btn py-2 px-4 rounded-md shadow-md">
            Download Report
          </button>
          <button className="btn py-2 px-4 rounded-md shadow-md">
            Track Progress
          </button>
          <button className="btn py-2 px-4 rounded-md shadow-md">
            Retake Quiz
          </button>
        </section>
      </div>
    </div>
  );
};

export default RCAResult;
