import React from "react";

// Import the images
import maintenance from "../assets/images/svg/maintenance.jpeg";
import piece from "../assets/images/svg/piece.jpeg";
import truck from "../assets/images/svg/truck.jpeg";

const NosServices = () => {
  return (
    <div className="bg-gray-100 py-8 text-center">
      <h1 className="text-4xl font-bold animate-bounce mb-4 text-blue-600 text-center">
        Nos Services
      </h1>
      <div className="flex flex-wrap justify-center space-x-8 pt-10 ml-2">
        {/* Installation & Maintenance Service */}
        <div className="flex flex-col items-center">
          <a href="/contact">
            <img
              src={maintenance}
              alt="Installation & Maintenance"
              className="w-24 h-24 mb-4 rounded-full shadow-lg"
            />
          </a>
          <span className="text-lg font-semibold">
            <a href="/contact">Installation & Maintenance</a>
          </span>
        </div>

        {/* Pièces De Rechange Service */}
        <div className="flex flex-col items-center">
          <a href="/produits">
            <img
              src={piece}
              alt="Pièces De Rechange"
              className="w-24 h-24 mb-4 rounded-full shadow-lg"
            />
          </a>
          <span className="text-lg font-semibold">
            <a href="/produits">Pièces De Rechange</a>
          </span>
        </div>

        {/* Service Après-Vente Hotline 7/7 */}
        <div className="flex flex-col items-center">
          <a href="/service-apres-vente">
            <img
              src={truck}
              alt="Service Après-Vente"
              className="w-24 h-24 mb-4 rounded-full shadow-lg"
            />
          </a>
          <span className="text-lg font-semibold">
            <a href="/service-apres-vente">Service Après-Vente Hotline 7/7</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NosServices;