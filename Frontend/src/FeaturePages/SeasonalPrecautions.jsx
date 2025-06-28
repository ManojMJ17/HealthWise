import React from "react";
import { FaLeaf } from "react-icons/fa";
import { PiBowlFood, PiFlowerLotusBold } from "react-icons/pi";

const SeasonalPrecautions = () => {
  const data = {
    title: "Stay Balanced This Season",
    season: "Summer(March-May)",
    // season: "Summer",
    sections: [
      {
        title: "Foods to Favor / Avoid",
        items: [
          {
            type: "Favor",
            description:
              "Cooling, hydrating foods like cucumber, watermelon, and leafy greens.",
            icon: PiBowlFood,
          },
          {
            type: "Avoid",
            description:
              "Spicy, oily, and fried foods that increase heat in the body.",
            icon: PiBowlFood,
          },
        ],
      },
      {
        title: "Lifestyle Adaptations",
        items: [
          {
            type: "Favor",
            description:
              "Engage in calming activities like swimming, yoga, and meditation.",
            icon: PiFlowerLotusBold,
          },
          {
            type: "Avoid",
            description: "Avoid strenuous activities during peak heat hours.",
            icon: PiFlowerLotusBold,
          },
        ],
      },
      {
        title: "Suggested Remedies",
        items: [
          {
            type: "Favor",
            description:
              "Aloe vera juice, coconut water, and herbal teas like peppermint.",
            icon: FaLeaf,
          },
          {
            type: "Avoid",
            description: "Excessive sun exposure and alcohol consumption.",
            icon: FaLeaf,
          },
        ],
      },
    ],
  };

  return (
    <div className="p-6 md:p-12 max-w-screen-md mx-auto">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>

      {/* Season Selector */}
      <div className="mb-8">
        <select className="px-4 py-2 rounded-md border border-gray-600 text-gray-300 bg-gray-800 focus:ring-2 focus:ring-blue-500">
          <option>{data.season}</option>
          <option>Monsoon(June-September)</option>
          <option>Autumn(October-November)</option>
          <option>winter(December-January)</option>
          <option>Winter</option>
          <option>Spring</option>
          <option>Autumn</option>
        </select>
      </div>

      {/* Sections */}
      {data.sections.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
          <div className="space-y-4">
            {section.items.map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                {/* Icon */}
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white">
                  <item.icon size={20} />
                </div>
                {/* Text */}
                <div>
                  <p className="text-lg font-medium">{item.type}</p>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SeasonalPrecautions;
