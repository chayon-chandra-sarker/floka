import React from 'react';

const TestimonialSection = () => {
 const feedbackData = [
    {
      id: 1,
      name: "Nicolas K. Ellington",
      role: "IT Specialist",
      text: "As we continued to use their tool and found more use cases, our feature requests quickly found their way into their backlog.",
      tag: "GREAT DESIGN SOLUTIONS",
      stars: 5,
    },
    {
      id: 2,
      name: "Julian T. Beaumont",
      role: "IT Specialist",
      text: "As we continued to use their tool and found more use cases, our feature requests quickly found their way into their backlog.",
      tag: "GREAT DESIGN SOLUTIONS",
      stars: 5,
    },
    {
      id: 3,
      name: "Felipe D. Hawthorne",
      role: "IT Specialist",
      text: "As we continued to use their tool and found more use cases, our feature requests quickly found their way into their backlog.",
      tag: "GREAT DESIGN SOLUTIONS",
      stars: 5,
    }
  ];

  return (
    <section className="bg-[#f9f9f9] py-20 px-6 md:px-16 font-sans">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row justify-between items-start gap-8">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mt-2">
          User Feedbacks
        </span>
        <h2 className="text-4xl md:text-6xl font-medium leading-[1.1] tracking-tight max-w-3xl text-[#1a1a1a]">
          Accelerating growth, and unlocking new potential. 
          <span className="inline-flex items-center -space-x-3 mx-4">
            <img className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm" src="https://i.pravatar.cc/150?u=1" alt="user" />
            <img className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm" src="https://i.pravatar.cc/150?u=2" alt="user" />
            <img className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm" src="https://i.pravatar.cc/150?u=3" alt="user" />
          </span>
          Let's build your brand—together.
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {feedbackData.map((item) => (
          <div
            key={item.id}
            className="group relative bg-white rounded-[32px] p-10 min-h-[400px] flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100"
          >
            {/* Background Hover Layer (Top to Bottom) */}
            <div className="absolute inset-0 bg-[#0f0f0f] translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"></div>

            {/* Content Container */}
            <div className="relative z-10 w-full">
              {/* Profile Info */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-500 transition-colors duration-300">
                  {item.role}
                </p>
              </div>

              <div className="w-full h-[1px] bg-gray-100 group-hover:bg-gray-800 mb-8 transition-colors duration-300"></div>

              {/* Stars */}
              <div className="flex gap-1 text-orange-500 mb-6">
                {[...Array(item.stars)].map((_, i) => (
                  <span key={i} className="text-lg">★</span>
                ))}
              </div>

              {/* Feedback Text */}
              <p className="text-[1.1rem] leading-relaxed text-gray-700 group-hover:text-gray-300 transition-colors duration-300">
                "{item.text}"
              </p>
            </div>

            {/* Bottom Tag */}
            <div className="relative z-10 mt-8">
              <span className="text-[10px] font-bold tracking-[0.2em] text-gray-300 uppercase group-hover:text-gray-600 transition-colors duration-300">
                " {item.tag} "
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;