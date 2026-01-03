import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  return (
    <>
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919444146869?text=Hi!%20I'm%20interested%20in%20your%20plants."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="floating-button bottom-24 right-6 bg-[#25D366] text-white"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:+919444146869"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="floating-button bottom-6 right-6 bg-primary text-primary-foreground"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
      </motion.a>
    </>
  );
};

export default FloatingButtons;
