import React from 'react';
import { Link } from 'react-router-dom';

const RaidCard = ({ title, image }) => {
  // Convert title to URL slug
  const slug = title.toLowerCase()
    .replace(/'/g, '') // Remove apostrophes
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^a-z0-9-]/g, ''); // Remove special characters

  return (
    <Link to={`/raids/${slug}`} className="card-link">
      <div 
        className="card" 
        style={{backgroundImage: `url(${image})`}}
      >
        <div className="card-overlay">
          <h3 className="card-title">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default RaidCard;