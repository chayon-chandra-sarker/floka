import React from "react";
import Container from "../Container/Container";

const Lets = () => {
  return (
    <div>
      <Container>
        <div className="bg-[#fcfcfc] font-sans text-[#111] selection:bg-black selection:text-white rounded-2xl">
          <div className="bg-black text-white pt-32 md:pt-40 pb-16 md:pb-20 px-6 md:px-16 relative rounded-2xl">
            
            {/* Background "Let's talk now" text */}
            <div className="absolute top-0 left-0 right-0 text-center select-none pointer-events-none">
              <h2 className="text-[20vw] sm:text-[10vw] md:text-[10vw] font-medium tracking-tighter opacity-20 leading-none">
                Let's <br /> talk now
              </h2>
            </div>

            {/* Spinning circle */}
            <div className="flex justify-center relative z-10 mb-12 md:mb-20">
              <div className="w-24 h-24 md:w-32 md:h-32 relative flex items-center justify-center">
                <svg
                  viewBox="0 0 100 100"
                  className="absolute inset-0 w-full h-full animate-spin-slow"
                >
                  <path
                    id="circlePath"
                    d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                    fill="transparent"
                  />
                  <text className="text-[6px] md:text-[8px] uppercase font-bold tracking-[0.2em] fill-white opacity-40">
                    <textPath xlinkHref="#circlePath">
                      {" "}
                      - Get In Touch - Get In Touch - Get In Touch
                    </textPath>
                  </text>
                </svg>
                <span className="text-xl md:text-2xl font-light">→</span>
              </div>
            </div>

            {/* Main Grid */}
            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 items-end mt-12 md:mt-20">
              
              {/* Column 1 */}
              <div className="space-y-6 md:space-y-10">
                <div className="w-full h-48 sm:h-64 md:h-64 rounded-3xl overflow-hidden grayscale opacity-90">
                  <img
                    src="https://i.ibb.co/5Wf1cMDC/10073.jpg"
                    className="w-full h-full object-cover"
                    alt="Footer"
                  />
                </div>
                <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter opacity-20">
                  Floka
                </h2>
              </div>

              {/* Column 2 - Links */}
              <div className="grid grid-cols-2 gap-6 md:gap-10 text-lg md:text-xl font-bold uppercase tracking-[0.15em] md:tracking-[0.2em]">
                <div className="space-y-4 md:space-y-6">
                  <p className="hover:opacity-50 cursor-pointer transition-opacity">About Us</p>
                  <p className="hover:opacity-50 cursor-pointer transition-opacity">Journal</p>
                  <p className="hover:opacity-50 cursor-pointer transition-opacity">Faq</p>
                </div>
                <div className="space-y-4 md:space-y-6">
                  <p className="hover:opacity-50 cursor-pointer transition-opacity">Get In Touch</p>
                  <p className="hover:opacity-50 cursor-pointer transition-opacity">Careers</p>
                </div>
              </div>

              {/* Column 3 - Contact */}
              <div className="space-y-4 md:space-y-8">
                <p className="text-gray-400 text-base md:text-xl leading-relaxed tracking-wide">
                  At <strong>Floka</strong>, we believe furniture should be more than just functional—it should tell your story.
                </p>
                <div className="space-y-1 text-sm md:text-xl font-light">
                  <p>info@floka-design.com</p>
                  <p className="opacity-60">+123 (456 789 00)</p>
                  <p className="opacity-60">12/A, Booston Tower, NYC</p>
                </div>
                <div className="flex gap-4 md:gap-6 opacity-30 grayscale invert text-xs md:text-sm uppercase tracking-widest">
                  <span>Fb</span>
                  <span>X</span>
                  <span>In</span>
                  <span>Be</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Lets;