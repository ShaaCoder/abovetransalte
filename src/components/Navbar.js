import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-semibold">MyApp</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="/" className="hover:text-blue-300">Home</a>
          <a href="/about" className="hover:text-blue-300">About</a>
          <a href="/services" className="hover:text-blue-300">Services</a>
          <a href="/contact" className="hover:text-blue-300">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-blue-600 text-white space-y-4 py-4 px-6 ${isOpen ? 'block' : 'hidden'}`}
      >
        <a href="/" className="block hover:text-blue-300">Home</a>
        <a href="/about" className="block hover:text-blue-300">About</a>
        <a href="/services" className="block hover:text-blue-300">Services</a>
        <a href="/contact" className="block hover:text-blue-300">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
