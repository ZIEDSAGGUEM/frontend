import React, { useState } from "react";

const Contact = () => {
  const [alertVisible, setAlertVisible] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      formData.append("access_key", "40df5f58-cb4c-4391-96e5-fb411e430b6a");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setAlertVisible(true);
        event.currentTarget.reset();

        setTimeout(() => {
          setAlertVisible(false);
        }, 4000);
      } else {
        console.error("Form submission failed:", data.message);
        // Optionally handle and display error message
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle network or other errors
    }
  };

  return (
    <div className="font-sans text-base text-gray-900 sm:px-10">
      <div className="text-base text-gray-900">
        <div className="mx-auto w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
          <div className="mx-2 pt-12 text-center md:mx-auto md:w-2/3 md:pb-12">
            <h1 className="mb-4 text-3xl font-bold animate-bounce text-blue-600 sm:text-5xl xl:text-6xl mt-24">
              Contactez-nous
            </h1>
            <div className="text-lg sm:text-xl xl:text-xl">
              <div className="text-gray-900">
                <p className="mb-2">
                  Vous avez des questions sur nos produits ou nos services ?
                </p>
                <p className="mb-4">
                  N'hésitez pas à nous contacter directement en utilisant le
                  formulaire ci-dessous. Nous sommes là pour vous aider dans vos
                  projets et répondre à vos besoins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mb-20 flex w-full max-w-screen-lg flex-col overflow-hidden rounded-xl text-gray-900 md:flex-row md:border md:shadow-lg">
        <form
          onSubmit={handleSubmit}
          className="mx-auto w-full max-w-xl border-gray-200 px-10 py-8 md:px-8"
        >
          <input
            type="hidden"
            name="access_key"
            value="40df5f58-cb4c-4391-96e5-fb411e430b6a"
          />

          <div className="mb-4">
            <label htmlFor="name" className="text mb-2 block font-medium">
              Nom complet :
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text mb-2 block font-medium">
              Votre e-mail :
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="text mb-2 block font-medium">
              Numéro de téléphone :
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="governorate"
              className="text mb-2 block font-medium"
            >
              Gouvernorat :
            </label>
            <select
              id="governorate"
              name="governorate"
              className="w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring"
              required
            >
              <option value="">Sélectionnez votre gouvernorat</option>
              <option value="Tunis">Tunis</option>
              <option value="Ariana">Ariana</option>
              <option value="Ben Arous">Ben Arous</option>
              <option value="Manouba">Manouba</option>
              <option value="Béja">Béja</option>
              <option value="Bizerte">Bizerte</option>
              <option value="Gabès">Gabès</option>
              <option value="Gafsa">Gafsa</option>
              <option value="Jendouba">Jendouba</option>
              <option value="Kairouan">Kairouan</option>
              <option value="Kasserine">Kasserine</option>
              <option value="Kébili">Kébili</option>
              <option value="Le Kef">Le Kef</option>
              <option value="Mahdia">Mahdia</option>
              <option value="Médenine">Médenine</option>
              <option value="Monastir">Monastir</option>
              <option value="Nabeul">Nabeul</option>
              <option value="Sfax">Sfax</option>
              <option value="Sidi Bouzid">Sidi Bouzid</option>
              <option value="Siliana">Siliana</option>
              <option value="Sousse">Sousse</option>
              <option value="Tataouine">Tataouine</option>
              <option value="Tozeur">Tozeur</option>
              <option value="Zaghouan">Zaghouan</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="text mb-2 block font-medium">
              Sujet :
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="text mb-2 block font-medium">
              Message :
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring"
            ></textarea>
          </div>
          <div className="flex items-center">
            <div className="flex-1"></div>
            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-4 py-3 text-center font-bold text-white hover:bg-blue-700"
            >
              Envoyer le message
            </button>
          </div>
        </form>
        <div className="mt-10 md:mt-0 md:ml-auto w-full max-w-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.2559819688343!2d10.181642315413373!3d36.8066518758187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjrCsDI1JzMwLjAiTiAxMMKwMzInMzIuOSJF!5e0!3m2!1sfr!2stn!4v1622821223027!5m2!1sfr!2stn"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            title="Emplacement de J-Tronics"
          ></iframe>

          <div className="bg-blue-600 px-10 py-8 text-gray-100">
            <p className="mb-4 font-medium border-b pb-2">HEURES DE BUREAU</p>
            <p className="mb-4">Lundi – Vendredi : 08:30 – 17:00</p>
            <p className="mb-4">Samedi : 08:30 - 13:00</p>
            <p className="mb-4">Dimanche : Fermé</p>
            <p className="mb-4">
              Email :{" "}
              <a
                href="mailto:support@apps.io"
                className="font-semibold underline"
              >
                commercial@jtronics.org
              </a>
            </p>
            <p className="mb-4">
              Téléphone :{" "}
              <a href="tel:+460103232322" className="font-semibold underline">
                +21626800203
              </a>
            </p>
            <hr className="my-2 h-0 border-t border-r-0 border-b-0 border-l-0 border-gray-300" />
            <p className="mb-4">Numéro d'entreprise :+21674881927</p>
          </div>
        </div>
      </div>
      {alertVisible && (
        <div className="fixed bottom-0 inset-x-0 pb-2 sm:pb-5">
          <div className="max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="p-2 rounded-lg bg-green-500 shadow-lg sm:p-3">
              <div className="flex items-center justify-between flex-wrap">
                <div className="w-0 flex-1 flex items-center">
                  <span className="flex p-2 rounded-lg bg-green-600">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <p className="ml-3 font-medium text-white truncate">
                    Le message a été envoyé avec succès. Nous vous contacterons
                    bientôt.
                  </p>
                </div>
                <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
                  <button
                    onClick={() => setAlertVisible(false)}
                    type="button"
                    className="-mr-1 flex p-2 rounded-md hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                  >
                    <span className="sr-only">Fermer</span>
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
