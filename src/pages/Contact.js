import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    const data = await response.json();
    alert(data.message);

    // Reset form
    setForm({ name: '', email: '', message: '' });
  } catch (err) {
    console.error('Gagal mengirim pesan:', err);
    alert('Terjadi kesalahan saat mengirim pesan.');
  }
};


  return (
    <div>
      <h1>Hubungi Saya</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nama:</label><br />
          <input type="text" name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label><br />
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Pesan:</label><br />
          <textarea name="message" value={form.message} onChange={handleChange} required />
        </div>
        <button type="submit">Kirim</button>
      </form>
    </div>
  );
}

export default Contact;
