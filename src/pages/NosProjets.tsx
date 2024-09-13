import React from "react";

import location from "../assets/images/8929788.png";
import djebeniana from "../assets/images/jbeniana.png";
import zarzis from "../assets/images/Zarzis.jpg";
import alkhalil from "../assets/images/al khalil.jpg";
import rgueb from "../assets/images/reguebb.jpg";
import chebba from "../assets/images/chebbaaa.jpg";

import amraa from "../assets/images/al amraaa.jpg";

const NosStations: React.FC = () => {
  return (
    <div className="p-20 text-center">
      <section className="mt-10">
        <h1 className="mb-4 text-2xl font-bold animate-bounce text-blue-600 sm:text-5xl xl:text-6xl mt-22">
          Nos Stations
        </h1>

        <div className="flex flex-wrap justify-center gap-20 mt-10">
          {/* Let's Wash Park Jebeniana */}
          <div className="max-w-xs border border-gray-300 rounded-lg overflow-hidden bg-white">
            <div className="bg-gray-200 h-64 relative flex items-center justify-center mb-4">
              <img
                src={djebeniana}
                alt="DJebeniana Image"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-bold mb-2">
              Let's Wash Park Djebeniana
            </h2>
            <div className="p-4">
              <p className="text-gray-700">
                Découvrez notre première station Let's Wash Park à Djebeniana :
                réalisée en janvier 2022
                <span className="hidden">
                  Cette station marque le début de notre engagement à fournir
                  des services de lavage de qualité supérieure dans la région.
                </span>
              </p>
            </div>
            <a
              href="https://maps.app.goo.gl/TVqYAAXS7sYkvnZX9"
              target="_blank"
              className="block px-4 py-2 text-sm font-bold text-white bg-blue-600 rounded-md hover:shadow-md hover:bg-yellow-400 focus:shadow-md transition duration-300 ease-in-out border-b-2 border-transparent"
            >
              <img
                src={location}
                alt="Location Icon"
                className="inline-block mr-2 h-6"
              />
              Localisation Djebeniana
            </a>
          </div>

          {/* Let's Wash Park Regueb */}
          <div className="max-w-xs border border-gray-300 rounded-lg overflow-hidden bg-white">
            <div className="h-64 relative flex items-center justify-center bg-gray-200 mb-4">
              <img
                src={rgueb}
                alt="regueb Image"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-bold mb-2">Let's Wash Park Regueb</h2>
            <div className="p-4">
              <p className="text-gray-700">
                Découvrez notre deuxiéme station Let's Wash Park à Regueb :
                réalisée en janvier 2022
              </p>
            </div>
            <a
              href="https://maps.app.goo.gl/fwrnS1wXKX71178c8"
              target="_blank"
              className="block px-4 py-2 text-sm font-bold text-white bg-blue-600 rounded-md hover:shadow-md hover:bg-yellow-400 focus:shadow-md transition duration-300 ease-in-out border-b-2 border-transparent"
            >
              <img
                src={location}
                alt="Location Icon"
                className="inline-block mr-2 h-6"
              />
              Localisation Regueb
            </a>
          </div>

          {/* Let's Wash Park Zarzis */}
          <div className="max-w-xs border border-gray-300 rounded-lg overflow-hidden bg-white">
            <div className="h-64 relative flex items-center justify-center bg-gray-200 mb-4">
              <img
                src={zarzis}
                alt="Zarzis Image"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-bold mb-2">Let's Wash Park Zarzis</h2>
            <div className="p-4">
              <p className="text-gray-700">
                Découvrez notre troisiéme station Let's Wash Park à Zarzis :
                réalisée en janvier 2022
              </p>
            </div>
            <a
              href="https://maps.app.goo.gl/A87CTuNde43AwCkZ7"
              target="_blank"
              className="block px-4 py-2 text-sm font-bold text-white bg-blue-600 rounded-md hover:shadow-md hover:bg-yellow-400 focus:shadow-md transition duration-300 ease-in-out border-b-2 border-transparent"
            >
              <img
                src={location}
                alt="Location Icon"
                className="inline-block mr-2 h-6"
              />
              Localisation Zarzis
            </a>
          </div>

          {/* Let's Wash Park Al Khalil */}
          <div className="max-w-xs border border-gray-300 rounded-lg overflow-hidden bg-white">
            <div className="h-64 relative flex items-center justify-center bg-gray-200 mb-4">
              <img
                src={alkhalil}
                alt="Al Khalil Image"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-bold mb-2">
              Let's Wash Park Al Khalil
            </h2>
            <div className="p-4">
              <p className="text-gray-700">
                Découvrez notre quatriéme station Let's Wash Park à Al Khalil :
                réalisée en janvier 2022
              </p>
            </div>

            <a
              href="https://maps.app.goo.gl/3qJWCM2wDZfH3esZ8"
              target="_blank"
              className="block px-4 py-2 mt-4 text-sm font-bold text-white bg-blue-600 rounded-md hover:shadow-md hover:bg-yellow-400 focus:shadow-md transition duration-300 ease-in-out border-b-2 border-transparent"
              // This style ensures the link appears at the bottom
            >
              <img
                src={location}
                alt="Location Icon"
                className="inline-block mr-2 h-6"
              />
              Localisation Al Khalil
            </a>
          </div>

          {/* Let's Wash Park Al Amra */}
          <div className="max-w-xs border border-gray-300 rounded-lg overflow-hidden bg-white">
            <div className="h-64 relative flex items-center justify-center bg-gray-200 mb-4">
              <img
                src={amraa}
                alt="regueb Image"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-bold mb-2">Let's Wash Park Al Amra</h2>
            <div className="p-4">
              <p className="text-gray-700">
                Découvrez notre cinquiéme station Let's Wash Park à Al Amra :
                réalisée en janvier 2022
              </p>
            </div>

            <a
              href="https://maps.app.goo.gl/ftvmvgvQnPve3BDL7"
              className="block px-4 py-2 mt-4 text-sm font-bold text-white bg-blue-600 rounded-md hover:shadow-md hover:bg-yellow-400 focus:shadow-md transition duration-300 ease-in-out border-b-2 border-transparent "
            >
              <img
                src={location}
                alt="Location Icon"
                className="inline-block mr-2 h-6"
              />
              Localisation Al Amra
            </a>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="flex flex-wrap justify-center gap-20">
          {/* Let's Wash Park Djerba */}
          <div className="max-w-xs border border-gray-300 rounded-lg overflow-hidden bg-white">
            <div className="h-64 relative flex items-center justify-center bg-gray-200 mb-4">
              <img
                src={chebba}
                alt="chebba Image"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-bold mb-2">Let's Wash Park Chebba</h2>
            <div className="p-7">
              <p className="text-gray-700">
                Découvrez notre nouvelle station Let's Wash Park à Chebba :
                réalisée Juillet 2024
              </p>
            </div>

            <a
              href="/nos-projets"
              className="block px-4 py-2 mt-4 text-sm font-bold text-white bg-blue-600 rounded-md hover:shadow-md hover:bg-yellow-400 focus:shadow-md transition duration-300 ease-in-out border-b-2 border-transparent"
            >
              <img
                src={location}
                alt="Location Icon"
                className="inline-block mr-2 h-6"
              />
              Localisation Chebba
            </a>
          </div>

          {/* Let's Wash Park mahdia */}
          <div className="max-w-xs border border-gray-300 rounded-lg overflow-hidden bg-white">
            <div className="h-64 relative flex items-center justify-center bg-gray-200 mb-4">
              <p className="text-gray-700 pt-16">Bientôt</p> {/* Placeholder */}
            </div>
            <h2 className="text-xl font-bold mb-2">Let's Wash Park Mahdia</h2>
            <div className="p-7">
              <p className="text-gray-700">
                Découvrez notre nouvelle station Let's Wash Park à Mahdia :
                réalisée Bientôt
              </p>
            </div>

            <a
              href="/nos-projets"
              className="block px-4 py-2 mt-4 text-sm font-bold text-white bg-blue-600 rounded-md hover:shadow-md hover:bg-yellow-400 focus:shadow-md transition duration-300 ease-in-out border-b-2 border-transparent"
            >
              <img
                src={location}
                alt="Location Icon"
                className="inline-block mr-2 h-6"
              />
              Localisation Mahdia
            </a>
          </div>

          {/* Let's Wash Park chebba */}
          <div className="max-w-xs border border-gray-300 rounded-lg overflow-hidden bg-white">
            <div className="h-64 relative flex items-center justify-center bg-gray-200 mb-4">
              <p className="text-gray-700 pt-16">Bientôt</p> {/* Placeholder */}
            </div>
            <h2 className="text-xl font-bold mb-2">Let's Wash Park Djerba</h2>
            <div className="p-7 ">
              <p className="text-gray-700">
                Découvrez notre première station Let's Wash Park à Djerba :
                réalisée Bientôt
              </p>
            </div>

            <a
              href="/nos-projets"
              className="block px-4 py-2 mt-4 text-sm font-bold text-white bg-blue-600 rounded-md hover:shadow-md hover:bg-yellow-400 focus:shadow-md transition duration-300 ease-in-out border-b-2 border-transparent"
            >
              <img
                src={location}
                alt="Location Icon"
                className="inline-block mr-2 h-6"
              />
              Localisation djerba
            </a>
          </div>
        </div>

        {/* Let's Wash Park mednin */}
        <div className="max-w-xs border border-gray-300 rounded-lg overflow-hidden bg-white mx-auto mt-20">
          <div className="h-64 relative flex items-center justify-center bg-gray-200 mb-4">
            <p className="text-gray-700 pt-16">Bientôt</p> {/* Placeholder */}
          </div>
          <h2 className="text-xl font-bold mb-2">Let's Wash Park Mednin</h2>
          <div className="p-4">
            <p className="text-gray-700">
              Découvrez notre première station Let's Wash Park à Mednin :
              réalisée bientôt
            </p>
          </div>

          <a
            href="/nos-projets"
            className="block px-4 py-2 mt-4 text-sm font-bold text-white bg-blue-600 rounded-md hover:shadow-md hover:bg-yellow-400 focus:shadow-md transition duration-300 ease-in-out border-b-2 border-transparent"
          >
            <img
              src={location}
              alt="Location Icon"
              className="inline-block mr-2 h-6"
            />
            Localisation Mednin
          </a>
        </div>
      </section>

      {/* Bouton Contact */}
      <div className="mt-14">
        <a
          href="/contact"
          className="inline-block px-8 py-4 text-xl font-bold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Contactez-nous pour plus d'informations
        </a>
      </div>
    </div>
  );
};

export default NosStations;
