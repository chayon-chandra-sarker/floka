import React from "react";
import Container from "../Container/Container";
import porthImag from "../../assets/image/10032.webp";
import { motion } from "framer-motion";


const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Aldan Branding",
      category: "Branding, UX",
      year: "2025",
      image: "https://i.ibb.co.com/Nfk8Mpd/10028.webp",
    },
    {
      id: 2,
      title: "Aldan Branding",
      category: "Module, UX",
      year: "2025",
      image: "https://i.ibb.co.com/gZcTccGj/10030.jpg",
    },
  ];
  const projects2Parts = [
    {
      id: 1,
      title: "Aldan Branding",
      category: "Branding, UX",
      year: "2025",
      image: "https://i.ibb.co.com/NnNjVdCX/10034.webp",
    },
    {
      id: 2,
      title: "Aldan Branding",
      category: "Module, UX",
      year: "2025",
      image: "https://i.ibb.co.com/FkhKxTL0/10036.webp",
    },
  ];
  return (
    <div>
      <Container>
        <section className="bg-[#f8f8f8] pt-20 pb-10 px-6 md:px-12 font-sans overflow-hidden">
          <div className="container mx-auto">
            {/* Top Tagline with Decorative Circle */}
            <div className="flex items-center gap-4 mb-8 border-b border-gray-200 pb-4 relative">
              <span className="text-xl font-bold uppercase text-gray-700">
                Portfolio
              </span>
            </div>

            {/* Main Hero Content */}
            <div className="flex flex-col md:flex-row justify-end items-start mt-12">
              {/* Main Title Section */}
              <div className="max-w-2xl">
                <motion.h2
                  className="text-xl md:text-5xl lg:text-5xl font-medium text-gray-900"
                  initial={{ x: 200, opacity: 0 }} // right থেকে শুরু
                  animate={{ x: 0, opacity: 1 }} // final position
                  transition={{ duration: 0.8, ease: "easeOut" }} // animation timing
                >
                  Strategy to build powerful digital solutions.
                </motion.h2>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="relative rounded-[32px] overflow-hidden aspect-[4/3] bg-gray-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />

                  <div className="absolute top-6 left-6 text-white font-bold opacity-90">
                    Logoipsum
                  </div>

                  <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-black text-xl">↗</span>
                  </div>
                  <div className="absolute top-[25rem] left-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-sm text-white font-bold uppercase mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {project.category}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex justify-between items-center px-2 transition-all duration-500 group-hover:translate-x-1 bg-gray-100 py-3 px-7 rounded-xl">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">
                      {project.title}
                    </h3>
                  </div>

                  <span className="text-xs text-gray-700 font-medium ">
                    {project.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="group cursor-pointer mt-9">
            <div className="relative rounded-[32px] h-[30rem] overflow-hidden  bg-gray-200">
              <img
                src={porthImag}
                alt
                className="w-full h-[30rem] object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />

              <div className="absolute top-6 left-6 text-white font-bold opacity-90">
                Logoipsum
              </div>

              <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-black text-xl">↗</span>
              </div>
              <div className="absolute top-[25rem] left-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-sm text-white font-bold uppercase mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Branding, UX
                </p>
              </div>
            </div>
            <div className="mt-6 flex justify-between items-center px-2 transition-all duration-500 group-hover:translate-x-1 bg-gray-100 py-3 px-7 rounded-xl">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">
                  <p>Aldan Branding</p>
                </h3>
              </div>

              <span className="text-xs text-gray-700 font-medium ">
                <p>2025</p>
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">
            {projects2Parts.map((projects2Part) => (
              <div key={projects2Part.id} className="group cursor-pointer">
                <div className="relative rounded-[32px] overflow-hidden aspect-[4/3] bg-gray-200">
                  <img
                    src={projects2Part.image}
                    alt={projects2Part.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />

                  <div className="absolute top-6 left-6 text-white font-bold opacity-90">
                    Logoipsum
                  </div>

                  <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-black text-xl">↗</span>
                  </div>
                  <div className="absolute top-[25rem] left-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-sm text-white font-bold uppercase mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {projects2Part.category}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex justify-between items-center px-2 transition-all duration-500 group-hover:translate-x-1 bg-gray-100 py-3 px-7 rounded-xl">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">
                      {projects2Part.title}
                    </h3>
                  </div>

                  <span className="text-xs text-gray-700 font-medium ">
                    {projects2Part.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Portfolio;
