import React from "react";
import { Link } from "react-router-dom";

const FeatureButton = ({ name, Icon, href }) => {
  return (
    <Link
      to={href}
      className="flex gap-2 p-4 py-5 items-center rounded-lg border-1 border-gray-600 cursor-pointer"
    >
      {Icon && <Icon className="w-5 h-5" />}
      <span>{name}</span>
    </Link>
  );
};

export default FeatureButton;
