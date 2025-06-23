import * as React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

// Import child components using relative paths
import FormHeading from '../Login/FormHeading';
import InputField from '../Login/InputField';
import PasswordField from '../Login/PasswordField';
import LinkActions from '../Login/LinkActions';
import LoginButton from '../Login/LoginButton';
import SignupLink from '../Login/SignupLink';

interface FormContainerProps {
  className?: string;
}

/**
 * FormContainer: A central card component that organizes and displays
 * all login form elements in a vertically stacked layout.
 */
const FormContainer: React.FC<FormContainerProps> = ({ className }) => {
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real-world application, this is where you would handle form submission,
    // like validating inputs and making an API call.
    console.log('Login form submitted');
  };

  return (
    <Card className={cn("w-96 max-w-sm bg-card shadow-lg rounded-lg", className)}>
      <CardHeader>
        <FormHeading />
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <InputField />
            <PasswordField />
            <LinkActions />
          </div>
          <LoginButton className="mt-6" />
        </form>
      </CardContent>
      <CardFooter className="justify-center">
        <SignupLink />
      </CardFooter>
    </Card>
  );
};

export default FormContainer;