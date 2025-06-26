import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface LoginFormProps {
  onSubmit: (data: {
    email: string;
    password: string;
    remember: boolean;
  }) => void;
  userType: "student" | "faculty" | "admin";
}

const LoginForm = ({ onSubmit, userType }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const mockUsers = [
    { email: "student@example.com", password: "student123", role: "student" },
    { email: "faculty@example.com", password: "faculty123", role: "faculty" },
    { email: "admin@example.com", password: "admin123", role: "admin" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const user = mockUsers.find(
      (u) => u.email === email && u.password === password && u.role === userType
    );

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      alert("Login successful!");
      onSubmit({ email, password, remember });
    } else {
      alert("Invalid email, password, or role!");
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          placeholder={`${userType}@example.com`}
          type="email"
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          placeholder="••••••••"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="remember"
          checked={remember}
          onCheckedChange={(checked) => setRemember(checked as boolean)}
        />
        <Label
          htmlFor="remember"
          className="text-sm font-normal cursor-pointer"
        >
          Remember me
        </Label>
      </div>
      <Button
        type="submit"
        className="w-full bg-campus-primary hover:bg-campus-primary/90"
        disabled={isLoading}
      >
        {isLoading ? "Signing in..." : "Sign In"}
      </Button>
    </form>
  );
};

export default LoginForm;
