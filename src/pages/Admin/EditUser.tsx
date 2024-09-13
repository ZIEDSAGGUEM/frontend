import React, { useState, useEffect, ChangeEvent } from "react";
import BackButton from "../../components/BackButton";
import Spinner from "../../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const EditUser = () => {
  const [userData, setUserData] = useState({
    id: "",
    prenom: "",
    nom: "",
    station: "",
    email: "",
    motdepasse: "",
  });
  const [loading, setLoading] = useState(true); // Initial state set to true
  const navigate = useNavigate();
  const { id: paramId } = useParams<{ id: string }>();
  const { enqueueSnackbar } = useSnackbar();

  // Fetch user data when component mounts
  useEffect(() => {
    axios
      .get(`http://localhost:5000/espace-client/admin/show-user/${paramId}`)
      .then((response) => {
        const { ID, prenom, nom, station, email, motdepasse } = response.data;
        setUserData({
          id: ID,
          prenom,
          nom,
          station,
          email,
          motdepasse,
        });
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        setLoading(false); // Set loading to false in case of error
        alert("An error happened. Please check the console");
        console.log(error);
      });
  }, [paramId]);

  // Handle form submission
  const handleEditUser = () => {
    setLoading(true); // Set loading to true while saving data
    axios
      .put(
        `http://localhost:5000/espace-client/admin/edit-user/${paramId}`,
        userData
      )
      .then(() => {
        setLoading(false); // Set loading to false after saving data
        enqueueSnackbar("User edited successfully", { variant: "success" });
        navigate("/espace-client/admin");
      })
      .catch((error) => {
        setLoading(false); // Set loading to false in case of error
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  if (loading) {
    return <Spinner />; // Show spinner while loading
  }

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Edit User</h1>
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">ID</label>
          <input
            type="text"
            name="id"
            value={userData.id}
            onChange={handleChange}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            disabled
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Prenom</label>
          <input
            type="text"
            name="prenom"
            value={userData.prenom}
            onChange={handleChange}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Nom</label>
          <input
            type="text"
            name="nom"
            value={userData.nom}
            onChange={handleChange}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Station</label>
          <input
            type="text"
            name="station"
            value={userData.station}
            onChange={handleChange}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Email</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Mot de Passe</label>
          <input
            type="password"
            name="motdepasse"
            value={userData.motdepasse}
            onChange={handleChange}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleEditUser}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditUser;
