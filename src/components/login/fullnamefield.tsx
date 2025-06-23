import * as React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const FullNameField: React.FC = () => {
  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="fullname" className="text-sm text-muted-foreground">
        Full Name
      </Label>
      <Input
        id="fullname"
        type="text"
        autoComplete="name"
        className="h-auto border-0 border-b border-input bg-card px-0 pb-2 text-sm text-foreground shadow-none rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary"
      />
    </div>
  );
};

export default FullNameField;