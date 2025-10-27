import React from "react";
import { WiStrongWind, WiDaySunny } from "react-icons/wi";

export default function SessionCard({ location, date, wind, temp, status }) {
  return (
    <div style={styles.card}>
      <div>
        <h3 style={styles.location}>{location}</h3>
        <p style={styles.date}>{date}</p>
      </div>

      <div style={styles.details}>
        <WiStrongWind size={24} color="#19306E" />
        <p>{wind} knts</p>
        <WiDaySunny size={24} color="#19306E" />
        <p>{temp}°C</p>
      </div>

      <button style={styles.status}>{status}</button>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "white",
    borderRadius: "1rem",
    padding: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    marginBottom: "1rem",
  },
  location: { color: "#19306E", margin: 0 },
  date: { color: "#666", margin: 0 },
  details: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  status: {
    backgroundColor: "#E0E7FF",
    border: "none",
    borderRadius: "1rem",
    padding: "0.3rem 0.8rem",
    color: "#19306E",
  },
};
