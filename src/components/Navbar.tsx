import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Music2Icon } from 'lucide-react';

function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-spotify-green' : 'text-spotify-white hover:text-spotify-green';
  };

  return (
    <nav className="fixed w-full bg-spotify-black/95 backdrop-blur-sm z-50 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Music2Icon className="h-8 w-8 text-spotify-green" />
            <span className="text-xl font-bold">DJ nauJ</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={`${isActive('/')} transition-colors duration-200`}>
              Home
            </Link>
            <Link to="/about" className={`${isActive('/about')} transition-colors duration-200`}>
              About
            </Link>
            <Link to="/events" className={`${isActive('/events')} transition-colors duration-200`}>
              Events
            </Link>
            <Link to="/music" className={`${isActive('/music')} transition-colors duration-200`}>
              Music
            </Link>
            <Link to="/contact" className={`${isActive('/contact')} transition-colors duration-200`}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;