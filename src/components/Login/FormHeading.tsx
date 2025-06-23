import * as React from 'react';
import { cn } from '@/lib/utils';

const FormHeading: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <h1 className={cn("text-3xl font-bold text-center text-foreground", className)}>
      Welcome
    </h1>
  );
};

export default FormHeading;
