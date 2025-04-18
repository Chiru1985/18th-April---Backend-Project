import React from 'react';

const Navbar = ({ toggleForm, handleLogout }) => {
  return (
    <nav style={{
      background: '#111',
      color: 'white',
      padding: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      {/* Center Title */}
      <div style={{ flex: 1, textAlign: 'center' }}>
        <h1 style={{ fontSize: '1.5rem' }}>🏆 WWE Hyper Stars</h1>
      </div>

      {/* Right Side Buttons */}
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button
          onClick={() => window.location.reload()}
          style={{
            background: '#f3f4f6',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Home
        </button>

        <button
          onClick={toggleForm}
          style={{
            background: '#facc15',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          ➕ Add Wrestler
        </button>

        <button
          onClick={handleLogout}
          style={{
            background: '#ef4444',
            color: 'white',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          🔒 Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
