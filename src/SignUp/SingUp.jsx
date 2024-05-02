import React from 'react';
import loginImg from "../../public/assets/images/login/login.svg"
import { Link } from 'react-router-dom';
import UseAuth from '../Pages/Provider/UseAuth';

const SingUp = () => {

    const {createUser}=UseAuth()



    const handleSingUp = (e) => {
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email);

        createUser(email,password)
        .then(user=>console.log(user.user))
        .catch(error=>console.log(error))



      };



    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content md:gap-16  flex-col lg:flex-row">
            <div className="w-full md:w-1/2">
              <img src={loginImg} alt="" />
            </div>
  
            <div className="card shrink-0 w-full md:w-1/2 shadow-2xl bg-base-100">
              <h1 className="text-4xl my-2 text-center font-bold">SingUp</h1>
              <form onSubmit={handleSingUp} className="card-body">
              <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="SignUp"
                    className="btn btn-primary bgOrange"
                  />
                </div>
              </form>
              <div>
                <span className="text-center">
                  <p>
                    Already have an account?{" "}
                    <Link
                      to={"/login"}
                      className="text-blue-800 font-bold text-sm"
                    >
                      {" "}Login{" "}
                    </Link>{" "}
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SingUp;