import React from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink for active styling
import Motherslogo from '../Img/Motherslogo.png';
import './Header.css';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-3 sticky-top">
      <NavLink className="navbar-brand" to="/">
        <img
          src={Motherslogo}
          alt="Logo"
          height="60"
        />
      </NavLink>
      <div className="ms-auto">
        <ul className="navbar-nav flex-row gap-4">
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/aboutus"
              className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
            >
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/login"
              className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
            >
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/how-to-donate"
              className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
            >
              How To Donate
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/admin"
              className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
            >
              Admin
            </NavLink>
          </li>
          
        </ul>
      </div>
    </nav>
  );
}