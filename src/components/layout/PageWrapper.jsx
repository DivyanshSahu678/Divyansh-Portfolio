import { motion } from "framer-motion";

function PageWrapper({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-[#050505] text-white"
    >
      {children}
    </motion.main>
  );
}

export default PageWrapper;