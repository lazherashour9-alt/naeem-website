import React from "react";
import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  const phoneNumber = "218913278006";

  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[999] w-14 h-14 flex items-center justify-center rounded-full bg-green-500 shadow-lg hover:bg-green-600"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-7 h-7"
      />
    </motion.a>
  );
}