import React, { useState, useEffect } from 'react';
import { FaLaptopCode, FaCar, FaMicrochip, FaCogs } from 'react-icons/fa';

const jurusanIcons = {
  'Teknik Informatika': <FaLaptopCode className="text-blue-600 text-2xl mb-2" />,
  'Teknik Otomotif': <FaCar className="text-red-600 text-2xl mb-2" />,
  'Teknik Elektronika Industri': <FaMicrochip className="text-green-600 text-2xl mb-2" />,
  'Teknik Mesin': <FaCogs className="text-yellow-600 text-2xl mb-2" />,
};

function Prospek() {
  const [dataKarir, setDataKarir] = useState({});
  const [jurusanDipilih, setJurusanDipilih] = useState('');
  const [modalKarir, setModalKarir] = useState(null);

  // Simulasi fetch dari JSON lokal atau API
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data/karir.json'); // bisa diganti dengan API
      const json = await response.json();
      setDataKarir(json);
      setJurusanDipilih(Object.keys(json)[0]); // default jurusan pertama
    };
    fetchData();
  }, []);

  const handleJurusanChange = (e) => {
    setJurusanDipilih(e.target.value);
  };

  const handleCardClick = (karir) => {
    setModalKarir(karir);
  };

  const closeModal = () => {
    setModalKarir(null);
  };

  return (
    <section className="prospect p-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-6">Prospek Karir Berdasarkan Jurusan</h2>

      {/* Dropdown Filter */}
      <div className="flex justify-center mb-8">
        <select
          value={jurusanDipilih}
          onChange={handleJurusanChange}
          className="p-2 border rounded-md"
        >
          {Object.keys(dataKarir).map((jurusan) => (
            <option key={jurusan} value={jurusan}>
              {jurusan}
            </option>
          ))}
        </select>
      </div>

      {/* Card Karir */}
      <div className="mb-4 text-center">{jurusanIcons[jurusanDipilih]}</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dataKarir[jurusanDipilih]?.map((karir, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
            onClick={() => handleCardClick(karir)}
          >
            <h4 className="text-lg font-semibold mb-2">{karir.title}</h4>
            <p className="text-gray-600">{karir.description}</p>
          </div>
        ))}
      </div>

      {/* Modal Detail Karir */}
      {modalKarir && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-xl font-bold mb-2">{modalKarir.title}</h3>
            <p className="text-gray-700 mb-4">{modalKarir.description}</p>
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Prospek;
