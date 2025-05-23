import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
    
    return (
      <div className="space-y-8  dark:bg-gray-900 dark:text-white ">

        <Navbar></Navbar>
        <div className="form-control flex justify-self-end ">
          <label className="label cursor-pointer flex justify-center gap-4 ">
            <span className="label-text ">Dark mode</span>
            <input type="checkbox" className="toggle" defaultChecked onClick={() => window.toggleTheme()}/>
          </label>
        </div>

        <div className="w-11/12 mx-auto">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Root;