import React, { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const eduCertificates = [
  "/src/assets/edu_certificates/1.jpg",
  "/src/assets/edu_certificates/2.jpg",
  "/src/assets/edu_certificates/3.jpg",
  "/src/assets/edu_certificates/4.jpg",
  "/src/assets/edu_certificates/5.jpg",
  "/src/assets/edu_certificates/6.jpg",
  "/src/assets/edu_certificates/7.jpg",
];
const extraCertificates = [
  "/src/assets/certificate_img/certificate1.jpg",
  "/src/assets/certificate_img/certificate2.jpg",
  "/src/assets/certificate_img/certificate3.jpg",
  "/src/assets/certificate_img/certificate4.jpg",
  "/src/assets/certificate_img/certificate5.jpg",
  "/src/assets/certificate_img/certificate6.jpg",
];

const Gallery = () => {
  const [tab, setTab] = useState("edu");
  const images = tab === "edu" ? eduCertificates : extraCertificates;

  return (
    <section id="gallery" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Gallery
        </h2>
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setTab("edu")}
            className={`px-4 py-2 rounded font-medium transition ${
              tab === "edu"
                ? "bg-blue-600 text-white"
                : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200"
            }`}
          >
            Education Certificates
          </button>
          <button
            onClick={() => setTab("extra")}
            className={`px-4 py-2 rounded font-medium transition ${
              tab === "extra"
                ? "bg-blue-600 text-white"
                : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200"
            }`}
          >
            Extra-curricular Certificates
          </button>
        </div>
        <PhotoProvider>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {images.map((img, i) => (
              <PhotoView key={i} src={img}>
                <img
                  src={img}
                  alt="certificate"
                  className="w-full h-40 object-cover rounded shadow cursor-pointer hover:scale-105 transition-transform"
                />
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
      </div>
    </section>
  );
};

export default Gallery;
