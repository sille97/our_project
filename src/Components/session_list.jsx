import React from "react";
import SessionCard from "./session_card";

export default function SessionList() {
  return (
    <div>
      <h2 style={styles.title}>Planned Sessions</h2>
      <SessionCard
        location="Amager Strand"
        date="Apr 4th | 12pm"
        wind={21}
        temp={18}
        status="Joining"
      />
      <SessionCard
        location="Amager Strand"
        date="Apr 5th | 8am"
        wind={19}
        temp={20}
        status="Joining"
      />
    </div>
  );
}

const styles = {
  title: {
    color: "#19306E",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
};
