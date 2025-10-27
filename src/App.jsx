import React from "react";
import HomePage from "./Pages/landing_page";
import SessionFeed from "./Pages/session_feed";
import ProfilePage from "./Pages/profile_page";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/landing_page" element={<HomePage />} />
        <Route path="/session_feed" element={<SessionFeed />} />
        <Route path="/profile_page" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
