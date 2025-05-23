import React, { useContext, useState } from "react";
import { AuthContext } from './../AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const { userLogin, user,notifyError,notify} = useContext(AuthContext);
  const navigate = useNavigate(); 
  const location = useLocation(); 
  const from = location.state?.from?.pathname || '/';
  
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!user) {
      try {
        await userLogin(email, password);
        notify('Logged In !')
        navigate(from, { replace: true });
      } catch (error) {
        notifyError(error.message);
        
        setErrorMessage(error.message);
      }
    } else {
      setErrorMessage('Already logged in.');
    }
  };

  return (
    <div>
      <div className="hero bg-blue-600 min-h-fit rounded-lg py-24">
        <div className="hero-content flex-col lg:flex-row-reverse gap-16">
          <div className="text-center lg:text-left text-white">
            <h1 className="text-5xl font-bold">Sign in now!</h1>
            <p className="py-6 lg:w-3/4">
              Join and explore our hundreds of sports equipment! We ensure quality over quantity and make sure you get the right product for your need!
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSignup}>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
                <label className="label">
                  <Link to="/singup">
                    Don't have an account?
                    <span className="text-blue-600 font-semibold"> Sign up</span>
                  </Link>
                </label>
              </div>
              {errorMessage && (
                <p className="text-red-600 mb-4">{errorMessage}</p>
              )}
              <div className="form-control mt-6">
                <button type="submit" className="btn text-white bg-blue-600">
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
