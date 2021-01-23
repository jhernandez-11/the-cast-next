import React from "react";

const infoContent = () => {
  return (
    <main className="flex justify-around place-items-center relative h-full w-full bg-gray-900 sm:overflow-hidden sm:h-screen">
      <div className="absolute bg-black w-full h-full z-10 opacity-75"></div>
      <div
        className="w-5/6 h-5/6 z-10 rounded-xl 
           min-md:max-h-120 sm:w-full sm:h-full sm:rounded-none"
        style={{ background: "rgba(30, 58, 138, .75)" }}
      >
        <div className="text-white text-2xl h-full flex justify-around mt-12 sm:grid">
          <div>
            <h1>Frontend - </h1>
            <ul className="text-blue-300 text-2xl h-1/2 mt-6 flex flex-col justify-around">
              <li>Next.js</li>
              <li>Tailwind</li>
              <li>Anime.js</li>
            </ul>
          </div>
          <div>
            <h1>Backend - </h1>
            <ul className="text-blue-300 text-2xl h-1/2 mt-6 flex flex-col justify-around">
              <li>Express</li>
              <li>Mapbox</li>
              <li>Weatherstack</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default infoContent;
