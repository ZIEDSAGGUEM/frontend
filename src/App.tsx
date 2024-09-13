// src/App.tsx
import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Accueil from "./pages/Accueil";
import NosProjets from "./pages/NosProjets";
import Produits from "./pages/Produits";
import Contact from "./pages/Contact";
import ServiceApresVente from "./pages/ServiceApresVente";
import ProductsDisplay from "./pages/ProductsDisplay";
import EspaceClient from "./pages/EspaceClient";
import AdminPage from "./pages/Admin/AdminMainPage";
import AddUser from "./pages/Admin/AddUser";
import DeleteUser from "./pages/Admin/DeleteUser";
import CreateUser from "./pages/Admin/CreateUser";
import ShowUser from "./pages/Admin/ShowUser";
import EditUser from "./pages/Admin/EditUser";

const AppContent: React.FC = () => {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/espace-client/admin");

  return (
    <>
      {!isAdminPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/nos-projets" element={<NosProjets />} />
        <Route path="/produits" element={<Produits />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service-apres-vente" element={<ServiceApresVente />} />
        <Route path="/product-details" element={<ProductsDisplay />} />
        <Route path="/espace-client" element={<EspaceClient />} />
        <Route path="/espace-client/admin" element={<AdminPage />} />
        <Route path="/espace-client/admin/add-user" element={<AddUser />} />
        <Route
          path="/espace-client/admin/edit-user/:id"
          element={<EditUser />}
        />
        <Route
          path="/espace-client/admin/delete-user/:id"
          element={<DeleteUser />}
        />
        <Route
          path="/espace-client/admin/create-user"
          element={<CreateUser />}
        />
        <Route
          path="/espace-client/admin/show-user/:id"
          element={<ShowUser />}
        />
      </Routes>
      {!isAdminPage && <Footer />}
    </>
  );
};

const App: React.FC = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);

export default App;
