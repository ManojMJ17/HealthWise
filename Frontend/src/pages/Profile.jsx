import React from "react";
import { useState } from "react";

import { useEffect } from "react";

import { API_URL } from "../../api/AppPath";

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <>
      <div>
        <h1>Welcome, {user?.username}!</h1>
        <p>Email: {user?.email}</p>
        <p>Country: {user?.country}</p>
      </div>
    </>
  );
};

export default Profile;
