import React from "react";
import Container from "../Container/Container";
import ceoImg from "../../assets/image/10025.webp";
import bgBlcak from "../../assets/image/10095.jpg";

const Experience = () => {
  return (
    <div className="bg-[#f8f8f8]">
      <Container>
        <section className="py-20 px-6 md:px-12 font-sans">
          <div className="container mx-auto">
            {/* Top Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
              <div className="max-w-[250px]">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 border border-gray-100 italic font-bold text-2xl text-black">
                  F
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  We design every project with long-term success in mind.
                </p>
              </div>

              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight">
                  Our approach is straightforward— prioritizing functionality,
                  speed, and clarity for solutions.
                </h2>
                <button className="mt-6 w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all text-gray-600 hover:border-black">
                  ↓
                </button>
              </div>
            </div>

            {/* Grid Layout Section */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
              {/* Left Card: Stats */}
              <div className="md:col-span-3 bg-white rounded-[40px] p-10 flex flex-col justify-between shadow-sm border border-gray-50">
                <div>
                  <h3 className="text-7xl font-bold text-gray-900">
                    25<span className="text-gray-300 ml-1">+</span>
                  </h3>
                  <p className="text-gray-400 uppercase tracking-widest text-[10px] mt-2 font-bold">
                    Years of experience
                  </p>
                  <div className="h-[1px] bg-gray-100 my-8"></div>
                  <p className="text-gray-500 leading-relaxed italic text-sm">
                    Explore how we transform ideas into extraordinary digital
                    experiences.
                  </p>
                </div>

                <div className="mt-12">
                  <div className="flex -space-x-3 mb-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
                      >
                        <img
                          src={`https://i.pravatar.cc/100?img=${i + 10}`}
                          alt="user"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <p className="text-xs font-bold text-gray-800">
                    1200+ happy users review
                  </p>
                </div>
              </div>

              {/* Middle Card: Image/Quote Card */}
              <div
                className=" w-full md:col-span-6 relative rounded-[40px] overflow-hidden group min-h-[500px]"
                style={{ backgroundColor: "#101010" }} 
              >
                {/* Background Text/Texture Image if any */}
                <div 
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{ backgroundImage: `url(${bgBlcak})` }}
                ></div>

                {/* Main CEO Image */}
                <img
                  src={ceoImg}
                  alt="CEO"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 z-10"
                />

                {/* Award Badges (Top Right) */}
                <div className="absolute top-8 right-8 flex flex-col items-end gap-3 z-30">
                  <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-3 flex flex-col items-center min-w-[70px]">
                    <span className="text-[7px] text-white/60 uppercase font-black tracking-[2px]">Ultra</span>
                    <span className="text-[7px] text-white uppercase font-black tracking-[1px] mb-1">Prestige</span>
                    <div className="flex gap-0.5 text-[8px] text-white mb-1">★★★★★</div>
                    <span className="text-[8px] text-white font-bold uppercase">Winner</span>
                  </div>
                  <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-3 flex flex-col items-center min-w-[70px]">
                    <span className="text-[7px] text-white uppercase font-black tracking-[2px]">Hyper</span>
                    <span className="text-[7px] text-white uppercase font-black tracking-[1px] mb-1">Best</span>
                    <div className="flex gap-0.5 text-[8px] text-white mb-1">★★★★★</div>
                    <span className="text-[8px] text-white font-bold uppercase">Winner</span>
                  </div>
                </div>

                {/* Gradient Overlay and Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-10 flex flex-col justify-end z-20">
                  <p className="text-white text-xl md:text-2xl font-medium leading-snug mb-6 max-w-[90%]">
                    “ At Floka, we merge strategy, creativity, and technology to
                    shape brands that people love. ”
                  </p>
                  <div className="text-white text-sm">
                    <span className="font-bold">Merizo H. Yelso</span>
                    <span className="opacity-60 ml-1.5 font-medium">/ CEO</span>
                  </div>
                </div>
              </div>

              {/* Right Section: Two Smaller Cards */}
              <div className="md:col-span-3 flex flex-col gap-6">
                {/* Follow Us Card */}
                <div className="bg-white rounded-[40px] p-8 shadow-sm border border-gray-50 flex-1">
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-4">
                    Follow us
                  </p>
                  <h4 className="text-lg font-bold mb-6 text-gray-900">For check updates</h4>
                  <div className="flex flex-wrap gap-2">
                    {["DRIBBBLE", "BEHANCE", "LINKEDIN", "X", "XING"].map(
                      (link) => (
                        <span
                          key={link}
                          className="px-3 py-1.5 border border-gray-100 rounded-full text-[9px] font-bold text-gray-800 hover:bg-black hover:text-white cursor-pointer transition-all"
                        >
                          {link}
                        </span>
                      ),
                    )}
                  </div>
                </div>

                {/* Impressions Card */}
                <div className="bg-white rounded-[40px] p-8 shadow-sm border border-gray-50 flex-1">
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
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Experience;