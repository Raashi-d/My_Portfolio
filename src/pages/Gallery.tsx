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
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={closeModal}
            >
              &times;
            </button>
            <img 
              src={selectedImage} 
              alt="Selected Certificate" 
              className="modal-image"
            />
          </div>
        </div>
      )}

      <style>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 10px;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s forwards;
        }

        .section-title {
          text-align: center;
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 2rem;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem;
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.75);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 50;
        }

        .modal-content {
          position: relative;
          background: white;
          padding: 20px;
          border-radius: 8px;
          max-width: 90%;
          max-height: 90%;
          overflow: auto;
        }

        .modal-close {
          position: absolute;
          top: -15px;
          right: -15px;
          background: gray;
          color: white;
          border: none;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          cursor: pointer;
          font-size: 20px;
          line-height: 30px;
          text-align: center;
        }

        .modal-image {
          max-width: 100%;
          max-height: 80vh;
          object-fit: contain;
        }
      `}</style>
    </div>
  );
};

export default Gallery;