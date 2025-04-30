import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Tooltip as ReactTooltip, Tooltip } from 'react-tooltip'

const AllEquip = () => {
  const loaderInfo = useLoaderData();
  const {user,notifyError,notify}=useContext(AuthContext);
  const [equipes, setequipe] = useState(loaderInfo);
  
  const handleDelete = (equi) => {
    if (equi.userEmail === user?.email) {
      fetch(`http://localhost:3000/equipement/${equi._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          notify("Deleted succefully!");
          const newEquipeCount = equipes.filter((equipe) => equipe._id !== equi._id);
          setequipe(newEquipeCount);
        });
    }
    else{
      notifyError('You cannot delete this equipement, Authorized first!')
    } 
  }
  
  const handleSort = () => {
    const newEquipes = [...equipes].sort((a, b) => a.price - b.price);
    setequipe(newEquipes);
};

  
  return (
    <div className="space-y-12">
      <div className="flex items-center gap-4 flex-col ">
        <h1 className="text-3xl font-bold">All Equipements </h1>
        <p>
          Watch our exciting and premium list of sport equipements and find your
          today !
        </p>
      </div>

      <div className="flex justify-between p-2 border-b-2 border-t-2">
        <h1 className="text-2xl font-semibold">Sort by Price :</h1>
        <button className="btn bg-blue-600 text-white" onClick={handleSort}>Low to high</button>
      </div>

      <div className="">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Serial</th>
                <th>Name</th>
                <th>Price</th>
                <th>Email</th>
                <th>Cetegory</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {equipes?.map((equipe, idx) => (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td>{equipe.itemName}</td>
                  <td>{equipe.price}</td>
                  <td>{equipe.userEmail}</td>
                  <td>{equipe.categoryName}</td>
                  <td className="space-x-2 flex ">
                    <Link
                      className="btn bg-blue-600 text-white"
                      to={`/Details/:${equipe._id}`}
                      state={equipe}
                    >
                      View Details
                    </Link>

                    <div>
                    <button
                      className="btn bg-blue-600 text-white"
                      onClick={() => handleDelete(equipe)}
                      data-tooltip-id="my-tooltip" data-tooltip-content="Delete?"
                    >
                      X
                    </button>
                    <Tooltip id="my-tooltip" />
                    </div>
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllEquip;
