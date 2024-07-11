import { NavLink } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="p-4 bg-background border-t">
      <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
        <div className="flex space-x-4">
          <NavLink to="/privacy-policy" className="text-muted-foreground hover:text-foreground">
            Privacy Policy
          </NavLink>
          <NavLink to="/terms-of-service" className="text-muted-foreground hover:text-foreground">
            Terms of Service
          </NavLink>
        </div>
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook className="h-6 w-6 text-muted-foreground hover:text-foreground" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter className="h-6 w-6 text-muted-foreground hover:text-foreground" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram className="h-6 w-6 text-muted-foreground hover:text-foreground" />
          </a>
        </div>
        <p className="text-sm text-muted-foreground">&copy; 2023 Acme Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;