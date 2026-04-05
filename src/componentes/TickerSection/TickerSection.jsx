import React from 'react';
import { motion } from 'framer-motion';

const TickerSection = () => {
  const tickerItems = [
    "|", "|", "|", "|",
    "|", "|", "|", "|","|", "|", "|", "|",
    "|", "|", "|", "|","|", "|", "|", "|",
    "|", "|", "|", "|","|", "|", "|", "|",
    "|", "|", "|", "|"
  ];

  return (
    <section className="bg-gray-50 py-16 relative overflow-hidden">
      
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
      
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

      <div className="flex">
        <motion.div
          className="flex flex-none gap-8 pr-8"
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            duration: 20, 
            ease: 'linear', 
            repeat: Infinity,
          }}
        >
          {tickerItems.map((item, index) => (
            <div key={index} className="flex items-center gap-8">
              <span className="text-sm font-medium uppercase tracking-[0.3em] text-gray-800 whitespace-nowrap">
                {item}
              </span>
              <div className="w-1.5 h-1.5 bg-black rounded-full opacity-20 flex-none"></div>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default TickerSection;