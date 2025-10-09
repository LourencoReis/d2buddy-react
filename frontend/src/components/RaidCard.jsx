import React from 'react';

const RaidCard = ({ title }) => {
  return (
    <div className="sidebar-card">
      <div className="card-background-placeholder"></div>
      <div className="card-overlay">
        <h3 className="card-title">{title}</h3>
      </div>
    </div>
  );
};

export default RaidCard;