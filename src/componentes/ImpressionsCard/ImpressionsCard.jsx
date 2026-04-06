import React from "react";
import { motion } from "framer-motion";

const ImpressionsCard = () => {
  return (
    <motion.div
      className="bg-white rounded-[40px] p-8 shadow-sm border border-gray-50 flex-1"
      initial={{ x: -200, opacity: 0 }} // left থেকে শুরু
      animate={{ x: 0, opacity: 1 }}   // final position
      transition={{ duration: 0.8, ease: "easeOut" }} // animation timing
    >
      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-4">
        Impressions
      </p>
      <div className="space-y-3">
        <div className="flex justify-between items-center bg-gray-50 p-4 rounded-2xl">
          <span className="text-xs font-bold text-gray-800">Solutions</span>
          <span className="text-xs text-gray-400">100%</span>
        </div>
        <div className="flex justify-between items-center p-4 rounded-2xl shadow-lg">
          <span className="text-xs font-bold">UI/UX</span>
          <span className="text-xs opacity-60">90%</span>
        </div>
        <div className="flex justify-between items-center bg-gray-50 p-4 rounded-2xl">
          <span className="text-xs font-bold text-gray-800">Explore</span>
          <span className="text-xs text-gray-400">72%</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ImpressionsCard;