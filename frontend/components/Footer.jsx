import React from 'react';
import facebook from '../assets/icons/facebook.svg';
import instagram from '../assets/icons/instagram.svg';
import linkedin from '../assets/icons/linkedin.svg';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center px-4">
        <p className="mb-2">&copy; {new Date().getFullYear()} Politeknik Baja Tegal. All rights reserved.</p>

        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Facebook" className="w-6 h-6 hover:opacity-75" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" className="w-6 h-6 hover:opacity-75" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" className="w-6 h-6 hover:opacity-75" />
          </a>
        </div>

        <div className="mt-4 text-sm">
          <a href="/" className="hover:underline mr-4">Beranda</a>
          <a href="/karir" className="hover:underline mr-4">Karir</a>
          <a href="/mitra" className="hover:underline">Mitra</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;