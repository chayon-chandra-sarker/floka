import React from "react";
import Container from "../Container/Container";

const ScrollingText = () => {
  return (
    <div className="bg-[#f8f8f8]">
      <Container>
        <section className=" overflow-hidden">
          <div className="relative overflow-hidden">
            {/* Repeating text container */}
            <div className="flex animate-marquee gap-20">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium  tracking-tighter text-gray-800 whitespace-nowrap">
                See how our team combines creativity, technology, and strategy
              </h2>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tighter text-gray-800 whitespace-nowrap">
                See how our team combines creativity, technology, and strategy
              </h2>
              {/* Repeat again for seamless scroll */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium  tracking-tighter text-gray-800 whitespace-nowrap">
                See how our team combines creativity, technology, and strategy
              </h2>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium  tracking-tighter text-gray-800 whitespace-nowrap">
                See how our team combines creativity, technology, and strategy
              </h2>
            </div>
          </div>

          {/* Tailwind + CSS Keyframes */}
          <style>
            {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-marquee {
            display: flex;
            animation: marquee 4s linear infinite;
          }
        `}
          </style>
        </section>
      </Container>
    </div>
  );
};

export default ScrollingText;
