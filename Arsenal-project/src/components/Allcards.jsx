import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Allcards = () => {
    const loaderData =useLoaderData();
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  mx-auto mt-12">
        {loaderData?.map((card) => (
          <div className="card bg-base-100  shadow-xl">
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
                <Link
                  to={`/Details/${card._id}`}
                  state={card}
                  className="btn bg-blue-600 text-white"
                >
                 View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allcards;
