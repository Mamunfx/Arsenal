import React, { useContext } from 'react';
import { AuthContext } from './../AuthProvider/AuthProvider';
import { useParams } from 'react-router-dom';

const UpdateEquipement = () => {
  const { id } = useParams();
  const { user ,notify} = useContext(AuthContext);

  const handleAddEquipment = e => {
    e.preventDefault();
    const img = e.target.Image ? e.target.Image.value : "";
    const itemName = e.target.itemName?.value;
    const categoryName = e.target.categoryName?.value;
    const description = e.target.description?.value;
    const price = e.target.price?.value;
    const rating = e.target.rating?.value;
    const customization = e.target.customization?.value;
    const processingTime = e.target.processingTime?.value;
    const stockStatus = e.target.stockStatus?.value;
    const userEmail = e.target.userEmail.value;
    const userName = e.target.userName.value;

    const updatedEquipment = {
      img,
      itemName,
      categoryName,
      description,
      price,
      rating,
      customization,
      processingTime,
      stockStatus,
      userEmail,
      userName
    };

    fetch(`https://b10-a10-server-two.vercel.app/equipement/${id}`, { // Use 'id' correctly here
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedEquipment)
    })
      .then(res => res.json())
      .then(data => {
        notify('Successfully updated');
        e.target.reset();
      });
  };

  return (
    <div className='lg:w-3/4 mx-auto'>
      <div className="text-center p-10">
        <h1 className="text-5xl font-bold">Update Equipment!</h1>
        
      </div>
      <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
        <form onSubmit={handleAddEquipment} className="card-body">
          {/* form first row */}
          <div className='flex flex-col lg:flex-row gap-5'>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input type="text" name='Image' placeholder="Image URL" className="input input-bordered" />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Item Name</span>
              </label>
              <input type="text" name='itemName' placeholder="Item Name" className="input input-bordered" />
            </div>
          </div>
          {/* form second row */}
          <div className='flex flex-col lg:flex-row gap-5'>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Category Name</span>
              </label>
              <input type="text" name='categoryName' placeholder="Category Name" className="input input-bordered" />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input type="text" name='description' placeholder="Description" className="input input-bordered" />
            </div>
          </div>
          {/* form third row */}
          <div className='flex flex-col lg:flex-row gap-5'>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input type="number" name='price' placeholder="Price" className="input input-bordered" />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input type="text" name='rating' placeholder="Rating" className="input input-bordered" />
            </div>
          </div>
          {/* form fourth row */}
          <div className='flex flex-col lg:flex-row gap-5'>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Customization</span>
              </label>
              <input type="text" name='customization' placeholder="Customization" className="input input-bordered" />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Processing Time</span>
              </label>
              <input type="text" name='processingTime' placeholder="Processing Time" className="input input-bordered" />
            </div>
          </div>
          {/* form fifth row */}
          <div className='flex flex-col lg:flex-row gap-5'>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Stock Status</span>
              </label>
              <input type="number" name='stockStatus' placeholder="Stock Status" className="input input-bordered" />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input type="text" name='userName' placeholder="User Name" className="input input-bordered" readOnly defaultValue={user?.displayName} />
            </div>
          </div>
          {/* form sixth row */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <input type="email" name='userEmail' placeholder="User Email" className="input input-bordered" readOnly defaultValue={user?.email} />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-blue-500 text-white">Update Equipment</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateEquipement;
