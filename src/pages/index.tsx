import React from 'react';
import FormContainer from '../components/layout/FormContainer';

/**
 * SignupPage: The main page component for the signup screen.
 * It sets up the overall layout, centering the signup form vertically and horizontally.
 */
const SignupPage: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
      <FormContainer />
    </main>
  );
};

export default SignupPage;