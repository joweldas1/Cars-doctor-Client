import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../public/assets/logo.svg'
import UseAuth from '../../Provider/UseAuth';

const Navbar = () => {
  const {logOut, user}=UseAuth()
  const handleLogout=()=>{
    console.log('hello');
    logOut()
    .then(()=>{alert("done logout")})
    .catch((error)=>{console.log(error);})
  }



  const navItem=<>
  <li> <Link to="/"> Home </Link> </li>
  <li> <Link to="/about"> About </Link> </li>
  <li> <Link to="/login"> Login</Link> </li>
  <li> <Link to="/signUp"> SingUp</Link> </li>
  {
    user? <>
      <li> <Link to="/booking"> Booking</Link> </li>

    </> : ""
  }
  {
    user?.email?  <button onClick={handleLogout}>Logout</button>:""
  }
  </>



    return (
        <div>
            <div className="navbar bg-base-100 border border-black">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navItem}

        </ul>
    </div>
    <Link to="/home" > <img className='w-20' src={logo} alt="" /> </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navItem}
    </ul>
  </div>
  <div className="navbar-end">
  <button className="btn btn-outline btn-warning">Secondary</button>
  </div>
</div>

        </div>
    );
};

export default Navbar;