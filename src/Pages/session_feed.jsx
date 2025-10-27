import React from "react";
import ProfileCard from "../Components/profile_card";
import SessionList from "../Components/session_list";
import Navbar from "../Components/navigation_bar";

export default function HomePage() {
  return (
    <div className="app-container">
      <ProfileCard />
      <SessionList />
      <Navbar />
    </div>
  );
}
