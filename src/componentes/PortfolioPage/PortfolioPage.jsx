import React from "react";
import DarkShowcaseCard from "../DarkShowcaseCard/DarkShowcaseCard";
import WorldwideStatsCard from "../WorldwideStatsCard/WorldwideStatsCard";
import { motion } from "framer-motion";
import ProjectCompletCount from "../ProjectCompletCount/ProjectCompletCount";

const PortfolioPage = () => {
  return (
    <div className="bg-[#f8f8f8] min-h-screen font-sans text-black selection:bg-black selection:text-white">
      {/* SECTION: FUN FACTS BENTO  */}
      <section className="bg-white py-24 px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 rounded-[40px] overflow-hidden min-h-[500px]">
            <img
              src="https://i.ibb.co.com/9mDRfZkF/10046.webp"
              className="w-full h-full object-cover"
              alt="Fun Facts"
            />
          </div>
          <div className="lg:col-span-7">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-6 block">
              Fun Facts
            </span>
            <div>
              <motion.h2
                className="text-4xl md:text-5xl font-medium leading-tight mb-12"
                initial={{ x: 200, opacity: 0 }} // right থেকে শুরু
                animate={{ x: 0, opacity: 1 }} // final position
                transition={{ duration: 0.8, ease: "easeOut" }} // smooth slide
              >
                Consistently delivering impactful results through a perfect
                blend.
              </motion.h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProjectCompletCount></ProjectCompletCount>
              <div className="row-span-2 bg-[#f8f8f8] p-10 rounded-[40px] flex flex-col justify-between">
                <div>
                  <div className="flex text-orange-500 text-5xl gap-1 ">
                    ★★★★★
                  </div>
                  <h3 className="text-7xl font-bold border-b-2 border-gray-300 pb-4">
                    4.9/5
                  </h3>
                  <p className="font-normal text-xl mt-5">
                    We offer end-to-end creative solutions that make brands
                    unforgettable.
                  </p>
                  <button className="flex items-center gap-3 group mt-10">
                    <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                      +
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-widest">
                      Hire us now
                    </span>
                  </button>
                  <WorldwideStatsCard></WorldwideStatsCard>
                </div>
              </div>
              <div className="bg-black rounded-[32px] text-white flex flex-col justify-end min-h-[250px]">
                <DarkShowcaseCard></DarkShowcaseCard>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
