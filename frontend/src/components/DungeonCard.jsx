import React from 'react';
import { Link } from 'react-router-dom';

const DungeonCard = ({ title, image, slug }) => {
  // If slug not provided, derive from title to keep consistent with RaidCard
  const derivedSlug = (slug || title)
    .toLowerCase()
    .replace(/'/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');

  return (
    <Link to={`/dungeons/${derivedSlug}`} className="card-link">
      <div 
        className="card" 
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="card-overlay">
          <h3 className="card-title">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default DungeonCard;