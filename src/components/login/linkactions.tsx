import * as React from 'react';

const LinkActions: React.FC = () => {
  return (
    <div className="flex justify-start">
      <a
        href="#"
        className="text-sm text-muted-foreground hover:text-primary hover:underline focus:outline-none focus:ring-1 focus:ring-ring rounded-sm"
      >
        Forgot Password
      </a>
    </div>
  );
};

export default LinkActions;
