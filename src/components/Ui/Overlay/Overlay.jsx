import { motion } from "framer-motion";

export default function Overlay({ click, className }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className={`fixed inset-0 z-10 bg-black/60 ${className || ""}`}
      onClick={click}
    ></motion.div>
  );
}
