import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-4 py-3 flex items-center justify-between">
      <div className="flex items-center">
        <img src={logo} alt="Logo Poltek Baja" className="h-10 w-auto" />
        <h1 className="ml-3 text-lg font-bold">Politeknik Baja Tegal</h1>
      </div>

      <button
        className="md:hidden text-2xl"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        ☰
      </button>

      <ul className={`md:flex md:space-x-6 ${isOpen ? 'block' : 'hidden'} md:block mt-4 md:mt-0`}>
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-600 font-bold' : ''}>Beranda</NavLink></li>
        <li><NavLink to="/profil">Profil</NavLink></li>
        <li><NavLink to="/prospek">Prospek</NavLink></li>
        <li><NavLink to="/tentang">Tentang</NavLink></li>
        <li><NavLink to="/kemitraan">Kemitraan</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
