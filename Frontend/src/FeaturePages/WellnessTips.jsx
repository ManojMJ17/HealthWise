import React from "react";
import { FaBookmark } from "react-icons/fa";
import Navbar from "../components/Navbar";

const WellnessTips = () => {
  const tips = [
    {
      category: "Morning Routine",
      items: [
        {
          title: "Tongue Scraping",
          subtitle: "Start your day with a clean slate",
          description:
            "Gently scrape your tongue to remove toxins and bacteria, promoting oral health and fresh breath.",
        },
        {
          title: "Oil Pulling",
          subtitle: "Swish your way to wellness",
          description:
            "Swish a tablespoon of coconut or sesame oil in your mouth for 10-20 minutes to detoxify and strengthen gums.",
        },
      ],
    },
    {
      category: "Diet Tips",
      items: [
        {
          title: "Seasonal Eating",
          subtitle: "Nourish with nature's rhythm",
          description:
            "Embrace seasonal fruits and vegetables to align your diet with the natural cycles, enhancing digestion and vitality.",
        },
        {
          title: "Hydration",
          subtitle: "Sip your way to balance",
          description:
            "Start your day with a glass of warm water, and stay hydrated throughout the day to support digestion and overall well-being.",
        },
      ],
    },
    {
      category: "Yoga & Meditation",
      items: [
        {
          title: "Sun Salutations",
          subtitle: "Energize your body and mind",
          description:
            "Begin with a series of Sun Salutations to warm up your muscles, improve flexibility, and awaken your inner energy.",
        },
        {
          title: "Mindful Breathing",
          subtitle: "Find your inner peace",
          description:
            "Practice deep, mindful breathing exercises to calm your mind, reduce stress, and enhance focus.",
        },
      ],
    },
    {
      category: "Sleep Hygiene",
      items: [
        {
          title: "Wind-Down Routine",
          subtitle: "Prepare for restful sleep",
          description:
            "Establish a relaxing bedtime routine, such as a warm bath, reading, or gentle stretching, to signal your body it's time to rest.",
        },
        {
          title: "Tech-Free Zone",
          subtitle: "Disconnect for deeper sleep",
          description:
            "Avoid screens at least an hour before bed to minimize blue light exposure and promote melatonin production for better sleep quality.",
        },
      ],
    },
  ];

  return (
    <div className=" text-white min-h-screen">
      <Navbar />

      <div className="px-6 py-8 md:px-16 md:py-12">
        <h1 className="text-3xl font-bold mb-8">
          Daily Ayurvedic Wellness Tips
        </h1>

        {tips.map((tipCategory, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">
              {tipCategory.category}
            </h2>
            <div className="space-y-6">
              {tipCategory.items.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <h4 className="text-gray-300">{item.subtitle}</h4>
                  <p className="text-gray-400">{item.description}</p>
                  <button className="btn p-2 flex items-center gap-2">
                    <FaBookmark /> Bookmark Tip
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-8 flex justify-center">
          <button className="btn p-3">Get Personalized Tips</button>
        </div>
      </div>
    </div>
  );
};

export default WellnessTips;
