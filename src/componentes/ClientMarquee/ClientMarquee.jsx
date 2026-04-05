import React from "react";

const ClientMarquee = () => {
  const reviews = [
    { id: 1, text: "“ 10/10 well recommended ”", img: "https://i.ibb.co.com/PZJ2PhFs/10044.webp" },
    { id: 2, text: "“ Super speedy website designer ”", img: "https://i.ibb.co.com/Y43hfxQz/10045.webp" },
    { id: 3, text: "“ Great in UI/UX ”", img: "https://i.ibb.co.com/LXWymwY2/10042.webp" },
    { id: 4, text: "“ Best design communicator ”", img: "https://i.ibb.co.com/Kpzw8x2g/10043.webp" }
  ];

  return (
    <section className="bg-black py-16 overflow-hidden">
      <div className="relative overflow-hidden">
        
        {/* Moving container */}
        <div className="flex animate-marquee gap-8">
          
          {/* Duplicate for seamless loop */}
          {[...reviews, ...reviews].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-[#1a1a1a] px-5 py-3 rounded-full border border-gray-800 hover:bg-gray-900 transition-colors cursor-pointer whitespace-nowrap"
            >
              <img
                src={item.img}
                alt="client"
                className="w-12 h-12 rounded-full border-2 border-gray-700 object-cover"
              />
              <p className="text-white text-lg font-medium">
                {item.text}
              </p>
            </div>
          ))}

        </div>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 25s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default ClientMarquee;