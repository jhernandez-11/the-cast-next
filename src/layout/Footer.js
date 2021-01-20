import React from "react";

const footer = () => {
  return (
    <footer
      className="flex flex-col justify-around place-items-center h-44 w-full bg-gray-700
        sm:flex-row sm:h-16"
    >
      <h3 className="text-lg text-yellow-500">&copy; Jose L Hernandez</h3>
      <h3 className="text-lg text-yellow-500">About</h3>
      <h3 className="text-lg text-yellow-500">Contact</h3>
      <h3 className="text-lg text-yellow-500">More</h3>
    </footer>
  );
};

export default footer;
