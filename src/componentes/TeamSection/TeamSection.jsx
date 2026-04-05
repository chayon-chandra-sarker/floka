import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import teamImag from "../../assets/image/10085.jpg";

const TeamSection = () => {
  const teamMembers = [
    { name: "Nicolas K. Ellington", role: "FOUNDER", img: "https://i.ibb.co/LDzT40Sd/10063.png" },
    { name: "Carlos E. Ashcroft", role: "CEO", img: "https://i.ibb.co/RTqMQySM/10064.png" },
    { name: "Leonardo F. Ashton", role: "UX DESIGNER", img: "https://i.ibb.co/pNQhV0d/10068.png" },
    { name: "Ricardo P. Winslow", role: "UI DESIGNER", img: "https://i.ibb.co/BpK5SCN/10065.png" },
  ];

  return (
    <section className="bg-[#f9f9f9] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-16 font-sans overflow-hidden">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-16">
        
        {/* LEFT SIDE */}
        <div className="lg:col-span-5 space-y-6 sm:space-y-8 md:space-y-10">
          
          <div className="space-y-3 sm:space-y-4 text-center lg:text-left">
            <h4 className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] text-gray-400">
              Our Avengers
            </h4>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-[1.2] text-[#111] tracking-tight">
              Meet with our team member
            </h1>
          </div>

          {/* Tabs */}
          <div className="flex justify-center lg:justify-start items-center gap-6 sm:gap-8 md:gap-10 border-b border-gray-100 pb-4 sm:pb-6">
            <button className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest border-b-2 border-black pb-3 sm:pb-4">
              Design Team
            </button>
            <button className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-gray-400 pb-3 sm:pb-4 hover:text-black transition">
              Development Team
            </button>
          </div>

          <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-md text-center lg:text-left">
            What began over coffee-fueled brainstorming sessions has grown into a thriving digital agency.
          </p>

          {/* CTA */}
          <div className="flex justify-center lg:justify-start">
            <button className="flex items-center gap-4 sm:gap-5 group py-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center text-white transition-transform duration-500 group-hover:rotate-[360deg]">
                <span className="text-xl sm:text-2xl font-light">+</span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase">
                Join With Us
              </span>
            </button>
          </div>

          {/* Image */}
          <div>
            <img
              src={teamImag}
              className="rounded-xl sm:rounded-2xl w-full h-[220px] sm:h-[280px] md:h-[320px] object-cover"
              alt="team"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="bg-white p-6 sm:p-7 md:p-8 rounded-3xl sm:rounded-[40px] md:rounded-[48px] shadow-sm cursor-pointer group"
            >
              
              {/* Image */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden mb-6 sm:mb-8 bg-[#e3d5c5]">
                <motion.img
                  src={member.img}
                  alt={member.name}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-60 sm:h-72 md:h-80 object-cover mix-blend-multiply opacity-95"
                />
              </div>

              {/* Info */}
              <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-center sm:text-left">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-[10px] sm:text-[11px] font-bold text-gray-400 tracking-widest uppercase">
                  {member.role}
                </p>
              </div>

              {/* Social */}
              <div className="flex justify-center sm:justify-start gap-4 sm:gap-5 text-gray-400">
                <a href="#" className="hover:text-black transition"><FaFacebookF size={16} /></a>
                <a href="#" className="hover:text-black transition"><FaTwitter size={16} /></a>
                <a href="#" className="hover:text-black transition"><FaLinkedinIn size={16} /></a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;