import React from 'react';
import bgImage from '../assets/bg-image.png';
import nisha from '../assets/tentang-2.png';
import salwa from '../assets/tentang-4.jpg';
import rafly from '../assets/tentang-1.jpeg';
import dea from '../assets/tentang-3.png';

function About() {
  return (
    <div className="about-page">
      <header className="tentang bg-gray-100 p-6 text-center relative">
        <h1 className="text-3xl font-bold mb-4">Politeknik Baja Tegal</h1>
        <img src={bgImage} alt="Background" className="bg w-full h-auto mb-6" />
        <div className="tentang2 max-w-3xl mx-auto text-lg text-gray-700">
          <p>
            Website ini dibuat oleh tim kami yang bernama <strong>Capybara</strong>, yang berasal dari Politeknik Baja Tegal, Program Studi Teknik Informatika.
            Kami merupakan sekelompok mahasiswa yang berkolaborasi untuk mengembangkan proyek ini sebagai bagian dari pembelajaran di bidang teknologi dan pengembangan web.
            Dengan semangat kerja sama, kreativitas, dan tanggung jawab, kami berupaya menghadirkan website yang bermanfaat dan mudah digunakan.
          </p>
        </div>
      </header>

      <section className="tim py-10 bg-white">
        <h2 className="text-2xl font-semibold text-center mb-8">TIM KAMI</h2>
        <div className="tim-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
          <div className="tim-isi text-center">
            <img src={nisha} alt="Fitrohtun Nisha" className="w-32 h-32 object-cover mx-auto rounded-full mb-2" />
            <p>Fitrohtun Nisha (23.1.9.0014)</p>
          </div>

          <div className="tim-isi text-center">
            <img src={salwa} alt="Diajeng Salwa" className="w-32 h-32 object-cover mx-auto rounded-full mb-2" />
            <p>Diajeng Salwa Aulan Ni'mah (23.1.9.0024)</p>
          </div>

          <div className="tim-isi text-center">
            <img src={rafly} alt="Rafly Ashraffi Rachmat" className="w-32 h-32 object-cover mx-auto rounded-full mb-2" />
            <p>Rafly Ashraffi Rachmat (23.1.9.0049)</p>
          </div>

          <div className="tim-isi text-center">
            <img src={dea} alt="Deawi Guna Pratiwi" className="w-32 h-32 object-cover mx-auto rounded-full mb-2" />
            <p>Deawi Guna Pratiwi (23.1.9.0009)</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
