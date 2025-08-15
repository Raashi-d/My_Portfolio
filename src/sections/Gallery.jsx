import React, { useState } from "react";
import { motion } from "framer-motion";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const eduCertificates = [
  "/edu_certificates/1.jpg",
  "/edu_certificates/2.jpg",
  "/edu_certificates/3.jpg",
  "/edu_certificates/4.jpg",
  "/edu_certificates/5.jpg",
  "/edu_certificates/6.jpg",
  "/edu_certificates/7.jpg",
];
const extraCertificates = [
  "/certificate_img/certificate1.jpg",
  "/certificate_img/certificate2.jpg",
  "/certificate_img/certificate3.jpg",
  "/certificate_img/certificate4.jpg",
  "/certificate_img/certificate5.jpg",
  "/certificate_img/certificate6.jpg",
];

const Gallery = () => {
  const [tab, setTab] = useState("edu");
  const images = tab === "edu" ? eduCertificates : extraCertificates;

  return (
    <section
      id="gallery"
      className="relative py-16 bg-gray-50 dark:bg-gray-800 overflow-hidden"
    >
      {/* Animated background bubbles */}
      <motion.div
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        style={{ filter: "blur(32px)" }}
      >
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 9 }}
          className="absolute left-10 top-1/3 w-36 h-36 rounded-full bg-pink-200 dark:bg-pink-900"
        />
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 11, delay: 2 }}
          className="absolute right-10 bottom-1/4 w-28 h-28 rounded-full bg-rose-100 dark:bg-rose-800"
        />
        <motion.div
          animate={{ x: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 13, delay: 1 }}
          className="absolute left-1/2 top-1/2 w-20 h-20 rounded-full bg-pink-100 dark:bg-pink-800"
        />
      </motion.div>
      <div className="relative max-w-5xl mx-auto px-4 z-10">
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
