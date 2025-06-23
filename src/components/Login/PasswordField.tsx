import * as React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const PasswordField: React.FC = () => {
  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="password" className="text-sm text-muted-foreground">
        Password
      </Label>
      <Input
        id="password"
        type="password"
        autoComplete="current-password"
        className="h-auto border-0 border-b border-input bg-card px-0 pb-2 text-sm text-foreground shadow-none rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary"
      />
    </div>
  );
};

export default PasswordField;
