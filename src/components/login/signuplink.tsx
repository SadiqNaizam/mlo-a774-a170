import * as React from 'react';

const SignupLink: React.FC = () => {
  return (
    <p className="pt-4 text-center text-sm text-muted-foreground">
      Already have an account?{' '}
      <a
        href="#"
        className="font-medium text-primary hover:underline focus:outline-none focus:ring-1 focus:ring-ring rounded-sm"
      >
        Login
      </a>
    </p>
  );
};

export default SignupLink;