import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center text-white">

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold text-[#CCFF00]">
          DS
        </h1>

        <p className="mt-4 text-gray-400">
          Loading Portfolio...
        </p>

      </motion.div>

    </div>
  );
}

export default Loader;