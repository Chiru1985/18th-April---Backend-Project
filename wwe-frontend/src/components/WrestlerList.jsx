import React from 'react';
import WrestlerCard from './WrestlerCard';

function WrestlerList({ wrestlers, onEdit, onDelete }) {
  return (
    <div className="card-grid">
      {wrestlers.map((wrestler) => (
        <WrestlerCard
          key={wrestler._id}
          wrestler={wrestler}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default WrestlerList;
