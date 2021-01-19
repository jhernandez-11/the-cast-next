import React from "react";
import EarthBackground from "../components/UI/EarthBackground";

const infoContent = () => {
  return (
    <main className="flex justify-around place-items-center relative h-full w-full bg-gray-900 overflow-hidden">
      <div className="absolute bg-black w-full h-full z-10 opacity-75"></div>
      <div
        className="w-5/6 h-4/5 z-10 rounded-xl"
        style={{ background: "rgba(0, 0, 0, .75)" }}
      >
        <div className="text-white text-2xl h-full flex justify-around mt-12">
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
