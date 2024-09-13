import React from "react";

const AskedQuestions: React.FC = () => {
  return (
    <div className="relative mx-auto w-full py-16 px-5 font-sans text-gray-800 sm:px-20 md:max-w-screen-lg lg:py-24">
      <h1 className="mb-4 text-2xl font-bold text-center animate-bounce text-blue-600 sm:text-5xl xl:text-6xl mt-14">
        Service Après-Vente
      </h1>
      <h2 className="mb-5 text-center font-sans text-xl sm:text-5xl font-bold">
        Questions Fréquemment Posées
      </h2>
      <p className="mb-12 text-center text-lg text-gray-600">
        Nous avons répondu à certaines des questions fréquemment posées. Si vous
        avez d'autres questions, n'hésitez pas à nous contacter via Contact.
      </p>
      <ul className="space-y-4">
        <li className="text-left">
          <label
            htmlFor="accordion-1"
            className="relative flex flex-col rounded-md border border-gray-100 shadow-md"
          >
            <input
              type="checkbox"
              className="peer hidden"
              id="accordion-1"
              checked
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <div className="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
              <h3 className="text-base text-gray-700 lg:text-lg">
                Quels types de support technique offre J-Tronics ?
              </h3>
            </div>
            <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
              <div className="p-5">
                <p className="text-sm">
                  J-Tronics propose une assistance téléphonique et en ligne pour
                  résoudre les problèmes techniques rencontrés avec nos
                  équipements. Nous offrons également des guides d'utilisation
                  détaillés et des solutions de dépannage pour tous nos
                  produits.
                </p>
              </div>
            </div>
          </label>
        </li>
        <li className="text-left">
          <label
            htmlFor="accordion-2"
            className="relative flex flex-col rounded-md border border-gray-100 shadow-md"
          >
            <input type="checkbox" className="peer hidden" id="accordion-2" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <div className="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
              <h3 className="text-base text-gray-700 lg:text-lg">
                Comment fonctionne la maintenance préventive chez J-Tronics ?
              </h3>
            </div>
            <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
              <div className="p-5">
                <p className="text-sm">
                  Nous avons mis en place des programmes de maintenance
                  régulière pour assurer le bon fonctionnement continu de vos
                  équipements. Cela comprend des inspections périodiques et des
                  interventions de maintenance sur site pour prévenir les pannes
                  potentielles.
                </p>
              </div>
            </div>
          </label>
        </li>
        <li className="text-left">
          <label
            htmlFor="accordion-3"
            className="relative flex flex-col rounded-md border border-gray-100 shadow-md"
          >
            <input type="checkbox" className="peer hidden" id="accordion-3" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <div className="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
              <h3 className="text-base text-gray-700 lg:text-lg">
                Quelles sont les options pour les réparations et les pièces de
                rechange ?
              </h3>
            </div>
            <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
              <div className="p-5">
                <p className="text-sm">
                  En cas de besoin, notre équipe propose un service de
                  réparation rapide et efficace pour minimiser les temps
                  d'arrêt. Nous disposons également d'un stock de pièces de
                  rechange pour assurer des réparations immédiates et efficaces.
                </p>
              </div>
            </div>
          </label>
        </li>
        <li className="text-left">
          <label
            htmlFor="accordion-4"
            className="relative flex flex-col rounded-md border border-gray-100 shadow-md"
          >
            <input type="checkbox" className="peer hidden" id="accordion-4" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <div className="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
              <h3 className="text-base text-gray-700 lg:text-lg">
                Est-ce que J-Tronics offre des formations aux utilisateurs ?
              </h3>
            </div>
            <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
              <div className="p-5">
                <p className="text-sm">
                  Oui, nous organisons des sessions de formation pour vous et
                  votre équipe afin de vous familiariser avec l'utilisation et
                  l'entretien de nos équipements. Nous fournissons également une
                  documentation complète et des tutoriels vidéo pour faciliter
                  la prise en main.
                </p>
              </div>
            </div>
          </label>
        </li>
        <li className="text-left">
          <label
            htmlFor="accordion-5"
            className="relative flex flex-col rounded-md border border-gray-100 shadow-md"
          >
            <input type="checkbox" className="peer hidden" id="accordion-5" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <div className="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
              <h3 className="text-base text-gray-700 lg:text-lg">
                Comment J-Tronics gère les mises à jour et les améliorations ?
              </h3>
            </div>
            <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
              <div className="p-5">
                <p className="text-sm">
                  Nous vous tenons informés des dernières mises à jour
                  logicielles et nous proposons des améliorations pour optimiser
                  les performances de vos équipements. Notre objectif est de
                  garantir que vous bénéficiez toujours des dernières
                  technologies et fonctionnalités améliorées.
                </p>
              </div>
            </div>
          </label>
        </li>
        <li className="text-left">
          <label
            htmlFor="accordion-6"
            className="relative flex flex-col rounded-md border border-gray-100 shadow-md"
          >
            <input type="checkbox" className="peer hidden" id="accordion-6" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <div className="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
              <h3 className="text-base text-gray-700 lg:text-lg">
                Quelle est la politique de garantie et de support contractuel ?
              </h3>
            </div>
            <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
              <div className="p-5">
                <p className="text-sm">
                  Nous offrons une garantie standard sur tous nos produits, avec
                  des options pour des extensions de garantie et un support
                  contractuel personnalisé pour répondre à vos besoins
                  spécifiques en matière de maintenance et de service
                  après-vente.
                </p>
              </div>
            </div>
          </label>
        </li>
        <li className="text-left">
          <label
            htmlFor="accordion-7"
            className="relative flex flex-col rounded-md border border-gray-100 shadow-md"
          >
            <input type="checkbox" className="peer hidden" id="accordion-7" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <div className="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
              <h3 className="text-base text-gray-700 lg:text-lg">
                Comment J-Tronics mesure la satisfaction client ?
              </h3>
            </div>
            <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
              <div className="p-5">
                <p className="text-sm">
                  Nous recueillons régulièrement vos commentaires et vos
                  suggestions pour améliorer nos produits et services. Notre
                  équipe est dédiée à assurer votre satisfaction et à répondre à
                  toutes vos attentes en termes de qualité et de support.
                </p>
              </div>
            </div>
          </label>
        </li>
      </ul>
      <div className="mt-20 flex justify-center">
        <a
          href="/contact"
          className="inline-block cursor-pointer rounded-lg font-bold text-xl  text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out py-3 px-5 text-lg "
        >
          Vous avez encore des questions ?
        </a>
      </div>
    </div>
  );
};

export default AskedQuestions;
