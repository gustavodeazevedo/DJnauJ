import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Music2Icon, MenuIcon, XIcon } from "lucide-react";

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path
      ? "text-spotify-green"
      : "text-spotify-white hover:text-spotify-green";
  };

  return (
    <nav className="fixed w-full bg-spotify-black/95 backdrop-blur-sm z-50 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Music2Icon className="h-8 w-8 text-spotify-green" />
            <span className="text-xl font-bold">DJ nauJ</span>
          </Link>

          {/* Ícone do menu mobile */}
          <button
            className="md:hidden text-spotify-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <XIcon className="h-8 w-8" /> : <MenuIcon className="h-8 w-8" />}
          </button>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={`${isActive("/")} transition-colors duration-200`}>
              Home
            </Link>
            <Link to="/about" className={`${isActive("/about")} transition-colors duration-200`}>
              About
            </Link>
            <Link to="/events" className={`${isActive("/events")} transition-colors duration-200`}>
              Events
            </Link>
            <Link to="/music" className={`${isActive("/music")} transition-colors duration-200`}>
              Music
            </Link>
            <Link to="/contact" className={`${isActive("/contact")} transition-colors duration-200`}>
              Contact
            </Link>
          </div>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-4 mt-4">
            <Link to="/" className={`${isActive("/")} block`} onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/about" className={`${isActive("/about")} block`} onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link to="/events" className={`${isActive("/events")} block`} onClick={() => setIsOpen(false)}>
              Events
            </Link>
            <Link to="/music" className={`${isActive("/music")} block`} onClick={() => setIsOpen(false)}>
              Music
            </Link>
            <Link to="/contact" className={`${isActive("/contact")} block`} onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
