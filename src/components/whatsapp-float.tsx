"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getWhatsAppLink } from "@/constant";
import WhatsAppIcon from "@/components/whatsapp-icon";

const WhatsAppFloat = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, type: "spring", stiffness: 300, damping: 20 }}
      className="fixed bottom-20 md:bottom-6 right-5 z-50 print:hidden"
    >
      <Link
        target="_blank"
        href={getWhatsAppLink("Hi Navin, I'd like to talk about a freelance project.")}
        aria-label="Message on WhatsApp"
        className="group flex items-center gap-2 rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 pl-3 pr-3 h-12 hover:pr-4 transition-all duration-300"
      >
        <WhatsAppIcon size={24} />
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium group-hover:max-w-[140px] transition-all duration-300">
          Chat on WhatsApp
        </span>
      </Link>
    </motion.div>
  );
};

export default WhatsAppFloat;
