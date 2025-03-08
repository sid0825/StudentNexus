// SuccessPage.tsx
import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import NavigationBar from '../navigation-bar/NavigationBar';
import AppFooter from './AppFooter';

const SuccessPage: React.FC = () => {
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // Extract session_id from URL query parameters
    const session = searchParams.get("session_id");
    setSessionId(session);
  }, [searchParams]);

  return (
      <>
          <NavigationBar />
          <div style={containerStyles}>
              <h1 style={headingStyles}>Thank You!</h1>
              {sessionId ? (
                  <p style={messageStyles}>Your payment was successful.</p>
              ) : (
                  <p style={messageStyles}>Your payment was successful.</p>
              )}
          </div>
          <AppFooter />
      </>
  );
};

const containerStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#f4f4f9',
};

const headingStyles: React.CSSProperties = {
  fontSize: '2.5rem',
  color: '#4CAF50',
  marginBottom: '20px',
};

const messageStyles: React.CSSProperties = {
  fontSize: '1.2rem',
  color: '#555',
};

export default SuccessPage;
