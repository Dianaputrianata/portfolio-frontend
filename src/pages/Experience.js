import React from 'react';

const experiences = [
  {
    company: 'Magnum Resort & Hotel',
    role: 'Frontend Developer',
    year: '2024',
    description: 'Membuat website company profile berbasis React dan CodeIgniter.'
  },
  {
    company: 'Aksa Petshop',
    role: 'Fullstack Web Developer',
    year: '2025',
    description: 'Membuat aplikasi POS untuk toko petshop menggunakan CodeIgniter 4.'
  }
];

function Experience() {
  return (
    <div>
      <h1>Pengalaman Kerja</h1>
      {experiences.map((exp, i) => (
        <div key={i} style={{ marginBottom: '20px' }}>
          <h3>{exp.role} @ {exp.company} ({exp.year})</h3>
          <p>{exp.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Experience;
