import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const data = Object.fromEntries(form.entries());
    sessionStorage.setItem('contactSubmission', JSON.stringify(data));
    navigate('/'); // Redirect back to Home
  };

  return (
    <section style={{ maxWidth: '650px', margin: '3rem auto', textAlign: 'center' }}>
  <h2 style={{ marginBottom: '1rem', color: '#333' }}>Get In Touch</h2>
  <p style={{ marginBottom: '2rem', color: '#666' }}>
    Have a question or want to collaborate? Fill out the form below and I’ll get back to you soon.
  </p>
  <form
    onSubmit={handleSubmit}
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1.2rem',
      padding: '2rem',
      borderRadius: '10px',
      background: '#ffffff',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    }}
  >
    <div style={{ display: 'flex', gap: '1rem' }}>
      <input
        name="firstName"
        placeholder="First Name"
        required
        style={{ flex: 1, padding: '0.7rem', border: '1px solid #ddd', borderRadius: '6px' }}
      />
      <input
        name="lastName"
        placeholder="Last Name"
        required
        style={{ flex: 1, padding: '0.7rem', border: '1px solid #ddd', borderRadius: '6px' }}
      />
    </div>

    <input
      name="contactNumber"
      placeholder="Contact Number"
      style={{ padding: '0.7rem', border: '1px solid #ddd', borderRadius: '6px' }}
    />
    <input
      name="email"
      type="email"
      placeholder="Email Address"
      required
      style={{ padding: '0.7rem', border: '1px solid #ddd', borderRadius: '6px' }}
    />
    <textarea
      name="message"
      placeholder="Write your message..."
      rows="6"
      style={{ padding: '0.7rem', border: '1px solid #ddd', borderRadius: '6px' }}
    />

    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
      <button
        type="submit"
        style={{
          padding: '0.7rem 1.5rem',
          background: '#2563eb',
          color: 'white',
          fontWeight: '600',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          transition: '0.3s',
        }}
        onMouseOver={(e) => (e.target.style.background = '#1d4ed8')}
        onMouseOut={(e) => (e.target.style.background = '#2563eb')}
      >
        Send Message
      </button>
      <button
        type="reset"
        style={{
          padding: '0.7rem 1.5rem',
          background: '#f3f4f6',
          border: '1px solid #d1d5db',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: '500',
        }}
      >
        Clear
      </button>
    </div>
  </form>
</section>

  );
}
