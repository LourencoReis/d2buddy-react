import React from 'react';
import { useLocation } from 'react-router-dom';

const BackgroundWrapper = ({ children }) => {
  const location = useLocation();
  
  // Choose background based on current page
  const getBackground = () => {
    // No background for profile or INDIVIDUAL guide pages (with trailing slash)
    if (location.pathname === '/profile' || 
        location.pathname.startsWith('/raids/') || 
        location.pathname.startsWith('/dungeons/')) {
      return 'none';
    }
    
    // Show background for the raids and dungeons LIST pages (no trailing slash)
    if (location.pathname === '/raids') {
      return 'url(/images/desertperp.jpg)'; // You can change this to a different image
    }
    
    if (location.pathname === '/dungeons') {
      return 'url(/images/desertperp.jpg)'; // You can change this to a different image
    }
    
    return 'url(/images/desertperp.jpg)'; // Background for all other pages
  };

  const getBackgroundColor = () => {
    // Dark solid color ONLY for profile and INDIVIDUAL guide pages
    if (location.pathname === '/profile' || 
        location.pathname.startsWith('/raids/') || 
        location.pathname.startsWith('/dungeons/')) {
      return '#1a1a1a';
    }
    return 'transparent'; // Transparent for other pages so background image shows
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