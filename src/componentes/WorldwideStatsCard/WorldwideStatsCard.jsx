import React from 'react';

const WorldwideStatsCard = () => {
  return (
    <div className="max-w-md pt-10">
      <div className="relative h-[150px] w-full rounded-xl overflow-hidden group cursor-pointer">
        
        <img 
          src="https://i.ibb.co.com/GrM6BgZ/10083.webp" 
          alt="Office Background" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/50 transition-colors duration-500 group-hover:bg-black/40"></div>

        <div className="relative h-full flex items-center justify-between px-8 py-6">
          
          <div className="max-w-[150px]">
            <h4 className="text-white text-xl font-medium leading-tight tracking-tight">
              Worldwide base around the world
            </h4>
          </div>

          <div className="flex items-start">
            <span className="text-white text-6xl md:text-4xl font-bold tracking-tighter">
              5+
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldwideStatsCard;