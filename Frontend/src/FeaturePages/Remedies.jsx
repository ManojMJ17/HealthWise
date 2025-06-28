import { FaBriefcaseMedical } from "react-icons/fa";

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const remedies = [
  {
    title: "Ginger Tea for Nausea",
    symptoms: "Nausea, Indigestion",
    dosha: "Vata, Kapha",
    ingredients: "Ginger, Honey, Lemon",
    steps: "Steep ginger in hot water, add honey and lemon.",
    usage: "Drink warm, 2-3 times a day.",
    reliefTime: "30–60 minutes",
    icon: FaBriefcaseMedical,
  },
  {
    title: "Turmeric Milk for Inflammation",
    symptoms: "Inflammation, Joint Pain",
    dosha: "Vata, Pitta",
    ingredients: "Turmeric, Milk, Black Pepper",
    steps: "Simmer turmeric in milk, add a pinch of black pepper.",
    usage: "Drink warm, once a day.",
    reliefTime: "1–2 hours",
    icon: FaBriefcaseMedical,
  },
  {
    title: "Honey and Lemon for Sore Throat",
    symptoms: "Sore Throat, Cough",
    dosha: "Vata, Pitta, Kapha",
    ingredients: "Honey, Lemon, Warm Water",
    steps: "Mix honey and lemon in warm water.",
    usage: "Gargle or drink slowly, as needed.",
    reliefTime: "15–30 minutes",
    icon: FaBriefcaseMedical,
  },
  {
    title: "Peppermint Oil for Headaches",
    symptoms: "Headache, Tension",
    dosha: "Vata, Pitta",
    ingredients: "Peppermint Oil",
    steps: "Dilute peppermint oil with a carrier oil.",
    usage: "Apply to temples and forehead.",
    reliefTime: "5–10 minutes",
    icon: FaBriefcaseMedical,
  },
  {
    title: "Chamomile Tea for Anxiety",
    symptoms: "Anxiety, Insomnia",
    dosha: "Vata, Pitta",
    ingredients: "Chamomile Flowers",
    steps: "Steep chamomile flowers in hot water.",
    usage: "Drink warm, 1–2 hours before bedtime.",
    reliefTime: "30–60 minutes",
    icon: FaBriefcaseMedical,
  },
];

export default function RemediesList() {
  return (
    <div>
      <Navbar />
      <div className="p-6 md:p-12 max-w-screen-lg mx-auto text-white">
        <h1 className="text-3xl font-bold mb-6">Remedies</h1>

        <input
          type="text"
          placeholder="Search remedies..."
          className="mb-6 px-4 py-2 rounded-md border border-gray-600 bg-gray-800 w-full"
        />

        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              "Symptom",
              "Dosha Type",
              "Remedy Type",
              "Severity",
              "Duration",
            ].map((filter) => (
              <button
                key={filter}
                className="px-3 py-1  rounded-3xl cursor-pointer text-sm bg-gray-800"
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="my-6">
            <div className="my-4">
              <h1 className="text-2xl font-semibold">Browse by category</h1>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "Cold & Flu",
                "Headache",
                "Digestive Issues",
                "Skin Problems",
                "Stress & Anxiety",
                "Sleep Disorders",
              ].map((category) => (
                <button
                  key={category}
                  className="px-3 py-1 rounded-3xl text-sm bg-gray-800 cursor-pointer"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {remedies.map((remedy, index) => (
          <div key={index} className="mb-8">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                <remedy.icon size={20} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">{remedy.title}</h3>
                <p className="text-sm text-gray-300">
                  Applicable Symptoms: {remedy.symptoms}
                </p>
                <p className="text-sm text-gray-300">
                  Dosha Suitability: {remedy.dosha}
                </p>
                <p className="text-sm text-gray-300">
                  Key Ingredients: {remedy.ingredients}
                </p>
                <p className="text-sm text-gray-300">
                  Preparation Steps: {remedy.steps}
                </p>
                <p className="text-sm text-gray-300">
                  Usage Instructions: {remedy.usage}
                </p>
                <p className="text-sm text-gray-300">
                  Expected Relief Time: {remedy.reliefTime}
                </p>
              </div>
            </div>
          </div>
        ))}

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">
            Saved/Favorite Remedies
          </h2>
          <div className=" rounded p-4 text-center text-white flex flex-col gap-5">
            <div>
              <p className="text-lg font-semibold">No saved remedies yet</p>
            </div>
            <div>
              <p className="text-md text-gray-400">
                Browse remedies and save your favorites for quick access.
              </p>
            </div>
            <div className="mt-4">
              <Link
                to="/remedies"
                className="p-4 text-sm bg-gray-800 rounded-3xl font-semibold"
              >
                Browse Remedies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
