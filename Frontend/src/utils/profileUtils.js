// src/utils/profileUtils.js
export const getProfilePic = (gender) => {
    if (gender === "female") return "/anime-style-female.png";
    if (gender === "male") return "/anime-style-male.png";
    return "/default-avatar.png";
};
