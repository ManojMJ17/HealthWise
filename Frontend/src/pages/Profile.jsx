import React, { useEffect, useState } from "react";
import { API_URL } from "../../api/AppPath";
import Navbar from "../components/Navbar";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("User not logged in");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`${API_URL}/user/profile`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errorText = await response.text();
          setError(`Failed to fetch user: ${errorText}`);
          return;
        }

        const data = await response.json();
        setUser(data.user);
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError("An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const getProfilePic = (gender) => {
    if (gender === "female") return "/anime-style-female.png";
    if (gender === "male") return "/anime-style-male.png";
    return "/default-avatar.png";
  };

  if (loading) return <p className="text-white p-4">Loading...</p>;
  if (error) return <p className="text-red-500 p-4">{error}</p>;

  return (
    <div>
        <Navbar></Navbar>
    <div className="text-white bg-gray-900 min-h-screen px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>

      <div className="flex flex-col items-center gap-2 mb-6">
        <img
          src={getProfilePic(user?.gender)}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border-2 border-gray-400"
          />
        <p className="text-xl font-semibold">{user?.username}</p>
        <p className="text-sm text-gray-400">{user?.email}</p>
      </div>

      <div className="max-w-md mx-auto space-y-4">
        {[
          { label: "Full Name", value: user?.username },
          { label: "Email", value: user?.email },
          { label: "Age", value: user?.age },
          { label: "Gender", value: user?.gender },
          // { label: "Dosha Type", value: user?.dosha_type },
          // { label: "Weight (kg)", value: user?.weight },
          // { label: "Height (cm)", value: user?.height },
          // { label: "Blood Pressure", value: user?.blood_pressure },
          // { label: "Sugar Level (mg/dL)", value: user?.sugar_level },
          // { label: "Sleep Hours (avg.)", value: user?.sleep_hours },
          // { label: "Wake-up Time", value: user?.wake_up_time },
          // { label: "Energy Levels", value: user?.energy_level },
          // { label: "Daily Screen Time (hours)", value: user?.screen_time },
          { label: "Country", value: user?.country },
        ].map((field, index) => (
          <div key={index}>
            <label className="block text-gray-400 text-sm mb-1">
              {field.label}
            </label>
            <input
              type="text"
              value={field.value || ""}
              disabled
              className="w-full bg-gray-800 text-white p-2 rounded border border-gray-700"
              />
          </div>
        ))}
      </div>
    </div>
        </div>
  );
};

export default Profile;
