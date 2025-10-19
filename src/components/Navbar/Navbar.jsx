import { Github } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router'
import '../../App.css'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-4 md:px-8 lg:px-20">
      {/* Navbar Start */}
      <div className="navbar-start flex items-center">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-sm lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="STAR.IO Logo"
            className="h-6 w-6 md:h-8 md:w-8"
          />
          <span className="text-lg md:text-xl font-bold text-white">STAR.IO</span>
        </NavLink>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <NavLink
          to="https://github.com/itstumpa/firebase_Email_Google_Auth"
          className="btn bg-[#5754E8] px-4 md:px-6 text-sm md:text-base hover:bg-[#4f4cf4] flex items-center gap-2"
        >
          <Github /> Github
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
