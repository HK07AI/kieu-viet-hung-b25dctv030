import React from 'react';

export default function Display({ value }) {
  return (
    <div style={{
      width: "100%", height: "70px", backgroundColor: "#1e293b", color: "#ffffff",
      fontSize: "28px", fontWeight: "500", textAlign: "right", padding: "0 16px",
      borderRadius: "10px", marginBottom: "18px", display: "flex", alignItems: "center", justifyContent: "flex-end"
    }}>
      {value || "0"}
    </div>
  );
}