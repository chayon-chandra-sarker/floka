import React, { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const services = [
    {
      title: "User Interface & Experience Design",
      description:
        "From brand strategy to immersive digital experiences, we offer end-to-end creative solutions...",
      tags: ["BRANDING", "MAGAZINE", "PRODUCT"],
      image: "https://i.ibb.co.com/nM6JS3k4/10038.webp",
    },
    {
      title: "Web Development",
      description:
        "From brand strategy to immersive digital experiences, we offer end-to-end creative solutions...",
      tags: ["BRANDING", "MAGAZINE", "PRODUCT", "UX"],
      image: "https://i.ibb.co.com/FkhKxTL0/10036.webp",
    },
    {
      title: "Search Engine Optimization",
      description:
        "From brand strategy to immersive digital experiences, we offer end-to-end creative solutions...",
      tags: ["BRANDING", "PRODUCT", "UX"],
      image: "https://i.ibb.co.com/NnNjVdCX/10034.webp",
    },
    {
      title: "Low-Code Development",
      description:
        "From brand strategy to immersive digital experiences, we offer end-to-end creative solutions...",
      tags: ["BRANDING", "UX"],
      image: "https://i.ibb.co.com/h12H075R/10041.webp",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6 md:px-12">
      <div className="container mx-auto">
        {/* Border Top */}
        <div className="border-t border-gray-800">
          {services.map((service, index) => (
            <div key={index} className="border-b border-gray-800">
              {/* Accordion Header */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full py-3 flex items-center justify-between text-left group transition-all"
              >
                <div className="flex items-center gap-8">
                  {/* Plus/Minus Icon */}
                  <div
                    className={`w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center text-2xl transition-all duration-300 ${openIndex === index ? "bg-white text-black" : "group-hover:border-white"}`}
                  >
                    {openIndex === index ? "−" : "+"}
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-xl md:text-2xl font-medium transition-colors ${openIndex === index ? "text-white" : "text-gray-500 group-hover:text-gray-300"}`}
                  >
                    {service.title}
                  </h3>
                </div>
              </button>

              {/* Accordion Content (Animated) */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-[500px] pb-12" : "max-h-0"}`}
              >
                <div className="flex flex-col md:flex-row gap-10 items-start pl-20">
                  {/* Text Side */}
                  <div className="flex-1">
                    <p className="text-gray-400 text-lg max-w-lg mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-5 py-2 bg-[#1a1a1a] rounded-full text-[10px] font-bold tracking-widest hover:bg-white hover:text-black transition-colors cursor-default"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Image Side */}
                  <div className="w-full md:w-80 h-52 rounded-[32px] overflow-hidden shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-1 ml-12 sm:mt-2 flex items-center gap-1 sm:gap-2 group">
          <div className="w-6 h-6 sm:w-8 sm:h-8  rounded-full flex items-center justify-center text-white text-sm text-xl">
            +
          </div>
          <span className="text-xl font-bold tracking-tighter text-white uppercase">
            Let's Talk
          </span>
        </button>
      </div>
    </section>
  );
};

export default FAQSection;
