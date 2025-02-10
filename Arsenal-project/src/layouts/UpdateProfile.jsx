import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from './../AuthProvider/AuthProvider';

const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);

  const [editData, setEditData] = useState({
    displayName: user ? user.displayName : '',
    photoURL: user ? user.photoURL : '',
  });

  useEffect(() => {
    if (user) {
      setEditData({
        displayName: user.displayName || '',
        photoURL: user.photoURL || '',
      });
    }
  },
  [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleSave = () => {
    updateUserProfile({ displayName: editData.displayName, photoURL: editData.photoURL })
      .then(() => {
      })
      .catch((error) => {
        console.error('Error updating profile: ', error);
      });
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="bg-white p-0 lg:p-6  rounded-lg shadow-md flex items-center flex-col lg:flex-row gap-3">
        <img src={editData.photoURL} alt="User" className="w-32 h-32 rounded-full" />
        <div className="lg:ml-6 ml-1">
          <h2 className="text-2xl font-bold">Name : {editData.displayName}</h2>
          <p className="text-2xl font-bold">Email : {user.email}</p>
        </div>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">Edit Profile</h3>
        <label className="block mb-2">Name</label>
        <input
          type="text"
          name="displayName"
          value={editData.displayName}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <label className="block mb-2">Photo URL</label>
        <input
          type="text"
          name="photoURL"
          value={editData.photoURL}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <button onClick={handleSave}
         className="w-full p-2 bg-blue-600 text-white rounded hover:bg-white hover:text-black">Save
         </button>
      </div>
    </div>

  );
};

export default UpdateProfile;