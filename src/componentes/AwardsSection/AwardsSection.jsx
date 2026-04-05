import React from "react";
import { motion } from "framer-motion";
import awardImag from "../../assets/image/10062.jpg";

const AwardsSection = () => {
  const awards = [
    { title: "BEST DESIGNER AWARDS", platform: "AWWWARDS", year: "2025" },
    { title: "PEAKY UI DESIGNER", platform: "GOOGLE", year: "2024" },
    { title: "GREAT IN UX", platform: "APPLE", year: "2023" },
    { title: "BEST WEBSITE PICK", platform: "MICROSOFT", year: "2022" },
    { title: "NELSON UI & UX DESIGNER", platform: "SAMSUNG", year: "2021" },
  ];

  return (
    <section className="bg-[#f5f5f5] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-16 font-sans overflow-hidden">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-start">
        
        {/* LEFT SIDE */}
        <div className="lg:col-span-4 space-y-4 sm:space-y-6">
          
          <div className="relative rounded-2xl md:rounded-[32px] overflow-hidden group">
            <img 
              src={awardImag}
              alt="Team" 
              className="w-full h-[250px] sm:h-[320px] md:h-[400px] object-cover"
            />
          </div>

          <p className="text-sm sm:text-base md:text-lg font-bold uppercase tracking-widest text-gray-500 text-center lg:text-left">
            Get Rewards
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-8">
          
          {/* Badge */}
          <div className="flex justify-center lg:justify-center mb-8 md:mb-12">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border border-gray-200 flex items-center justify-center opacity-40">
              <span className="text-3xl sm:text-4xl md:text-5xl">🏆</span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.3] tracking-tight text-[#1a1a1a] mb-10 md:mb-14 lg:mb-16 text-center lg:text-left">
            Driven by passion and grounded in expertise, our team turns bold ideas into reality, leading the way in creative innovation.
          </h2>

          {/* Awards List */}
          <div className="border-t border-gray-200">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 0.98 }}
                className="group relative flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-0 py-6 sm:py-7 md:py-8 px-4 sm:px-6 border-b border-gray-200 transition-all duration-500 cursor-pointer hover:bg-white hover:shadow-sm"
              >
                
                {/* Title */}
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold tracking-widest text-gray-800 uppercase">
                    {award.title}
                  </h3>
                </div>

                {/* Platform + Year */}
                <div className="flex justify-between w-full md:w-auto md:gap-20 lg:gap-40 items-center">
                  <span className="text-sm sm:text-base md:text-lg font-bold tracking-widest text-gray-400 uppercase group-hover:text-gray-600 transition-colors">
                    {award.platform}
                  </span>
                  <span className="text-sm sm:text-base md:text-lg font-bold tracking-widest text-gray-300 group-hover:text-gray-500 transition-colors">
                    {award.year}
                  </span>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AwardsSection;