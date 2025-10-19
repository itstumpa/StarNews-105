import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
      return (
            <div className='flex justify-between'>
                  <div className=""></div>
                  <div className="nav">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/career">Career</NavLink>
                  </div>
                  <div className="login-btn">
                        <button className='btn btn-primary'>Login</button>
                  </div>
            </div>
      );
};

export default Navbar;