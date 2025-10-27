import React from "react";
import { WiStrongWind, WiDaySunny } from "react-icons/wi";
import Navbar from "../Components/navigation_bar";
import "../Styles/global.css";

export default function ProfilePage() {
  return (
    <div style={styles.container}>
      {/* Profile Card */}
      <div style={styles.card}>
        <img
          src="/carl-caterpillar.jpg"
          alt="Profile"
          style={styles.profileImage}
        />
        <h1 style={styles.name}>Carl Caterpillar</h1>
        <p style={styles.text}>Windsurfer</p>
        <p style={styles.text}>Age: 35</p>
        <p style={styles.text}>Level: Pro</p>
        <button style={styles.editButton}>Edit Profile</button>
      </div>

      {/* Planned Sessions */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Planned Sessions</h2>
        <div style={styles.sessionCard}>
          <div style={styles.sessionInfo}>
            <h3 style={styles.location}>Amager Strand</h3>
            <p style={styles.date}>Apr 4th | 12pm</p>
          </div>
          <div style={styles.weatherInfo}>
            <div style={styles.weatherItem}>
              <WiStrongWind size={24} />
              <span>21 knts</span>
            </div>
            <div style={styles.weatherItem}>
              <WiDaySunny size={24} />
              <span>18°C</span>
            </div>
          </div>
          <button style={styles.joiningButton}>Joining</button>
        </div>
      </section>

      {/* Past Sessions */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Past Sessions</h2>
        <div style={styles.sessionCard}>
          <div style={styles.sessionInfo}>
            <h3 style={styles.location}>Amager Strand</h3>
            <p style={styles.date}>Apr 5th | 8am</p>
          </div>
          <div style={styles.weatherInfo}>
            <div style={styles.weatherItem}>
              <WiStrongWind size={24} />
              <span>19 knts</span>
            </div>
            <div style={styles.weatherItem}>
              <WiDaySunny size={24} />
              <span>20°C</span>
            </div>
          </div>
          <button style={styles.joinedButton}>Joined</button>
        </div>
      </section>

      <Navbar />
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "390px",
    margin: "0 auto",
    padding: "1rem",
    backgroundColor: "#F5F7FF",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "1rem",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  profileImage: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "1rem",
  },
  name: {
    fontSize: "24px",
    color: "#19306E",
    marginBottom: "0.5rem",
    fontWeight: "bold",
  },
  text: {
    color: "#19306E",
    margin: "0.25rem 0",
    fontSize: "16px",
  },
  editButton: {
    backgroundColor: "#19306E",
    color: "white",
    border: "none",
    borderRadius: "2rem",
    padding: "0.75rem 2rem",
    marginTop: "1rem",
    cursor: "pointer",
    fontSize: "16px",
  },
  section: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  sectionTitle: {
    color: "#19306E",
    fontSize: "20px",
    fontWeight: "bold",
  },
  sessionCard: {
    backgroundColor: "white",
    borderRadius: "1rem",
    padding: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  sessionInfo: {
    flex: 1,
  },
  location: {
    color: "#19306E",
    margin: "0",
    fontSize: "16px",
    fontWeight: "bold",
  },
  date: {
    color: "#666",
    margin: "0.25rem 0 0 0",
    fontSize: "14px",
  },
  weatherInfo: {
    display: "flex",
    gap: "1rem",
    margin: "0 1rem",
  },
  weatherItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.25rem",
    color: "#19306E",
  },
  joiningButton: {
    backgroundColor: "#E0E7FF",
    color: "#19306E",
    border: "none",
    borderRadius: "2rem",
    padding: "0.5rem 1rem",
    fontSize: "14px",
  },
  joinedButton: {
    backgroundColor: "#E0E7FF",
    color: "#19306E",
    border: "none",
    borderRadius: "2rem",
    padding: "0.5rem 1rem",
    fontSize: "14px",
  },
};
