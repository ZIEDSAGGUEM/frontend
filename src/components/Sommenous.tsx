import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";

import background1 from "../assets/images/slidder1.jpg";
import background2 from "../assets/images/slidder2.jpg";
import background3 from "../assets/images/slidder3.jpg";
import background4 from "../assets/images/slidder4.jpg";
import background5 from "../assets/images/slidder5.jpg";

const Sommenous = () => {
  const slides = [
    background1,
    background2,
    background3,
    background4,
    background5,
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 2000); // Change image every second

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div
      id="sommenous"
      className="relative flex flex-col items-center justify-center min-h-screen px-4 py-6"
      style={{
        backgroundImage: `url(${slides[currentSlide]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "multiply",
        maxWidth: "1000%", // Ensure the image does not exceed its container width
        height: "50vh", // Adjust height as per your design needs
      }}
    >
      {/* Overlay to darken the background for text readability */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white font-bold">
        <h1 className="text-3xl font-bold animate-bounce mb-4 text-yellow-400">
          Qui sommes-nous ?
        </h1>
        <p className="text-lg text-gray-200 max-w-lg mx-auto">
          J-Tronics, fondée en 2022 à Tunis par{" "}
          <span className="text-blue-500 font-bold">
            Mohamed&nbsp;Amine&nbsp;Hsouna
          </span>
          , est la{" "}
          <span className="text-yellow-500">première société tunisienne</span>{" "}
          spécialisée dans la{" "}
          <span className="text-yellow-500">
            production de systèmes de lavage self-service et automatiques de
            haute qualité
          </span>
          .
          <br />
          <br />
          Depuis ses débuts, J-Tronics s'est engagée à fournir des{" "}
          <span className="text-yellow-500">solutions innovantes</span> qui
          allient{" "}
          <span className="text-yellow-500">
            performance, durabilité et simplicité d'utilisation
          </span>{" "}
          pour répondre aux besoins les plus exigeants.
          <br />
          <br />
          Réputée pour son excellence en matière de lavage, J-Tronics continue
          d'établir de nouvelles normes dans l'industrie grâce à sa technologie
          de pointe et son engagement envers{" "}
          <span className="text-yellow-500">la satisfaction client</span>.
        </p>
      </div>
    </div>
  );
};

export default Sommenous;
