import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { Package2 } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 border-b bg-background">
      <NavLink to="/" className="flex items-center gap-2 text-lg font-semibold">
        <Package2 className="h-6 w-6" />
        <span>Acme Inc</span>
      </NavLink>
      <nav className="flex items-center gap-4">
        <NavLink to="/" className="text-muted-foreground hover:text-foreground">
          Home
        </NavLink>
        <NavLink to="/features" className="text-muted-foreground hover:text-foreground">
          Features
        </NavLink>
        <NavLink to="/pricing" className="text-muted-foreground hover:text-foreground">
          Pricing
        </NavLink>
        <NavLink to="/about" className="text-muted-foreground hover:text-foreground">
          About
        </NavLink>
        <NavLink to="/contact" className="text-muted-foreground hover:text-foreground">
          Contact
        </NavLink>
        <Button variant="primary">Sign Up</Button>
      </nav>
    </header>
  );
};

export default Header;