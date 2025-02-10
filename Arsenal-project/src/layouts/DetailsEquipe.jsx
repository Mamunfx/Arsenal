import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const DetailsEquipe = () => {
  const { id } = useParams(); 
  const { state } = useLocation(); 
  const card = state;

  const serviceName = card.itemName;
  const image = card.img;
  const category = card.categoryName;
  const pricing = card.price;
  const counselor = card.userName;

  return (
    <div>

      <div>
        <div
          className="hero"
          style={{
            backgroundImage: "url(https://i.ibb.co.com/Bt64SfN/folco-masi-er-Uc-ICg2-LYE-unsplash-1.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60 py-40"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-4xl font-bold">Our Commitement</h1>
              <p className="mb-5 ">
                Discover our wide range of professional sport equipement designed to support your personal and career development.
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-14 ">
      <div className="flex flex-col lg:flex-row gap-4 p-4 ">
        <div className=" p-2 border border-2 pb-8">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <p>
          We are dedicated to delivering top-tier sports equipment tailored to meet your unique athletic needs. Our team of experienced professionals ensures that you receive the best support for your sporting endeavors. Whether it's advanced gear for training, specialized equipment for competitions, or expert advice on product selection, we are here to help you achieve peak performance with confidence. Explore our extensive range of high-quality sports gear and find the perfect fit for your athletic goals.
          </p>
        </div>
      </div>

      <div className="card lg:card-side bg-base-100 shadow-xl col-span-2">
        <figure className="flex-1">
          <img src={image} className="h-80" alt={serviceName}/>

        </figure>
        <div className="card-body ">
          <h2 className="card-title">{serviceName}</h2>
          <p>Category : {category}</p>
          <p>Price : {pricing}</p>
          <p>Seller : {counselor}</p>
          <div className="card-actions justify-end">
            <Link to={`/updateEquipement/${card._id}`} className="btn bg-blue-600 text-white">Update</Link>
          </div>
        </div>
      </div>
      </div>

    </div>
  );
};

export default DetailsEquipe;
