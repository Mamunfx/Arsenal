import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            
<footer className="footer bg-base-200 text-base-content p-10">
 
  <aside>
  <Link to="/" >
    <div className='flex  items-center flex-col'>
      <div className='flex items-center align-middle'>
      <img src={`https://i.ibb.co.com/zQzQ2zK/Arsenal-removebg-preview.png`} className='w-28' />
      <h1 className='text-3xl'>Arsenal</h1>
      </div>
       <p className='mt-2'>Copyright © {new Date().getFullYear()} - All right reserved</p>
    </div>
    </Link>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>


</footer>
        </div>
    );
};

export default Footer;