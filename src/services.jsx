import React from 'react';

const services = [
  { id: 1, title: 'Full-Stack Development', desc: 'Building scalable web applications with modern frontend and backend technologies.', img: '/images/img1.png' },
  { id: 2, title: 'Database Design', desc: 'Designing and managing relational and NoSQL databases for efficient data handling.', img: '/images/img2.png' },
  { id: 3, title: 'Cloud Deployment', desc: 'Deploying and managing applications on cloud platforms like AWS and Azure.', img: '/images/img3.png' },
];

export default function Services() {
  return (
    <section>
      <h2>Services</h2>
      <ul>
        {services.map((s) => (
          <li key={s.id}>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <img src={s.img} alt={s.title} style={{ width: '250px', height: '250px' }} />
          </li>
        ))}
      </ul>
    </section>
  );
}
