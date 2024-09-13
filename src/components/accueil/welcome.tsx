// src/components/accueil/Welcome.tsx
import React from "react";
import background from "../../assets/images/backgroundimage1.jpg";
import { Link } from "react-router-dom";


const Welcome: React.FC = () => {
  return (
    <div>
      <section
        className="bg-center bg-no-repeat bg-cover bg-gray-400 bg-blend-multiply"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
        }} // Adjusted height for better visibility
      >
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Fabricant d'équipement de lavage self-service
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Créez votre propre centre de lavage dans votre région !
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <Link
              to="/contact"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Nous contactez
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
            <a
              href="#sommenous" // Corrected the ID to match the component ID
              className="inline-flex justify-center bg-yellow-400 hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Qui sommes-nous ?
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
