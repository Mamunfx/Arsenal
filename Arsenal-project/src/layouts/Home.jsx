import React, { useEffect, useState } from "react";
import {Link, Outlet } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";

const Home = () => {

  const handleGetTouch=e=>{
    e.preventDefault();
  }
  return (
    <div className="space-y-16 dark:bg-gray-900 dark:text-white">
      

      <Fade>
    <div>
        <div className="carousel w-full rounded-lg">
  <div id="slide1" className="carousel-item relative w-full">
    <div className="hero bg-base-200 dark:bg-gray-900 h-fit py-16">
      <div className="hero-content flex flex-col lg:flex-row-reverse gap-8 p-4">
        <div className="w-full lg:w-1/2">
          <img
            src="https://i.ibb.co.com/P6KXVzH/jacob-rice-g-Qvg-Sijk-YDM-unsplash.jpg"
            className="rounded-lg shadow-2xl w-full h-96 object-cover"
            alt="Sports Equipment"
          />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4">
          <h1 className="text-lg text-blue-600">Top Quality Sports Gear</h1>
          <h1 className="text-3xl lg:text-5xl font-bold mt-4 lg:mt-0">
            Gear Up for Excellence
          </h1>
          <p className="py-4 lg:py-6 ">
            Discover our top-notch sports equipment designed for peak performance and durability. Whether you're training or competing, we've got the gear to help you excel.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <Link to="/allEquipe" className="btn bg-blue-600 text-white">Our Products</Link>
            <Link to="/allEquipe" className="btn btn-outline text-blue-600">Learn More</Link>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute left-5 right-5 bottom-36 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">
        ❮
      </a>
      <a href="#slide2" className="btn btn-circle">
        ❯
      </a>
    </div>
  </div>

  <div id="slide2" className="carousel-item relative w-full">
    <div className="hero bg-base-200 dark:bg-gray-900 h-fit py-16">
      <div className="hero-content flex flex-col lg:flex-row-reverse gap-8 p-4">
        <div className="w-full lg:w-1/2">
          <img
            src="https://i.ibb.co.com/5rSjhtW/cristina-glebova-JGn-OPatuz7-E-unsplash.jpg"
            className="rounded-lg shadow-2xl w-full h-96 object-cover"
            alt="Sports Equipment"
          />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-2">
          <h1 className="text-lg text-blue-600">Performance and Durability</h1>
          <h1 className="text-3xl lg:text-5xl font-bold mt-4 lg:mt-0">
            Achieve Your Best
          </h1>
          <p className="py-4 lg:py-6">
            Our equipment is designed to withstand the rigors of intense training and competition. Equip yourself with the best to achieve your highest potential.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <Link to="/allEquipe" className="btn bg-blue-600 text-white">Our Products</Link>
            <Link to="/allEquipe" className="btn btn-outline text-blue-600">Learn More</Link>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute left-5 right-5 bottom-36 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">
        ❮
      </a>
      <a href="#slide3" className="btn btn-circle">
        ❯
      </a>
    </div>
  </div>

  <div id="slide3" className="carousel-item relative w-full">
    <div className="hero bg-base-200 dark:bg-gray-900 h-fit py-16">
      <div className="hero-content flex flex-col lg:flex-row-reverse gap-8 p-4">
        <div className="w-full lg:w-1/2">
          <img
            src="https://i.ibb.co.com/8Khff0h/cfphotosin-photography-4hbgc-Qv9-As-unsplash.jpg"
            className="rounded-lg shadow-2xl w-full h-96 object-cover"
            alt="Sports Equipment"
          />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-2">
          <h1 className="text-lg text-blue-600">Expert Guidance</h1>
          <h1 className="text-3xl lg:text-5xl font-bold mt-4 lg:mt-0">
            Choose the Right Gear
          </h1>
          <p className="py-4 lg:py-6 ">
            Our experts are here to guide you in selecting the perfect equipment for your needs. Get personalized advice and make informed decisions for your sporting journey.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <Link to="/allEquipe" className="btn bg-blue-600 text-white">Get Equipment Advice</Link>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute left-5 right-5 bottom-36 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle ">
        ❮
      </a>
      <a href="#slide1" className="btn btn-circle">
        ❯
      </a>
    </div>
  </div>
</div>

          
        </div>
      </Fade>

      <div className="text-lg text-center flex flex-col items-center gap-3 ">
        <Fade >
          <h1 className="text-2xl font-semibold mt-8">
            Explore our Wide range of sports equipement !
          </h1>
        </Fade>
        <Fade>
          <p className="text-gray-600 lg:w-3/5 w-11/12 text-xs lg:text-lg md:text-md md:w-3/5 mx-auto mb-8">
            We have 100+ qualitifull sports items , ranging from cheap to
            premium . Explore our sports equipement category wise !
          </p>
        </Fade>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 w-11/12 mx-auto lg:gap-4 gap-8  ">
        <Link to="/Cricket">
          <div className="card bg-base-100 image-full h-32 w-full shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out">
            <figure className="w-full h-full">
              <img
                src="https://i.ibb.co/d0WZYNW/mustafa-fatemi-SKz3-O8-Mhrm-M-unsplash.jpg"
                className="w-full h-full object-cover"
                alt="Cricket"
              />
            </figure>
            <div className="card-body relative z-10">
              <h2 className="card-title text-white text-2xl">Cricket</h2>
              <p className="text-white text-sm">
                Find your cricket bats and other equipment quickly!
              </p>
            </div>
          </div>
        </Link>

        <Link to="/football">
          <div className="card bg-base-100 image-full h-32 w-full shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out">
            <figure className="w-full h-full">
              <img
                src="https://i.ibb.co/WFtfds0/kyle-pham-nju-Ys5k-FJ3s-unsplash.jpg"
                className="w-full h-full object-cover"
                alt="Football"
              />
            </figure>
            <div className="card-body relative z-10">
              <h2 className="card-title text-white text-2xl">Football</h2>
              <p className="text-white text-sm">
                Find your footballs and other equipment quickly!
              </p>
            </div>
          </div>
        </Link>

        <Link to="/basketball">
          <div className="card bg-base-100 image-full h-32 w-full shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out">
            <figure className="w-full h-full">
              <img
                src="https://i.ibb.co/qnDFWt5/christian-wright-330lvn-Oh-Mt0-unsplash.jpg"
                className="w-full h-full object-cover"
                alt="Basketball"
              />
            </figure>
            <div className="card-body relative z-10">
              <h2 className="card-title text-white text-2xl">Basketball</h2>
              <p className="text-white text-sm">
                Find your basketball and other shoes quickly!
              </p>
            </div>
          </div>
        </Link>

        <Link to="/Golf">
          <div className="card bg-base-100 image-full h-28 w-full shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out">
            <figure className="w-full h-full">
              <img
                src="https://i.ibb.co/h73RLrL/sugar-golf-GOVQ4-OSOnp0-unsplash.jpg"
                className="w-full h-full object-cover"
                alt="Golf"
              />
            </figure>
            <div className="card-body relative z-10">
              <h2 className="card-title text-white">Golf</h2>
              <p className="text-white">
                Find your golf set and other equipment quickly!
              </p>
            </div>
          </div>
        </Link>
      </div>

      <div>
        <h1 className="text-3xl font-semibold  mx-auto mt-16">
          All Products :
        </h1>
      </div>

      <Outlet></Outlet>

      <div className="hero bg-base-200 h-fit rounded-lg">
  <div className="hero-content flex-col lg:flex-row gap-16 py-12">
    <img
      src="https://i.ibb.co.com/84V4gf9/quino-al-F-c-Jdcb5b-SU-unsplash.jpg"
      className="max-w-sm rounded-lg shadow-2xl" />

  <div className="">
    <h1 className="text-center text-3xl font-bold py-8">Watch our annual reach </h1>
      <div className="stats shadow">
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    </div>
    <div className="stat-title">Likes</div>
    <div className="stat-value">31K</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
      </svg>
    </div>
    <div className="stat-title">New Users</div>
    <div className="stat-value">4,200</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
      </svg>
    </div>
    <div className="stat-title">New Registers</div>
    <div className="stat-value">1,200</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
</div>
      </div>
  </div>
</div>
      


      <div >
  <div className="bg-base-100 dark:bg-gray-900 shadow-2xl rounded-lg py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
        Get in Touch
      </h2>
      <form className="max-w-lg mx-auto" onSubmit={handleGetTouch}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 dark:text-gray-300" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2 border rounded bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 dark:text-gray-300" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border rounded bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 dark:text-gray-300" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full p-2 border rounded bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn bg-blue-600 text-white w-full dark:bg-blue-500 dark:text-gray-100"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</div>
    </div>
  );
};

export default Home;
