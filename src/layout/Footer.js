import React from "react";

const footer = () => {
  return (
    <footer
      className="flex flex-row justify-around place-items-center h-24 w-full bg-gray-900 
        sm:h-36 sm:flex-col"
    >
      <h3 className="text-lg text-yellow-300">&copy; Jose L Hernandez</h3>
      <a className="text-lg text-yellow-300" href="https://portfolio-sage-zeta.vercel.app/about" target="_blank">About</a>
      <a className="text-lg text-yellow-300" href="https://portfolio-sage-zeta.vercel.app" target="_blank">Contact</a>
      <a className="text-lg text-yellow-300" href="https://portfolio-sage-zeta.vercel.app/developments" target="_blank">More</a>
    </footer>
  );
};

export default footer;
