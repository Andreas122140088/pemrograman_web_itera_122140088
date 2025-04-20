import React from 'react';
import fotoProfil from '../../img/DSC02116.jpg';
import LogoIG from '../../img/LogoIG.jpg'
import './About.css'

const AboutMe = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">About Me</h1>

      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-10 h-10 bg-gray-200 overflow-hidden shadow-md">
          {}
          <img src={fotoProfil} alt="Foto Profil" className="w-full h-full object-cover" />
        </div>

        {/* Biodata */}
        <div className="text-lg text-gray-700 space-y-2">
          <p><strong>Nama:</strong> Andreas Alfin Yoga Utama</p>
          <p><strong>NIM:</strong> 122140088</p>
          <p><strong>Program Studi:</strong> Teknik Informatika</p>
          <p><strong>Tempat, Tanggal Lahir:</strong> Bandar Lampung, 19 September 2003</p>

          <p className="flex items-center gap-2">
          
         
            <a
              href="https://www.instagram.com/agoy.ay"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
             <img
              src={LogoIG}
              alt="Instagram Logo"
              className="w-12 h-12"
            />
            </a>
          </p>

        </div>
      </div>
    </div>
  );
};

export default AboutMe;
