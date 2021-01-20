import React from "react";

const footer = () => {
  return (
    <footer
      className="flex flex-col justify-around place-items-center h-44 w-full bg-gray-900
        sm:flex-row sm:h-16"
    >
      <h3 className="text-lg text-yellow-300">&copy; Jose L Hernandez</h3>
      <h3 className="text-lg text-yellow-300">About</h3>
      <h3 className="text-lg text-yellow-300">Contact</h3>
      <h3 className="text-lg text-yellow-300">More</h3>
    </footer>
  );
};

export default footer;
