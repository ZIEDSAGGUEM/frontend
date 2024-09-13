import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import ClientsTable from "../../components/home/ClientsTable";

const AdminMainPage = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    const fetchClients = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:5000/espace-client/admin/clients", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`, // Ensure the token is stored in localStorage or context
          },
        });
        setClients(response.data.data);
      } catch (error) {
        console.error("Error in GET request:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button
          className={`bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg ${showType === "table" ? "bg-sky-600 text-white" : ""}`}
          onClick={() => setShowType("table")}
        >
          Clients
        </button>
        <button
          className={`bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg ${showType === "card" ? "bg-sky-600 text-white" : ""}`}
          onClick={() => setShowType("card")}
        >
          Dashboard
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Liste clients</h1>
        <Link to="/espace-client/admin/add-user">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <ClientsTable Clients={clients} />
      ) : (
        <ClientsTable Clients={clients} />
      )}
    </div>
  );
};

export default AdminMainPage;
