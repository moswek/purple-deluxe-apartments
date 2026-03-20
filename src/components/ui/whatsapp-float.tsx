'use client';

import { motion } from 'framer-motion';

export function WhatsAppFloat() {
  const phoneNumber = '256780876369';

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 shadow-2xl shadow-black/30 hover:scale-110 transition-transform duration-300"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
    >
      <img
        src="/WhatsApp.png"
        alt="WhatsApp"
        className="w-full h-full object-contain"
      />
    </motion.a>
  );
}
