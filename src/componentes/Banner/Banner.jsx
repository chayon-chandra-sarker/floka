import React from "react";
import bannerImg from "../../assets/bannerImg/10019.jpg";
import Container from "../Container/Container";

const Banner = () => {
  return (
    <Container>
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center rounded-3xl">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="https://floka.casethemes.net/wp-content/uploads/2025/06/home-1-video.mp4"
        />

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/20 z-10" />

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
          {/* Left Text */}
          <div className="text-white flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-[60px] sm:text-[90px] md:text-[120px] lg:text-[200px] font-bold leading-none tracking-tight">
              Floka
            </h1>
            <p className="text-2xl  sm:text-3xl md:text-4xl lg:text-6xl font-light opacity-40 -mt-2 sm:-mt-3 md:-mt-4">
              Studio
            </p>
          </div>

          {/* Right Card & Description */}
          <div className="mt-8 md:mt-0 w-full max-w-md md:max-w-sm flex flex-col items-center md:items-start">
            {/* Profile Card */}
            <div className="bg-white rounded-2xl md:rounded-[30px] p-4 flex items-center gap-3 md:gap-4 shadow-2xl mb-6 w-full">
              <img
                src={bannerImg}
                alt="Profile"
                className="w-16 h-20 sm:w-20 sm:h-24 object-cover rounded-2xl"
              />
              <div className="flex flex-col">
                <span className="text-[8px] sm:text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                  Head of Idea
                </span>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-black">
                  Almond D. Nelsi
                </h3>
                <button className="mt-1 sm:mt-2 flex items-center gap-1 sm:gap-2 group">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-black flex items-center justify-center text-white text-sm sm:text-lg">
                    +
                  </div>
                  <span className="text-[8px] sm:text-xs font-bold tracking-tighter text-black uppercase">
                    Let's Talk
                  </span>
                </button>
              </div>
            </div>

            {/* Description Text */}
            <div className="text-white space-y-2 pl-1 sm:pl-2 text-center md:text-left">
              <p className="text-sm sm:text-base md:text-lg font-medium leading-tight">
                No cookie-cutter websites. No fluff.
              </p>
              <p className="text-xs sm:text-sm md:text-base opacity-70 leading-relaxed">
                Just real tools and smart strategies to grow your business and
                elevate your brand.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Banner;
