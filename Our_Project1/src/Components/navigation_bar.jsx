// src/components/Navbar.jsx
import React from "react";
import { GoHomeFill } from "react-icons/go";
import { GrMapLocation } from "react-icons/gr";
import { IoPersonSharp } from "react-icons/io5";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <ul style={styles.links}>
        <li>
          <a href="/">
            <GoHomeFill size={22} color="white" />
          </a>
        </li>
        <li>
          <a href="/about">
            <GrMapLocation size={22} color="white" />
          </a>
        </li>
        <li>
          <a href="/contact">
            <IoPersonSharp size={22} color="white" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#19306E",
  },
  links: {
    listStyle: "none",
    display: "flex",
    gap: "2rem",
  },
};
