import React from "react";
import { NavLink } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { GrMapLocation } from "react-icons/gr";
import { IoPersonSharp } from "react-icons/io5";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink
            to="/landing_page"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <GoHomeFill size={24} />
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink
            to="/session_feed"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <GrMapLocation size={22} />
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink
            to="/profile_page"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <IoPersonSharp size={24} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
