// AvisClients.tsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Témoignages
const testimonials = [
  {
    quote:
      "L'expérience avec J-Tronics a été exceptionnelle. Le service client est réactif et l'équipe technique est très compétente. Nos machines fonctionnent parfaitement.",
    name: "Pierre Dupont",
    title: "Directeur de Production chez Tech Industries",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    quote:
      "J-Tronics a transformé notre processus de production. La qualité de leurs équipements est remarquable, et le support après-vente est impeccable.",
    name: "Marie Lemoine",
    title: "Responsable des Opérations chez CleanCo",
    image: "https://randomuser.me/api/portraits/women/47.jpg",
  },
  {
    quote:
      "Nous recommandons vivement J-Tronics pour leurs solutions innovantes et leur excellent service client. Nos performances opérationnelles ont considérablement augmenté.",
    name: "Luc Martin",
    title: "Chef de Projet chez Innovatech",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
  },
];

const AvisClients: React.FC = () => {
  // Paramètres du carrousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="max-w-screen-md mx-auto pt-10 pb-10">
      {/* Titre ajouté */}
      <h1 className="text-4xl font-bold animate-bounce mb-4 text-blue-600 text-center">
        Que disent nos clients ?
      </h1>

      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="text-center p-4">
            <svg
              className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <blockquote>
              {/* Augmenter la taille du texte */}
              <p className="text-3xl italic font-medium text-gray-900 dark:text-white">
                {testimonial.quote}
              </p>
            </blockquote>
                                              
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AvisClients;
