import { useState } from "react";

// src/App.jsx
import React from "react";
import Navbar from "./Components/navigation_bar";

export default function App() {
  return (
    <>
      <main style={{ padding: "2rem" }}>
        <h2>Welcome to My App</h2>
        <p>This is your homepage content.</p>
      </main>
      <Navbar />
    </>
  );
}
