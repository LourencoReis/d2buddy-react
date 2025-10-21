import React from 'react';
import { useLocation } from 'react-router-dom';

const BackgroundWrapper = ({ children }) => {
  const location = useLocation();
  
  // Choose background based on current page
  const getBackground = () => {
    // No background for profile or any guide pages
    if (location.pathname === '/profile' || 
        location.pathname.startsWith('/raids/') || 
        location.pathname.startsWith('/dungeons/')) {
      return 'none';
    }
    return 'url(/images/desertperp.jpg)'; // Background for all other pages
  };

  const getBackgroundColor = () => {
    // Dark solid color for profile and guide pages
    if (location.pathname === '/profile' || 
        location.pathname.startsWith('/raids/') || 
        location.pathname.startsWith('/dungeons/')) {
      return '#1a1a1a';
    }
    return 'transparent'; // Transparent for other pages
  };

  return (
    <div style={{
      backgroundImage: getBackground(),
      backgroundColor: getBackgroundColor(),
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh'
    }}>
      {children}
    </div>
  );
};

export default BackgroundWrapper;