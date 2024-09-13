import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../../components/BackButton";
import Spinner from "../../components/Spinner";

// Define the interface for the client data
interface Client {
  ID: number;
  PRENOM: string;
  NOM: string;
  STATION: string;
  "E-MAIL": string; // Enclosed in quotes due to the hyphen
  "MOT-DE-PASSE": string;
  createdAt?: string; // Made optional
  updatedAt?: string; // Made optional
}

const ShowUser: React.FC = () => {
  const [client, setClient] = useState<Client | null>(null); // Use the interface here
  const [loading, setLoading] = useState(false);
  const { id } = useParams<{ id: string }>(); // Make sure the param name matches

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/espace-client/admin/show-user/${id}`)
      .then((response) => {
        setClient(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  const formatDate = (dateString?: string) => {
    if (!dateString) return "No Date Available";
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return "Invalid Date";
    }
    return date.toLocaleString(); // Format the date string
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative">
      <div className="absolute top-4 left-4">
        <BackButton />
      </div>
      <h1 className="text-3xl my-4">Show User</h1>
      {loading ? (
        <Spinner />
      ) : (
        client && (
          <div className="flex flex-col border-2 border-sky-400 rounded-xl w-full max-w-3xl p-8">
            <div className="my-4 flex justify-between">
              <span className="text-xl mr-4 text-gray-500">Id</span>
              <span>{client.ID}</span>
            </div>
            <div className="my-4 flex justify-between">
              <span className="text-xl mr-4 text-gray-500">Prenom</span>
              <span>{client.PRENOM}</span>
            </div>
            <div className="my-4 flex justify-between">
              <span className="text-xl mr-4 text-gray-500">Nom</span>
              <span>{client.NOM}</span>
            </div>
            <div className="my-4 flex justify-between">
              <span className="text-xl mr-4 text-gray-500">Station</span>
              <span>{client.STATION}</span>
            </div>
            <div className="my-4 flex justify-between">
              <span className="text-xl mr-4 text-gray-500">E-mail</span>
              <span>{client["E-MAIL"]}</span>
            </div>
            <div className="my-4 flex justify-between">
              <span className="text-xl mr-4 text-gray-500">Password</span>
              <span>{client["MOT-DE-PASSE"]}</span>
            </div>
            <div className="my-4 flex justify-between">
              <span className="text-xl mr-4 text-gray-500">Create Time</span>
              <span>{formatDate(client.createdAt)}</span>
            </div>
            <div className="my-4 flex justify-between">
              <span className="text-xl mr-4 text-gray-500">
                Last Update Time
              </span>
              <span>{formatDate(client.updatedAt)}</span>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ShowUser;
