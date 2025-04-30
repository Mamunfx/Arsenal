import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosSecure from '../hooks/useAxiosSecure';

const MyEquipe = () => {
  const axiosSecure = useAxiosSecure()
  const { user, notifyError } = useContext(AuthContext);
  const [equipes, setequipe] = useState([]);
  const fetchEquipements = axiosSecure.get(`/equipement/email/${user?.email}`).then((res) => res.data).then(data=>setequipe(data));
  const handleDelete = (equi) => {
    if (equi.userEmail !== user?.email) {
      notifyError('You cannot delete this equipment, Authorized first!');
      return;
    }

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/equipement/${equi._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire({
              title: "Deleted!",
              text: "Your equipment has been deleted.",
              icon: "success"
            });
            const newEquipeCount = equipes.filter((equipe) => equipe._id !== equi._id);
            setequipe(newEquipeCount);
          })
          .catch((error) => {
            Swal.fire({
              title: "Error!",
              text: `Failed to delete: ${error.message}`,
              icon: "error"
            });
          });
      }
    });
  };

  return (
    <div>
      <h1 className='text-4xl font-bold'>This is My Equipements:</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto mt-12">
        {equipes.length > 0 ? (
          equipes.map((card) => (
            <div className="card bg-base-100 shadow-xl" key={card._id}>
              <figure>
                <img
                  src={card.img}
                  className="h-64 w-full object-cover"
                  alt={card.itemName}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{card.itemName}</h2>
                <p>{card.description}</p>
                <div className="card-actions justify-start">
                  <Link to={`/updateEquipement/${card._id}`} state={card} className="btn bg-blue-600 text-white">
                    Update
                  </Link>
                  <button
                    className="btn bg-blue-600 text-white"
                    onClick={() => handleDelete(card)}
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-1 md:col-span-2 lg:col-span-3">
            No equipment found. Please add some items.
          </p>
        )}
      </div>
    </div>
  );
};

export default MyEquipe;
