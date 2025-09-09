import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger + close icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left side with logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="h-6 w-6" />
          <span className="font-semibold text-lg tracking-wide">THE HUNT</span>
        </div>

        {/* Middle divider (hidden on mobile) */}
        <div className="hidden md:flex flex-1 px-4">
          <div className="border-r border-gray-300 h-6 mx-auto" />
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-gray-700 hover:text-black">
            About Us
          </a>
          <button className="px-4 py-1.5 border border-gray-400 rounded-full hover:bg-gray-100 transition">
            Join the waitlist
          </button>
        </div>

        {/* Mobile toggle button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4">
          <a href="#about" className="text-gray-700 hover:text-black">
            About Us
          </a>
          <button className="px-4 py-2 border border-gray-400 rounded-full hover:bg-gray-100 transition">
            Join the waitlist
          </button>
        </div>
      )}
    </nav>
  );
}
