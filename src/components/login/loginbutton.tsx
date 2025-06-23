import * as React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const LoginButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ className, ...props }) => {
  return (
    <Button
      type="submit"
      className={cn("w-full", className)}
      {...props}
    >
      Login
    </Button>
  );
};

export default LoginButton;
