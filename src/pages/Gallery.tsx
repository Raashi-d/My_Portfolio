import React, { useState } from 'react';

const certificates = [
  { src: './My_Portfolio/certificate1.jpg', alt: 'Certificate 1' },
  { src: './My_Portfolio/certificate2.jpg', alt: 'Certificate 2' },
  { src: './My_Portfolio/certificate3.jpg', alt: 'Certificate 3' },
  { src: './My_Portfolio/certificate4.jpg', alt: 'Certificate 4' },
  { src: './My_Portfolio/certificate5.jpg', alt: 'Certificate 5' },
  { src: './My_Portfolio/certificate6.jpg', alt: 'Certificate 6' }
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (src: string) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="section-title">Achievement Gallery</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certificates.map((certificate, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-lg animate-fadeIn"
              onClick={() => openModal(certificate.src)}
            >
              <img
                src={certificate.src}
                alt={certificate.alt}
                className="w-full h-full object-contain transition-transform duration-300 hover:scale-105 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative bg-white p-4 rounded-lg max-w-3xl w-full">
            <button 
              className="absolute top-2 right-2 text-black bg-gray-200 rounded-full p-2 hover:bg-gray-300"
              onClick={closeModal}
            >
              &times;
            </button>
            <img 
              src={selectedImage} 
              alt="Selected Certificate" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;