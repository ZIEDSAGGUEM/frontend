import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const ClientsTable = ({ Clients }) => {
  return (
    <div className="overflow-x-auto">
      {/* Clients Table */}
      <table className="w-full border-collapse border border-slate-600 mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-slate-600 p-2">ID</th>
            <th className="border border-slate-600 p-2">Prénom</th>
            <th className="border border-slate-600 p-2 max-w-xs:hidden">Nom</th>
            <th className="border border-slate-600 p-2 max-w-xs:hidden">
              Station
            </th>
            <th className="border border-slate-600 p-2">E-mail client</th>
            <th className="border border-slate-600 p-2">Mot de passe</th>
            <th className="border border-slate-600 p-2">URL</th>
            <th className="border border-slate-600 p-2">Opérations</th>
          </tr>
        </thead>
        <tbody>
          {Clients &&
            Clients.map((client, index) => (
              <tr key={client.ID} className="bg-white">
                <td className="border border-slate-700 p-2 text-center">
                  {index + 1}
                </td>
                <td className="border border-slate-700 p-2 text-center">
                  {client.PRENOM}
                </td>
                <td className="border border-slate-700 p-2 text-center max-w-xs:hidden">
                  {client.NOM}
                </td>
                <td className="border border-slate-700 p-2 text-center max-w-xs:hidden">
                  {client.STATION}
                </td>
                <td className="border border-slate-700 p-2 text-center">
                  {client["E-MAIL"]}
                </td>
                <td className="border border-slate-700 p-2 text-center">
                  {client["MOT-DE-PASSE"]}
                </td>
                <td className="border border-slate-700 p-2 text-center">
                  {client.URL}
                </td>
                <td className="border border-slate-700 p-2 text-center">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/espace-client/admin/show-user/${client.ID}`}>
                      <BsInfoCircle className="text-2xl text-green-800 hover:text-green-600 cursor-pointer" />
                    </Link>
                    <Link to={`/espace-client/admin/edit-user/${client.ID}`}>
                      <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-yellow-400 cursor-pointer" />
                    </Link>
                    <Link to={`/espace-client/admin/delete-user/${client.ID}`}>
                      <MdOutlineDelete className="text-2xl text-red-600 hover:text-red-400 cursor-pointer" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientsTable;
