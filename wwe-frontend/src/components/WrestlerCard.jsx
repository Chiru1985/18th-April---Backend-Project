import React from 'react';

function WrestlerCard({ wrestler, onEdit, onDelete }) {
  return (
    <div className="card">
      <h2>{wrestler.name}</h2>
      <p>🏋️ Height: {wrestler.height}</p>
      <p>⚖️ Weight: {wrestler.weight}</p>
      <p>🔥 Brand: {wrestler.brand}</p>
      <p>💥 Signature Move: {wrestler.signatureMove}</p>
      <div>
        <button className="edit" onClick={() => onEdit(wrestler)}>Edit</button>
        <button className="delete" onClick={() => onDelete(wrestler._id)}>Delete</button>
      </div>
    </div>
  );
}

export default WrestlerCard;
