import React from "react";
import fastwash from "../assets/images/Produits/fastwash.jpeg";
import fastwashpro from "../assets/images/faswhashpro.jpg";
import fastwashallinone from "../assets/images/fastwashAllinone.jpg";
import aspirateur from "../assets/images/Produits/aspirateurselfservice.jpeg";
import gonfleur from "../assets/images/gonfleuuur.jpg";
import detergent from "../assets/images/produitdétergent.jpeg";
import destributeur from "../assets/images/deributeur.jpg";
import accessoire1 from "../assets/images/Produits/accessoire1.jpg";
import accesoire2 from "../assets/images/Produits/accessoire2.jpg";
import accesoire3 from "../assets/images/Produits/accesoire3.jpg";
import recyclage from "../assets/images/recycliqu.jpg";

const Produits: React.FC = () => {
  return (
    <div className="p-10 text-center">
      <h1 className="mb-4 text-2xl font-bold animate-bounce text-blue-600 sm:text-5xl xl:text-6xl mt-24">
        Nos Produits
      </h1>
      {/* Section Fast-Wash */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold uppercase mb-6 text-blue-700">
          Fast-Wash
        </h2>

        <div className="flex flex-wrap justify-center gap-20">
          {/* Fast Wash Basic */}
          <div className="max-w-xs border border-gray-300 rounded-lg overflow-hidden bg-white transform transition-transform hover:scale-105">
            <div
              className="h-64 relative flex items-center justify-center w-full bg-gray-200 mb-4"
              style={{
                backgroundImage: `url(${fastwash})`,
                backgroundSize: "cover",
              }}
            ></div>
            <h3 className="text-xl font-bold mb-2">Fast Wash Basic</h3>
            <p className="text-gray-700">
              Découvrez le Fast Wash Basic, la solution ultime pour un lavage
              rapide et efficace au quotidien. Conçu pour allier performance et
              praticité, ce système de lavage révolutionnaire répond aux besoins
              des utilisateurs modernes en matière de lessive.
            </p>
            <div className="mt-5 mb-4">
              <a
                href="/product-details#fastwashbasic"
                className="inline-block rounded bg-blue-600 px-6 py-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-md focus:bg-blue-700 focus:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 active:bg-blue-800 active:shadow-md dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:active:bg-gray-900"
              >
                En savoir plus
              </a>
            </div>
          </div>

          {/* Fast Wash Pro */}
          <div className="max-w-xs border border-gray-300 rounded-lg overflow-hidden bg-white transform transition-transform hover:scale-105">
            <div
              className="h-64 relative flex items-center justify-center bg-gray-200 mb-4"
              style={{
                backgroundImage: `url(${fastwashpro})`,
                backgroundSize: "cover",
              }}
            ></div>
            <h3 className="text-xl font-bold mb-2 ">Fast Wash Pro</h3>
            <p className="text-gray-700">
              Découvrez l'efficacité maximale avec Fast Wash Pro. Conçu pour
              offrir des performances supérieures et une durabilité
              exceptionnelle, ce système de lavage avancé définit de nouvelles
              normes en technologie de blanchisserie.
            </p>
            <div className="mt-5 mb-4">
              <a
                href="/product-details#fastwashpro"
                className="inline-block rounded bg-blue-600 px-6 py-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-md focus:bg-blue-700 focus:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 active:bg-blue-800 active:shadow-md dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:active:bg-gray-900"
              >
                En savoir plus
              </a>
            </div>
          </div>

          {/* Fast Wash All-in-One */}
          <div className="max-w-xs border border-gray-300 rounded-lg overflow-hidden bg-white transform transition-transform hover:scale-105">
            <div
              className="h-64 relative flex items-center justify-center bg-gray-200 mb-4"
              style={{
                backgroundImage: `url(${fastwashallinone})`,
                backgroundSize: "cover",
              }}
            ></div>
            <h3 className="text-xl font-bold mb-2">Fast Wash All-in-One</h3>
            <p className="text-gray-700">
              Profitez de l'ultime commodité avec Fast Wash All-in-One.
              Combinant lavage, séchage et fonctionnalités avancées en une seule
              unité, c'est la solution parfaite pour les besoins modernes en
              matière de lessive.
            </p>
            <div className="mt-5 mb-4">
              <a
                href="/product-details#fastwashallinone"
                className="inline-block rounded bg-blue-600 px-6 py-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-md focus:bg-blue-700 focus:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 active:bg-blue-800 active:shadow-md dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:active:bg-gray-900"
              >
                En savoir plus
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section Produits Principaux */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold uppercase mb-6 text-blue-700">
          Produits Principaux
        </h2>

        <div className="flex flex-wrap justify-center gap-20">
          {/* Aspirateur Self Service */}
          <div className="max-w-xs border border-gray-300 rounded-lg overflow-hidden bg-white transform transition-transform hover:scale-105">
            <div
              className="h-64 relative flex items-center justify-center bg-gray-200 mb-4"
              style={{
                backgroundImage: `url(${aspirateur})`,
                backgroundSize: "cover",
              }}
            ></div>
            <h3 className="text-xl font-bold mb-2">Aspirateur Self Service</h3>
            <p className="text-gray-700">
              Découvrez l'Aspirateur Self Service, conçu pour un nettoyage sans
              effort. Idéal pour les espaces publics, il garantit un entretien
              rapide et efficace grâce à des fonctionnalités conviviales.
            </p>
            <div className="mt-5 mb-4">
              <a
                href="/product-details#aspirateurselfservice"
                className="inline-block rounded bg-blue-600 px-6 py-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-md focus:bg-blue-700 focus:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 active:bg-blue-800 active:shadow-md dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:active:bg-gray-900"
              >
                En savoir plus
              </a>
            </div>
          </div>

          {/* Gonfleur Air Self Service */}
          <div className="max-w-xs border border-gray-300 rounded-lg overflow-hidden bg-white transform transition-transform hover:scale-105">
            <div
              className="h-64 relative flex items-center justify-center bg-gray-200 mb-4"
              style={{
                backgroundImage: `url(${gonfleur})`,
                backgroundSize: "cover",
              }}
            ></div>
            <h3 className="text-xl font-bold mb-2">
              Gonfleur Air Self Service
            </h3>
            <p className="text-gray-700">
              Rencontrez le Gonfleur Air Self Service, votre solution pour le
              gonflage des pneus en déplacement. Fiable et facile à utiliser, il
              assure une pression optimale des pneus pour une sécurité accrue.
            </p>
            <div className="mt-5 mb-4">
              <a
                href="/product-details#gonfleurairselfservice"
                className="inline-block rounded bg-blue-600 px-6 py-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-md focus:bg-blue-700 focus:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 active:bg-blue-800 active:shadow-md dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:active:bg-gray-900"
              >
                En savoir plus
              </a>
            </div>
          </div>

          {/* Distributeur d'Eau d'Essuie-Glace */}
          <div className="max-w-xs border border-gray-300 rounded-lg overflow-hidden bg-white transform transition-transform hover:scale-105">
            <div
              className="h-64 relative flex items-center justify-center bg-gray-200 mb-4"
              style={{
                backgroundImage: `url(${destributeur})`,
                backgroundSize: "cover",
              }}
            ></div>
            <h3 className="text-xl font-bold mb-2">
              Distributeur d'Eau d'Essuie-Glace
            </h3>
            <p className="text-gray-700">
              Simplifiez le nettoyage de votre pare-brise avec notre
              Distributeur d'Eau d'Essuie-Glace. Toujours à portée de main,
              c'est l'outil indispensable pour une vision claire et sans
              obstruction.
            </p>
            <div className="mt-5 mb-4">
              <a
                href="/product-details#distributeurdessuieglace"
                className="inline-block rounded bg-blue-600 px-6 py-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-md focus:bg-blue-700 focus:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 active:bg-blue-800 active:shadow-md dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:active:bg-gray-900"
              >
                En savoir plus
              </a>
            </div>
          </div>

          {/* Système de Recyclage d'Eau */}
          <div className="max-w-xs border border-gray-300 rounded-lg overflow-hidden bg-white transform transition-transform hover:scale-105">
            <div
              className="h-64 relative flex items-center justify-center bg-gray-200 mb-4"
              style={{
                backgroundImage: `url(${recyclage})`,
                backgroundSize: "cover",
              }}
            ></div>
            <h3 className="text-xl font-bold mb-2">
              Système de Recyclage d'Eau
            </h3>
            <p className="text-gray-700">
              Adoptez une approche écologique avec notre Système de Recyclage
              d'Eau. Conçu pour réutiliser efficacement l'eau, il contribue à la
              conservation des ressources tout en garantissant des résultats de
              nettoyage supérieurs.
            </p>
            <div className="mt-5 mb-4">
              <a
                href="/product-details#recyclage"
                className="inline-block rounded bg-blue-600 px-6 py-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-md focus:bg-blue-700 focus:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 active:bg-blue-800 active:shadow-md dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:active:bg-gray-900"
              >
                En savoir plus
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section Accessoires */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold uppercase mb-6 text-blue-700">
          Accessoires
        </h2>

        <div className="flex flex-wrap justify-center gap-20">
          {/* Accessoire 1 */}
          <div className="max-w-xs border border-gray-300 rounded-lg overflow-hidden bg-white transform transition-transform hover:scale-105">
            <div
              className="h-64 relative flex items-center justify-center bg-gray-200 mb-4"
              style={{
                backgroundImage: `url(${detergent})`,
                backgroundSize: "cover",
              }}
            ></div>
            <h3 className="text-xl font-bold mb-2">Accessoire 1</h3>
            <p className="text-gray-700">
              Complétez votre expérience de nettoyage avec notre Accessoire 1.
              Conçu pour optimiser l'efficacité de votre système de lavage, il
              offre des performances et une durabilité exceptionnelles.
            </p>
            <div className="mt-5 mb-4">
              <a
                href="/product-details#accessoire1"
                className="inline-block rounded bg-blue-600 px-6 py-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-md focus:bg-blue-700 focus:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 active:bg-blue-800 active:shadow-md dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:active:bg-gray-900"
              >
                En savoir plus
              </a>
            </div>
          </div>

          {/* Accessoire 2 */}
          <div className="max-w-xs border border-gray-300 rounded-lg overflow-hidden bg-white transform transition-transform hover:scale-105">
            <div
              className="h-64 relative flex items-center justify-center bg-gray-200 mb-4"
              style={{
                backgroundImage: `url(${accesoire2})`,
                backgroundSize: "cover",
              }}
            ></div>
            <h3 className="text-xl font-bold mb-2">Accessoire 2</h3>
            <p className="text-gray-700">
              Optimisez votre processus de lavage avec notre Accessoire 2. Conçu
              pour s'intégrer parfaitement à votre système de lavage, il
              améliore l'efficacité et la commodité.
            </p>
            <div className="mt-5 mb-4">
              <a
                href="/product-details#accessoire2"
                className="inline-block rounded bg-blue-600 px-6 py-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-md focus:bg-blue-700 focus:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 active:bg-blue-800 active:shadow-md dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:active:bg-gray-900"
              >
                En savoir plus
              </a>
            </div>
          </div>

          {/* Accessoire 3 */}
          <div className="max-w-xs border border-gray-300 rounded-lg overflow-hidden bg-white transform transition-transform hover:scale-105">
            <div
              className="h-64 relative flex items-center justify-center bg-gray-200 mb-4"
              style={{
                backgroundImage: `url(${accesoire3})`,
                backgroundSize: "cover",
              }}
            ></div>
            <h3 className="text-xl font-bold mb-2">Accessoire 3</h3>
            <p className="text-gray-700">
              Simplifiez vos tâches de lavage avec notre Accessoire 3. Fabriqué
              avec des matériaux de haute qualité, il garantit des performances
              fiables et une longue durée de vie.
            </p>
            <div className="mt-5 mb-4">
              <a
                href="/product-details#accessoire3"
                className="inline-block rounded bg-blue-600 px-6 py-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-md focus:bg-blue-700 focus:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 active:bg-blue-800 active:shadow-md dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:active:bg-gray-900"
              >
                En savoir plus
              </a>
            </div>
          </div>

          {/* Produit Détergent */}
          <div className="max-w-xs border border-gray-300 rounded-lg overflow-hidden bg-white transform transition-transform hover:scale-105">
            <div
              className="h-64 relative flex items-center justify-center bg-gray-200 mb-4"
              style={{
                backgroundImage: `url(${detergent})`,
                backgroundSize: "cover",
              }}
            ></div>
            <h3 className="text-xl font-bold mb-2">Produit Détergent</h3>
            <p className="text-gray-700">
              Simplifiez votre nettoyage avec notre Produit Détergent
              performant. Formulé pour éliminer les taches tenaces et offrir une
              propreté éclatante, il est indispensable pour un lavage
              impeccable.
            </p>
            <div className="mt-5 mb-4">
              <a
                href="/product-details#produitdetergent"
                className="inline-block rounded bg-blue-600 px-6 py-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-md focus:bg-blue-700 focus:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 active:bg-blue-800 active:shadow-md dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:active:bg-gray-900"
              >
                En savoir plus
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Produits;
