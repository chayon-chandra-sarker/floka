import React from "react";

const HappyUser = () => {
  return (
    <div className="bg-[#f8f8f8] min-h-screen font-sans selection:bg-black selection:text-white">
      
      {/* SECTION: HAPPY USERS */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10 md:mb-12 text-center sm:text-left">
          <span className="text-sm sm:text-base md:text-lg font-bold uppercase tracking-widest text-gray-600">
            Happy Users
          </span>
          <span className="text-sm sm:text-base md:text-lg font-bold text-gray-600 uppercase tracking-widest">
            ©2025 CASE-THEMES™ STUDIO
          </span>
        </div>

        {/* Grid */}
        <div className="bg-white rounded-3xl md:rounded-[40px] overflow-hidden 
          grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 
          divide-x divide-y divide-gray-100 border border-gray-100"
        >
          
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div
              key={i}
              className="p-6 sm:p-8 md:p-10 flex items-center justify-center 
              grayscale hover:grayscale-0 transition duration-300 cursor-pointer"
            >
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 opacity-80">
                LOGOIPSUM
              </h4>
            </div>
          ))}

          {/* Last Card */}
          <div className="p-8 sm:p-10 md:p-16 flex flex-col items-center justify-center text-center">
            <p className="text-base sm:text-lg md:text-xl font-bold text-gray-400 uppercase mb-2">
              Next can be you.
            </p>
            <button className="text-base sm:text-lg md:text-xl font-bold uppercase tracking-wider underline underline-offset-4">
              Let's Talk
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HappyUser;