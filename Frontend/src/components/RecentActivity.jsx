import React from "react";
import { BookMarked } from "lucide-react";

const activities = [
  {
    title: "Remedy for Headache",
    description: "Accessed 2days ago.",
  },
  {
    title: "Remedy for Cold",
    description: "Accessed 5days ago.",
  },
];

const RecentActivity = () => {
  return (
    <div className="mt-14">
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {activities.length > 0 ? (
          activities.map((activity, index) => (
            <div
              key={index}
              className="flex justify-between items-start p-4 rounded-md hover:bg-gray-600 transition"
            >
              <div className="flex items-center justify-center gap-4">
                <div className="grey w-12 h-12 rounded-lg flex items-center justify-center ">
                  <BookMarked />
                </div>
                <div>
                  <p className="text-white text-lg">{activity.title}</p>
                  <p className="text-sm text-gray-400">
                    {activity.description}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No recent activity to display.</p>
        )}
      </div>
    </div>
  );
};

export default RecentActivity;
