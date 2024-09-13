import React from "react";

import fastwash from "../assets/images/Produits/fastwash.jpeg";
import fastwashpro from "../assets/images/Produits/fastwashpro.jpg";

import fastwashallinone from "../assets/images/fastwashAllinone.jpg";

import aspirateur from "../assets/images/Produits/aspirateurselfservice.jpeg";

import gonfleur from "../assets/images/gonfleuuur.jpg";

import detergent from "../assets/images/Produits/produitdétergent.jpeg";

import destributeur from "../assets/images/destributeurd'eaud'essuieglace.jpeg";

import recyclage from "../assets/images/Produits/Système de recyclage d'eau.jpg";


const ProductsDisplay = () => {
  return (
    <div className="py-12 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Nos Produits
        </h1>

        {/* Product Section 1: Fast Wash Basic */}
        <div
          className="flex flex-col md:flex-row items-center mb-10"
          id=""
        >
          <div className="md:flex-1 px-4 mb-4 md:mb-0">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={fastwash}
                alt="Fast Wash Basic"
              />
            </div>
          </div>
          <div className="md:flex-1 px-4 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Fast Wash Basic
            </h2>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
              Caractéristiques Techniques
            </h3>
            <ul className="text-gray-600 dark:text-gray-300 text-sm list-disc list-inside space-y-2">
              <li>Module en Alucobond</li>
              <li>Châssis en acier galvanisé</li>
              <li>4 choix de cycles de lavage</li>
              <li>Pompe HP 230v ou 380v, pression max 200 bar</li>
              <li>Bras tournant en inox avec pivot tournant à 360°</li>
              <li>Système d’injection de détergent 1 L/h</li>
              <li>Système de surveillance</li>
              <li>Système de traçabilité via Wifi</li>
              <li>Projecteur LED IP65 avec détecteur de mouvement</li>
            </ul>
          </div>
        </div>

        {/* Product Section 2: Fast Wash Pro */}
        <div
          className="flex flex-col md:flex-row items-center mb-10"
          id="fastwashpro"
        >
          <div className="md:flex-1 px-4 mb-4 md:mb-0">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={fastwashpro}
                alt="Fast Wash Pro"
              />
            </div>
          </div>
          <div className="md:flex-1 px-4 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Fast Wash Pro
            </h2>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
              Caractéristiques Techniques
            </h3>
            <ul className="text-gray-600 dark:text-gray-300 text-sm list-disc list-inside space-y-2">
              <li>Module en Alucobond : 120x75x200cm</li>
              <li>Châssis en acier galvanisé</li>
              <li>Système de commande</li>
              <li>Réservoir intégré 500L avec remplissage automatique</li>
              <li>Osmoseur 960L/jour</li>
              <li>Pompe HP 230V ou 380V, pression max 200 bar</li>
              <li>Deux bras tournants en inox avec pivot tournant à 360°</li>
              <li>Système d’injection de détergent 1 L/h</li>
              <li>Lance HP avec flexible 5m et support en inox</li>
              <li>
                Lance avec brosse aux poils de sanglier avec flexible 5m et
                support en inox
              </li>
              <li>Système de surveillance</li>
              <li>Système de traçabilité via Wifi</li>
              <li>Projecteur LED IP65 avec détecteur de mouvement</li>
            </ul>
          </div>
        </div>

        {/* Product Section 3: Fast Wash All-in-One */}
        <div
          className="flex flex-col md:flex-row items-center mb-10"
          id="fastwashallinone"
        >
          <div className="md:flex-1 px-4 mb-4 md:mb-0">
            <div className="h-[460px] rounded-lg  dark:bg-gray-700">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={fastwashallinone}
                alt="Fast Wash All-in-One"
              />
            </div>
          </div>
          <div className="md:flex-1 px-4 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Fast Wash All-in-One
            </h2>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
              Caractéristiques Techniques
            </h3>
            <ul className="text-gray-600 dark:text-gray-300 text-sm list-disc list-inside space-y-2">
              <li>Module en Alucobond : 120x75x200cm</li>
              <li>Châssis en acier galvanisé</li>
              <li>
                Système de paiement RFID avec 20 jetons, afficheur numérique
                avec 5 boutons en inox IP67
              </li>
              <li>Réservoir intégré 500L avec remplissage automatique</li>
              <li>Osmoseur 960L/jour</li>
              <li>Pompe HP 230V ou 380V, pression max 200 bar</li>
              <li>Deux bras tournants en inox avec pivot tournant à 360°</li>
              <li>5 choix de cycles de lavage</li>
              <li>Système d’injection de détergent 1 L/h</li>
              <li>
                Aspirateur : 2000W, flexible 5m avec support en inox, mouffe
                tournante à 360°
              </li>
              <li>
                Lance avec brosse aux poils de sanglier avec flexible 5m et
                support en inox
              </li>
              <li>Système de surveillance</li>
              <li>Système de traçabilité via Wifi</li>
              <li>Projecteur LED IP65 avec détecteur de mouvement</li>
              <li>Lance HP avec flexible 5m et support en inox</li>
            </ul>
          </div>
        </div>

        {/* Product Section 4: Aspirateur Self-Service */}
        <div
          className="flex flex-col md:flex-row items-center mb-10"
          id="aspirateurselfservice"
        >
          <div className="md:flex-1 px-4 mb-4 md:mb-0">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={aspirateur}
                alt="Aspirateur Self-Service"
              />
            </div>
          </div>
          <div className="md:flex-1 px-4 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Aspirateur Self-Service
            </h2>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
              Caractéristiques Techniques
            </h3>
            <ul className="text-gray-600 dark:text-gray-300 text-sm list-disc list-inside space-y-2">
              <li>Module en Alucobond</li>
              <li>Châssis en acier galvanisé</li>
              <li>Monnayeur électronique</li>
              <li>
                Aspirateur double moteurs Pmax 2400W pour poussière/liquides
              </li>
              <li>Flexible 5m de haute qualité</li>
              <li>Mouffe tournante à 360°</li>
            </ul>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row items-center mb-10"
          id="gonfleurairselfservice"
        >
          <div className="md:flex-1 px-4 mb-4 md:mb-0">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={gonfleur}
                alt="Gonfleur air self service"
              />
            </div>
          </div>
          <div className="md:flex-1 px-4 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Gonfleur air self service
            </h2>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
              Caractéristiques Techniques
            </h3>
            <ul className="text-gray-600 dark:text-gray-300 text-sm list-disc list-inside space-y-2">
              <li>Module Alucobond : 30x30x150 cm</li>
              <li>Monnayeur électronique</li>
              <li>Afficheur numérique</li>
              <li>Flexible 5m avec manomètre</li>
              <li>Pmax 6 bar</li>
            </ul>
          </div>
        </div>

        {/* Product Section 5: Distributeur d'eau essuie-glace */}
        <div
          className="flex flex-col md:flex-row items-center mb-10"
          id="distributeurdeauessuieglace"
        >
          <div className="md:flex-1 px-4 mb-4 md:mb-0">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={destributeur}
                alt="Distributeur d'eau essuie-glace"
              />
            </div>
          </div>
          <div className="md:flex-1 px-4 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Distributeur d'eau essuie-glace
            </h2>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
              Caractéristiques Techniques
            </h3>
            <ul className="text-gray-600 dark:text-gray-300 text-sm list-disc list-inside space-y-2">
              <li>Module en Alucobond : 141x74x70 cm</li>
              <li>
                Monnayeur électronique : pièces acceptées sont 1dt, 2dt et 5dt
              </li>
              <li>Réservoir 200 Litres avec remplissage automatique</li>
              <li>Indication de réservoir vide avec voyant rouge</li>
              <li>Système de recyclage d'eau</li>
            </ul>
          </div>
        </div>

        {/* Product Section 9: Système de recyclage d'eau Jtronics */}
        <div
          className="flex flex-col md:flex-row items-center mb-10"
          id="systemederecyclagedeseau"
        >
          <div className="md:flex-1 px-4 mb-4 md:mb-0">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={recyclage}
                alt="Système de recyclage d'eau Jtronics"
              />
            </div>
          </div>
          <div className="md:flex-1 px-4 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Système de recyclage d'eau Jtronics
            </h2>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
              Caractéristiques Techniques
            </h3>
            <ul className="text-gray-600 dark:text-gray-300 text-sm list-disc list-inside space-y-2">
              <li>Débouilleur et déshuileur</li>
              <li>
                Cartouche à différentes tailles S/M/L suivant le nombre de
                pistes
              </li>
              <li>Fait jusqu’à 75% d'économie d'eau</li>
              <li>Système de commande et stockage intégré dans le module</li>
              <li>Pompe de circulation</li>
              <li>Filtre à sable</li>
              <li>Compresseur d'air</li>
            </ul>
          </div>
        </div>

        {/* Product Section 7: Produits détergent */}
        <div
          className="flex flex-col md:flex-row items-center mb-10"
          id="produitsdetergent"
        >
          <div className="md:flex-1 px-4 mb-4 md:mb-0">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={detergent}
                alt="Produits détergent"
              />
            </div>
          </div>
          <div className="md:flex-1 px-4 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Produit détergent
            </h2>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
              Caractéristiques Techniques
            </h3>
            <ul className="text-gray-600 dark:text-gray-300 text-sm list-disc list-inside space-y-2">
              <li>Shampoing Automobile J-Tronics</li>
              <li>Tapis de shampoing</li>
              <li>Cire pour brillance et protection</li>
              <li>Système de commande et stockage intégré dans le module</li>
              <li>Pompe de circulation</li>
              <li>Filtre à sable</li>
              <li>Compresseur d'air</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDisplay;
