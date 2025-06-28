import React from "react";

const DoshaBalance = () => {
  const doshaData = [
    { name: "Vata", percentage: 80 },
    { name: "Pitta", percentage: 40 },
    { name: "Kapha", percentage: 60 },
  ];

  return (
    <div className="mt-8 rounded-lg">
      <h2 className="text-lg text-white mb-2">Dosha Balance</h2>
      <div className="text-white mb-6">
        <p className="text-3xl font-semibold mb-2">Balanced</p>
        <p className="opacity-50">
          Current <span className="text-green-400">+5%</span>
        </p>
      </div>
      <div className="space-y-8 flex flex-col">
        {doshaData.map((dosha, index) => (
          <div
            key={index}
            className="flex items-center justify-between w-full gap-5"
          >
            <div className="flex justify-between items-center">
              <span className="text-white text-sm w-16 opacity-50">
                {dosha.name}
              </span>
            </div>
            <div className="w-full flex justify-between rounded-full h-4">
              <div
                className={`h-8 grey`}
                style={{ width: `${dosha.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoshaBalance;
