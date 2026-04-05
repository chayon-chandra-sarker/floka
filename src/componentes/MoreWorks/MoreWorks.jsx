import React from "react";
import FAQSection from "../FAQSection/FAQSection";
import ClientMarquee from "../ClientMarquee/ClientMarquee";

const MoreWorks = () => {
  return (
    <div>
      <section>
        <div className="flex justify-center items-center my-9">
          <div className="mt-1 sm:mt-2 flex items-center gap-2">
            <div className="w-12 h-12  rounded-full bg-black flex items-center justify-center text-white text-xl">
              +
            </div>
            <span className="text-2xl  font-bold tracking-tighter text-black uppercase">
              more works
            </span>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-[#f8f8f8] font-sans text-gray-900">
          <div className="bg-black pt-24 flex flex-col items-center justify-center text-center">
            <h2 className="text-white text-7xl md:text-[120px] font-medium leading-none tracking-tight">
              Company
            </h2>
            <h2 className="text-gray-600 text-7xl md:text-[120px] font-medium leading-none tracking-tight -mt-4">
              expertise
            </h2>
          </div>
        </div>
      </section>
      <FAQSection></FAQSection>
     <ClientMarquee></ClientMarquee>
    </div>
  );
};

export default MoreWorks;
