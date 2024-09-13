import React, { useState } from "react";
import axios from "axios";

const EspaceClient = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    station: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

 const handleChange = (
   e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
 ) => {
   setFormData({ ...formData, [e.target.name]: e.target.value });
 };


  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();
     setError("");
     setLoading(true);

     try {
       const response = await axios.post(
         "http://localhost:5000/espace-client",
         formData
       );
       console.log("Response data:", response.data);
      
       const { token, redirectUrl } = response.data;
       
       if (token) {
         // Store token in localStorage
         localStorage.setItem("token", token);
       }
       if (redirectUrl) {
         window.location.href = redirectUrl;
       } else {
         console.error("Redirect URL not found");
       }
     } catch (error) {
       console.error("Error logging in:", error);
       setError("Error logging in. Please check your credentials.");
     } finally {
       setLoading(false);
     }
   };

  return (
    <div className="flex min-h-screen w-screen items-center justify-center text-gray-600 bg-gray-50">
      <div className="relative pt-20 my-10">
        <div className="hidden sm:block h-56 w-56 text-indigo-300 absolute z-10 -left-20 -top-20"></div>
        <div className="hidden sm:block h-28 w-28 text-indigo-300 absolute z-10 -right-20 -bottom-20"></div>

        <div className="relative flex flex-col sm:w-[30rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
          <div className="flex-auto p-6">
            <div className="mb-10 flex items-center justify-center overflow-hidden">
              <a
                href="/espace-client"
                className="flex cursor-pointer items-center gap-2 text-indigo-500 no-underline hover:text-indigo-500"
              >
                <span className="mb-4 text-3xl font-bold animate-bounce text-blue-600 sm:text-5xl xl:text-6xl mt-24">
                  Espace Client
                </span>
              </a>
            </div>

            <p className="mb-2 font-medium text-gray-700 xl:text-xl">
              Bienvenue sur Espace Client !
            </p>
            <p className="mb-6 text-gray-500">
              Veuillez vous connecter pour accéder à votre compte.
            </p>

            <form onSubmit={handleSubmit} className="mb-4">
              <div className="mb-4">
                <label
                  htmlFor="firstName"
                  className="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                >
                  Prénom
                </label>
                <input
                  type="text"
                  className="block w-full appearance-none rounded-md border border-gray-400 bg-white py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                  id="firstName"
                  name="firstName"
                  placeholder="Entrez votre prénom"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="lastName"
                  className="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                >
                  Nom
                </label>
                <input
                  type="text"
                  className="block w-full appearance-none rounded-md border border-gray-400 bg-white py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                  id="lastName"
                  name="lastName"
                  placeholder="Entrez votre nom"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="station"
                  className="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                >
                  Station :
                </label>
                <select
                  id="station"
                  name="station"
                  className="w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring"
                  value={formData.station}
                  onChange={handleChange}
                  required
                >
                  <option value="">Sélectionnez votre station</option>
                  <option value="Djebeniana">Djebeniana</option>
                  <option value="Regueb">Regueb</option>
                  <option value="Zarzis">Zarzis</option>
                  <option value="AlAmra">Al Amra</option>
                  <option value="Al Khalil">Al Khalil</option>
                  <option value="Djerba">Djerba</option>
                  <option value="Mahdia">Mahdia</option>
                  <option value="Chabba">Chabba</option>
                  <option value="Mednin">Mednin</option>
                  <option value="NA">NA</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                >
                  Votre Email
                </label>
                <input
                  type="email"
                  className="block w-full appearance-none rounded-md border border-gray-400 bg-white py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                  id="email"
                  name="email"
                  placeholder="Entrez votre email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoFocus
                />
              </div>
              <div className="mb-4">
                <div className="flex justify-between">
                  <label
                    className="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                    htmlFor="password"
                  >
                    Mot de passe
                  </label>
                </div>
                <div className="relative flex w-full flex-wrap items-stretch">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="relative block flex-auto appearance-none rounded-md border border-gray-400 bg-white py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                    name="password"
                    placeholder="············"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <div className="block">
                  <input
                    className="mt-1 mr-2 h-5 w-5 rounded border border-gray-300 bg-contain bg-no-repeat align-top text-black shadow checked:bg-blue-500 focus:border-blue-500 focus:shadow"
                    type="checkbox"
                    id="show-password"
                    checked={showPassword}
                    onChange={handleShowPassword}
                    style={{
                      backgroundImage:
                        "url('data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 10l3 3l6-6'/%3e%3c/svg%3e')",
                    }}
                  />
                  <label className="inline-block" htmlFor="show-password">
                    {" "}
                    Afficher mot de passe{" "}
                  </label>
                </div>
              </div>
              <div className="mb-4">
                <button
                  className="grid w-full cursor-pointer select-none rounded-md border border-indigo-500 bg-indigo-500 py-2 px-5 text-center text-sm text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                  type="submit"
                >
                  {loading ? "Chargement..." : "Se connecter"}
                </button>
              </div>
              {error && (
                <div className="text-red-500 text-center mt-4">{error}</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EspaceClient;
