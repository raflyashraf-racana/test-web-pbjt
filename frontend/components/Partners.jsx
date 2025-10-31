import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Partners() {
  const [partners, setPartners] = useState([]);
  const [selectedSector, setSelectedSector] = useState('Semua');

  // Ambil data dari file JSON lokal
  useEffect(() => {
    fetch('/data/mitra.json')
      .then((res) => res.json())
      .then((data) => setPartners(data))
      .catch((err) => console.error('Gagal memuat data mitra:', err));
  }, []);

  // Ambil semua sektor unik dari data mitra
  const sectors = ['Semua', ...new Set(partners.map((p) => p.sector))];

  const filteredPartners =
    selectedSector === 'Semua'
      ? partners
      : partners.filter((p) => p.sector === selectedSector);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="partners p-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">Kemitraan Industri</h2>

      {/* Filter Dropdown */}
      <div className="flex justify-center mb-8">
        <select
          value={selectedSector}
          onChange={(e) => setSelectedSector(e.target.value)}
          className="p-2 border rounded-md"
        >
          {sectors.map((sector) => (
            <option key={sector} value={sector}>
              {sector}
            </option>
          ))}
        </select>
      </div>

      {/* Partner Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        {filteredPartners.map((partner, index) => (
          <div
            key={index}
            className="text-center bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-20 mx-auto mb-4 object-contain"
            />
            <h3 className="text-lg font-semibold mb-2">{partner.name}</h3>
            <p className="text-gray-600 text-sm mb-2">{partner.description}</p>
            <a
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm"
            >
              Kunjungi Website
            </a>
          </div>
        ))}
      </div>

      {/* Carousel Testimoni */}
      <h3 className="text-xl font-semibold text-center mb-4">Testimoni Mitra</h3>
      <div className="max-w-2xl mx-auto">
        <Slider {...carouselSettings}>
          {filteredPartners.map((partner, index) =>
            partner.testimonial ? (
              <div key={index} className="bg-white p-6 rounded shadow text-center">
                <p className="italic text-gray-700 mb-4">“{partner.testimonial}”</p>
                <h4 className="font-bold">{partner.name}</h4>
              </div>
            ) : null
          )}
        </Slider>
      </div>
    </section>
  );
}

export default Partners;
