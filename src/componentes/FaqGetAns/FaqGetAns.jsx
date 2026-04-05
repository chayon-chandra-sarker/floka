import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FaqGetAns = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  const faqs = [
    {
      question: "What is artificial intelligence (AI)?",
      answer:
        "Explore how we transform ideas into extraordinary digital experiences. Each case study is a testament to our design thinking, strategic approach, and creative execution.",
      image: "https://i.ibb.co/nM6JS3k4/10038.webp",
      hasButton: true,
    },
    {
      question: "How does AI improve business efficiency?",
      answer:
        "Explore how we transform ideas into extraordinary digital experiences.",
      image: "https://i.ibb.co/9mDRfZkF/10046.webp",
      hasButton: true,
    },
    {
      question: "How long does AI implementation take?",
      answer: "Explore how we transform ideas into extraordinary digital experiences.",
      image: "https://i.ibb.co/5Wf1cMDC/10073.jpg",
      hasButton: true,
    },
    {
      question: "What industries can benefit from AI?",
      answer: "Explore how we transform ideas into extraordinary digital experiences.",
      image: "https://i.ibb.co/5Wf1cMDC/10073.jpg",
      hasButton: true,
    },
    {
      question: "What are the costs of AI solutions?",
      answer: "Explore how we transform ideas into extraordinary digital experiences.",
      image: "https://i.ibb.co/5Wf1cMDC/10073.jpg",
      hasButton: true,
    },
  ];

  return (
    <section className="bg-[#f9f9f9] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16 font-sans">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-16">
        
        {/* LEFT SIDE */}
        <div className="lg:col-span-4 space-y-8 md:space-y-10">
          
          <div>
            <h4 className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-4">
              FAQ & GET ANSWER
            </h4>

            <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-xs">
              Don't found anything yet. Feel free to ask anything.
              <br />
              <button className="text-black font-bold border-b border-black mt-2 hover:text-gray-600 transition">
                Let's Talk
              </button>
            </p>
          </div>

          <div className="relative group cursor-pointer">
            <img
              src="https://i.ibb.co/PZSTjJ4f/10070.jpg"
              className="rounded-2xl md:rounded-[32px] w-full h-[220px] sm:h-[260px] md:h-[320px] object-cover grayscale transition duration-700 group-hover:grayscale-0"
              alt="Support"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-8">
          
          {/* Heading */}
          <div className="mb-10 md:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.2] text-[#111] tracking-tight">
              Have more questions?
              <br />
              <span className="text-gray-900">We’ve answers.</span>
            </h2>
          </div>

          {/* FAQ LIST */}
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-100 last:border-0">
                
                {/* Question */}
                <button
                  onClick={() =>
                    setActiveFaq(activeFaq === index ? -1 : index)
                  }
                  className={`w-full flex items-center justify-between py-5 sm:py-6 md:py-7 px-4 sm:px-6 rounded-2xl transition ${
                    activeFaq === index
                      ? "bg-white shadow"
                      : "hover:bg-gray-100/50"
                  }`}
                >
                  <span className="text-sm sm:text-base md:text-lg font-medium text-left">
                    {faq.question}
                  </span>

                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-black flex items-center justify-center transition ${
                      activeFaq === index
                        ? "bg-black text-white rotate-180"
                        : ""
                    }`}
                  >
                    {activeFaq === index ? "−" : "+"}
                  </div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="px-4 sm:px-6 pb-6 pt-2 flex flex-col md:flex-row gap-6 bg-white rounded-b-2xl">
                        
                        {/* Image */}
                        {faq.image && (
                          <img
                            src={faq.image}
                            className="w-full md:w-56 h-36 sm:h-40 object-cover rounded-xl"
                            alt="faq"
                          />
                        )}

                        {/* Text */}
                        <div className="space-y-5 flex-1">
                          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                            {faq.answer}
                          </p>

                          {faq.hasButton && (
                            <button className="flex items-center gap-3 group">
                              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white transition group-hover:scale-110">
                                +
                              </div>
                              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest">
                                Get In Touch
                              </span>
                            </button>
                          )}
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FaqGetAns;