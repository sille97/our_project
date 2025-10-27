import React, { useState } from "react";
import { GoHomeFill } from "react-icons/go";
import { GrMapLocation } from "react-icons/gr";
import { IoPersonSharp } from "react-icons/io5";
import "../styles/navbar.css";

export default function Navbar() {
  const [active, setActive] = useState("home");

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li
          className={`navbar-item ${active === "home" ? "active" : ""}`}
          onClick={() => setActive("home")}
        >
          <GoHomeFill size={24} />
        </li>

        <li
          className={`navbar-item ${active === "map" ? "active" : ""}`}
          onClick={() => setActive("map")}
        >
          <GrMapLocation size={22} />
        </li>

        <li
          className={`navbar-item ${active === "profile" ? "active" : ""}`}
          onClick={() => setActive("profile")}
        >
          <IoPersonSharp size={24} />
        </li>
      </ul>
    </nav>
  );
}
