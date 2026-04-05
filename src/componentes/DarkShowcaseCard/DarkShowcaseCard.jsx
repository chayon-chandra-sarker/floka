import React from 'react';

const DarkShowcaseCard = () => {
  const images = [
    "https://i.ibb.co.com/PGNDD635/10047.webp", 
    "https://i.ibb.co.com/1Gr4d3yj/10048.webp", 
    "https://i.ibb.co.com/5hg76GNZ/10049.webp"  
  ];

  return (
    <div className="bg-black text-white p-12 rounded-[40px] relative overflow-hidden min-h-[500px] flex flex-col justify-end">
      
      {/* SECTION 1: Floating Image Cards (Top Area) */}
      <div className="absolute top-10 left-10 flex -space-x-12">
        <div className="w-[180px] h-[220px] bg-gray-700 rounded-[32px] overflow-hidden rotate-[-12deg] shadow-2xl border-4 border-black group">
          <img 
            src={images[0]} 
            alt="Work process" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
          />
        </div>
        <div className="w-[180px] h-[220px] bg-gray-800 rounded-[32px] overflow-hidden rotate-[5deg] shadow-2xl border-4 border-black -translate-y-4 group">
          <img 
            src={images[1]} 
            alt="Sketching ideas" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
          />
        </div>
        <div className="w-[180px] h-[220px] bg-gray-700 rounded-[32px] overflow-hidden rotate-[8deg] shadow-2xl border-4 border-black group">
          <img 
            src={images[2]} 
            alt="Digital solutions" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
          />
        </div>

      </div>

      {/* SECTION 2: Typography (Bottom Text Area) */}
      <div className="relative z-10 max-w-sm mt-20">
        <h3 className="text-xl font-medium leading-[1.3] text-white">
          More than 2k+ projects
        </h3>
        <p className="text-lg font-light leading-relaxed text-white mt-2">
          completed—each crafted to deliver real-world results for ambitious brands.
        </p>
      </div>

    </div>
  );
};

export default DarkShowcaseCard;