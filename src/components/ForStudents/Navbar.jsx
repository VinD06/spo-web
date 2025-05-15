// Navbar.jsx
import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setShow(false);
      } else {
        // Scrolling up
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);


  return (
    <div>
    <nav className={`fixed top-0 left-0 w-full bg-white text-black transition-transform duration-300 z-50 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 ml-8 justify-between items-center">
        <div className="flex justify-between items-center h-20 space-x-2">
          {/* Logo */}
          <button className="text-xl font-bold flex space-x-2 text-gray-800" onClick={() => window.location.href = 'https://spo.iitk.ac.in/'}
>
            <img src='/src/components/ForStudents/image.png' className="h-14 w-auto fixed top-3 left-"
            href='https://spo.iitk.ac.in/'/>
            
            </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 text-sm p-[3vw] font-bold">
            <a href="#" className="text-gray-700 hover:text-blue-600 ">ABOUT IITK</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">FOR COMPANIES</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">FOR STUDENTS</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">SAMVARDHAN</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">CONTACT</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      </nav>

{/* Mobile Menu */}
<div
  className={`fixed inset-0 z-50 bg-white transition-transform duration-300 transform ${
    isOpen ? 'translate-x-0' : '-translate-x-full'
  } overflow-y-auto`}
>
  {/* Close Button */}
  <button
    onClick={toggleMenu}
    className="absolute top-4 right-4 text-gray-700 z-50 focus:outline-none"
  >
    <X className="w-6 h-6" />
  </button>

  {/* Navigation Links */}
  <div className="flex flex-col items-center justify-center min-h-screen px-4 py-20 space-y-8 text-2xl font-semibold text-black">

    <img src="/src/components/ForStudents/image.png" alt="" />
    <a href="#" className="hover:text-blue-600">ABOUT IITK</a>
    <a href="#" className="hover:text-blue-600">FOR COMPANIES</a>
    <a href="#" className="hover:text-blue-600">FOR STUDENTS</a>
    <a href="#" className="hover:text-blue-600">SAMVARDHAN</a>
    <a href="#" className="hover:text-blue-600">CONTACT</a>
  </div>
</div>

    
    </div>
  );
};

export default Navbar;
