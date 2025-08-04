import React from 'react';
// import { IconType } from 'react-icons'; // For FontAwesome or other icon sets

interface HowItWorksCardsProps {
  icon: React.ReactNode;
  description: string;
}

const HowItWorksCards = ({ icon, description }: HowItWorksCardsProps) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#fff',
      borderRadius: '14px',
      boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
      padding: '1.5rem',
      minWidth: '180px',
      maxWidth: '240px',
      margin: '1rem',
    }}>
      <div style={{ fontSize: '2.5rem', color: '#2d7d46', marginBottom: '1rem' }}>
        {icon}
      </div>
      <h2 style={{ fontSize: '1.1rem', color: '#333', fontWeight: 600, textAlign: 'center' }}>{description}</h2>
    </div>
  );
};

export default HowItWorksCards;

// Example usage:
// import { FaBookOpen } from 'react-icons/fa';
// <HowItWorksCards icon={<FaBookOpen />} description="Browse books easily" />
