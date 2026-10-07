import React from 'react';

export default function Button({ label, onClick }) {
  return (
    <button 
      type="button" 
      onClick={onClick}
      style={{
        height: "52px", fontSize: "20px", fontWeight: "600", border: "none",
        borderRadius: "10px", cursor: "pointer", backgroundColor: "#f1f5f9", color: "#334155"
      }}
    >
      {label}
    </button>
  );
}