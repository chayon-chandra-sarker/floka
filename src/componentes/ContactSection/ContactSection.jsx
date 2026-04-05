import React from "react";
import Container from "../Container/Container";

const ContactSection = () => {
  return (
    <div>
      <Container>
        <section className="bg-black text-white py-20 px-6 md:px-16 font-sans min-h-screen flex items-center rounded-2xl">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side: Text Content */}
            <div className="space-y-12">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-6">
                  Get in touch
                </h4>
                <h1 className="text-4xl md:text-6xl font-medium leading-[1.1] max-w-lg">
                  Tell us about your project — whether it's a website, SEO, or
                  marketing.
                </h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Info 1 */}
                <div>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                    </svg>
                    Talk to us
                  </div>
                  <p className="text-gray-300 text-sm mb-1">
                    Work and general inquiries
                  </p>
                  <p className="text-xl font-medium">+123 456 789 00</p>
                </div>

                {/* Contact Info 2 */}
                <div>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    Post Address
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    541 Melville Ave, Palo Alto, CA <br />
                    94301, United States
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side: Form Card */}
            <div className="bg-white text-black rounded-[40px] p-8 md:p-12 shadow-2xl">
              <h2 className="text-3xl font-medium mb-10">
                Have a project in mind?
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="YOUR NAME"
                    className="w-full bg-[#f4f4f4] border-none rounded-2xl p-5 text-xs font-bold tracking-widest focus:ring-2 focus:ring-gray-200 outline-none"
                  />
                  <input
                    type="email"
                    placeholder="BUSINESS EMAIL"
                    className="w-full bg-[#f4f4f4] border-none rounded-2xl p-5 text-xs font-bold tracking-widest focus:ring-2 focus:ring-gray-200 outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-400 ml-1">
                      BUDGET
                    </label>
                    <select className="w-full bg-[#f4f4f4] border-none rounded-2xl p-5 text-xs font-bold appearance-none outline-none">
                      <option>$1000 - $5000</option>
                      <option>$5000 - $10000</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-400 ml-1">
                      SERVICE
                    </label>
                    <select className="w-full bg-[#f4f4f4] border-none rounded-2xl p-5 text-xs font-bold appearance-none outline-none">
                      <option>CONSULTANCY</option>
                      <option>WEB DEVELOPMENT</option>
                      <option>SEO</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 ml-1">
                    MESSAGE
                  </label>
                  <textarea
                    rows="4"
                    placeholder="YOUR MESSAGE"
                    className="w-full bg-[#f4f4f4] border-none rounded-2xl p-5 text-xs font-bold tracking-widest focus:ring-2 focus:ring-gray-200 outline-none resize-none"
                  ></textarea>
                </div>

                <button className="flex items-center gap-4 group mt-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <span className="text-xl">+</span>
                  </div>
                  <span className="text-xs font-bold tracking-[0.2em] uppercase">
                    Let's talk
                  </span>
                </button>
              </form>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default ContactSection;
