import React from 'react';

export default function Section({ title, children, id }) {
  return (
    <section id={id} className="card">
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
}