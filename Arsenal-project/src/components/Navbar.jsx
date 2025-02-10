import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './../AuthProvider/AuthProvider';

const Navbar = () => {
  const {notify,logOut,user}=useContext(AuthContext);
  const email =user?.email; 
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

        <li><Link to="/">Home</Link></li>
        <li><Link to="/allEquipe">Equipements</Link></li>
        <li><Link to="/addEquipe">Add Equipement</Link></li>
        <li><Link to={`/myequipe/email/${email}`}>My Equipement</Link></li>
      </ul>
    </div>

    <Link to="/" className=''>
    <div className='flex gap-0 lg:gap-1 w-16 items-center'>
      <img src={`https://i.ibb.co.com/zQzQ2zK/Arsenal-removebg-preview.png`} className='w-12 lg:w-16' />
      <h1 className='text-xl lg:text-2xl'>Arsenal</h1>
    </div>
    </Link>
    </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/allEquipe">Equipements</Link></li>
        <li><Link to="/addEquipe">Add Equipement</Link></li>
        <li><Link to={`/myequipe/email/${email}`}>My Equipements</Link></li>
        
        
    </ul>
  </div>
  <div className="navbar-end space-x-2">
    {
      user ? 
      <div className='flex gap-1'>
        <div className="relative group inline-block"> 
        <img src={user.photoURL} alt="" className="w-12 h-12 rounded-full p-1 border" /> 
        <div className="absolute top-1/2 right-full transform -translate-y-1/2 mr-2 px-2 py-1 bg-blue-600 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity"> 
            {user.displayName} 
            </div> 
            </div>
        <Link  className='btn text-white bg-blue-600 ' onClick={logOut}>Sing out</Link>
      </div>
      :
      <div className='flex gap-1'>
        <Link to="/login" className='btn text-white bg-blue-600 '>Sing in</Link>
        <Link to="/singup" className='btn text-white bg-blue-600 '>Register</Link>
      </div>
    }
  
  
  </div>
 </div>
</div>
    );
};

export default Navbar;