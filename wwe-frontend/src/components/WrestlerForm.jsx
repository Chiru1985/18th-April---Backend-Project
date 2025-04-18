import React, { useState, useEffect } from 'react';

const WrestlerForm = ({ onSubmit, selected, clearSelection, error }) => {
  const [formData, setFormData] = useState({
    name: '',
    height: '',
    weight: '',
    brand: '',
    signatureMove: ''
  });

  useEffect(() => {
    if (selected) {
      setFormData(selected);
    } else {
      setFormData({
        name: '',
        height: '',
        weight: '',
        brand: '',
        signatureMove: ''
      });
    }
  }, [selected]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      height: '',
      weight: '',
      brand: '',
      signatureMove: ''
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        padding: '1rem',
        backgroundColor: '#1a1a1a',
        color: 'white',
        maxWidth: '600px',
        margin: '1rem auto',
        borderRadius: '6px'
      }}
    >
      <h2 style={{ marginBottom: '1rem' }}>{selected ? 'Edit Wrestler' : 'Add Wrestler'}</h2>

      {/* ✅ Error message */}
      {error && (
        <div
          style={{
            backgroundColor: '#ff4d4d',
            color: 'white',
            padding: '0.75rem',
            borderRadius: '4px',
            marginBottom: '1rem'
          }}
        >
          ⚠️ {error}
        </div>
      )}

      {/* Form fields */}
      {['name', 'height', 'weight', 'signatureMove'].map((field) => (
        <div key={field} style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.25rem' }}>
            {field.charAt(0).toUpperCase() + field.slice(1)}
          </label>
          <input
            type="text"
            name={field}
            value={formData[field]}
            onChange={handleChange}
            required
            style={{
              display: 'block',
              width: '100%',
              padding: '0.5rem',
              borderRadius: '4px',
              border: '1px solid #444',
              backgroundColor: '#2a2a2a',
              color: 'white'
            }}
          />
        </div>
      ))}

      {/* Brand Dropdown */}
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.25rem' }}>Brand</label>
        <select
          name="brand"
          value={formData.brand}
          onChange={handleChange}
          required
          style={{
            display: 'block',
            width: '100%',
            padding: '0.5rem',
            borderRadius: '4px',
            border: '1px solid #444',
            backgroundColor: '#2a2a2a',
            color: 'white'
          }}
        >
          <option value="">-- Select Brand --</option>
          <option value="Raw">Raw</option>
          <option value="SmackDown">SmackDown</option>
        </select>
      </div>

      {/* Buttons */}
      <div style={{ textAlign: 'right', marginTop: '1rem' }}>
        {selected && (
          <button
            type="button"
            onClick={clearSelection}
            style={{
              backgroundColor: '#888',
              color: 'white',
              padding: '0.5rem 1rem',
              marginRight: '1rem',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Cancel Edit
          </button>
        )}
        <button
          type="submit"
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '0.5rem 1rem',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {selected ? 'Update' : 'Add'}
        </button>
      </div>
    </form>
  );
};

export default WrestlerForm;
