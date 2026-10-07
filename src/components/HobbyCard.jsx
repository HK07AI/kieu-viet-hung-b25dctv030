import React from 'react';

export default function HobbyCard({ icon, title, description }) {
  return (
    <div className="hobby-item">
      <span>{icon}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}