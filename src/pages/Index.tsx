import React from 'react';
import FormContainer from '../components/layout/FormContainer';

/**
 * LoginPage: The main page component for the login screen.
 * It sets up the overall layout, centering the login form vertically and horizontally.
 */
const LoginPage: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
      <FormContainer />
    </main>
  );
};

export default LoginPage;
