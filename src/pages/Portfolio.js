import React, { useEffect, useState } from 'react';

function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error('Gagal mengambil data:', err));
  }, []);

  return (
    <div>
      <h1>Portofolio Proyek</h1>
      {projects.map((project, index) => (
        <div key={index} style={{ borderBottom: '1px solid #ccc', marginBottom: '15px' }}>
          <h3>{project.title} ({project.year})</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Portfolio;
