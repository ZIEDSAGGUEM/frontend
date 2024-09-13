// src/components/Accueil.tsx
import React from "react";
import Navbar from "../components/Navbar";
import Welcome from "../components/accueil/welcome";
import Sommenous from "../components/Sommenous";
import Activite from "../components/accueil/Activite";
import AvisClients from "../components/accueil/Avisclients";
import NosServices from "../components/NosServices";

const Accueil: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Sommenous />
      <Activite />
      <NosServices />
      <AvisClients />
    </div>
  );
};

export default Accueil;
