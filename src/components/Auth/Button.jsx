import React from "react";

const Button = ({ title }) => {
  return (
    <button className="px-12 py-4 bg-purple-900 uppercase tracking-wider text-xl font-bold text-purple-100 rounded-full shadow-inner drop-shadow-2xl shadow-purple-600 hover:bg-purple-800 active:drop-shadow-md">
      {title}
    </button>
  );
};

export default Button;
