import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => (
  <section
    id="contact"
    className="py-16 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"
  >
    <motion.div
      className="max-w-xl mx-auto px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="rounded-2xl shadow-2xl bg-white/90 dark:bg-gray-900/80 p-10 flex flex-col items-center gap-6">
        <motion.h2
          className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Contact
        </motion.h2>
        <motion.p
          className="text-gray-700 dark:text-gray-200 mb-2 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Let's connect! Feel free to reach out for collaborations or just a
          friendly hello.
        </motion.p>
        <div className="flex flex-col gap-3 items-center w-full">
          <motion.a
            href="mailto:raashidm862@gmail.com"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 text-lg font-medium transition"
            whileHover={{ scale: 1.07 }}
          >
            <FaEnvelope className="text-xl" /> raashidm862@gmail.com
          </motion.a>
          <motion.a
            href="tel:+94787370302"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 text-lg font-medium transition"
            whileHover={{ scale: 1.07 }}
          >
            <FaPhoneAlt className="text-xl" /> (+94) 787-370-302
          </motion.a>
        </div>
        <div className="flex justify-center gap-6 mt-4">
          <motion.a
            href="https://www.linkedin.com/in/mohamed-raashid/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-600 dark:text-gray-300 hover:text-blue-500 transition"
            whileHover={{ scale: 1.2, color: "#2563eb" }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com/Raashi-d"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-600 dark:text-gray-300 hover:text-blue-500 transition"
            whileHover={{ scale: 1.2, color: "#2563eb" }}
          >
            <FaGithub />
          </motion.a>
        </div>
      </div>
    </motion.div>
  </section>
);

export default Contact;
