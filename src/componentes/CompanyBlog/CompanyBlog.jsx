import React from 'react';

const CompanyBlog = () => {
   const blogs = [
    {
      id: 1,
      tag: "WEB3",
      date: "NOV 07, 2025",
      title: "Seamless user interfaces, crafted with intent.",
      image: "https://i.ibb.co.com/jvkTBMgs/10075.webp",
      darkCard: true,
    },
    {
      id: 2,
      tag: "WEB3",
      date: "NOV 07, 2025",
      title: "Creative web platforms, designed for growth.",
      image: "https://i.ibb.co.com/CpHWfGYP/10076.webp",
      darkCard: false, 
    },
    {
      id: 3,
      tag: "WEB3",
      date: "NOV 07, 2025",
      title: "Immersive virtual journeys, built with precision.",
      image: "https://i.ibb.co.com/21RwvHZ9/10077.webp",
      darkCard: true,
    }
  ];

  return (
    <section className="py-24 bg-[#f9f9f9] px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xl font-bold uppercase tracking-[0.4em] text-gray-400">Insights</span>
          <h2 className="text-5xl md:text-6xl font-medium mt-4 tracking-tight text-gray-900">Company blog & updates</h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div key={blog.id} className="flex flex-col gap-6">
              
              {index === 1 ? (
                <>
                  {/* Image Card First */}
                  <div className="relative overflow-hidden rounded-[40px] group cursor-pointer h-[400px]">
                    <img 
                      src={blog.image} 
                      alt="Blog visual" 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute bottom-8 left-8 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-lg">
                      <span className="text-2xl font-light text-black">+</span>
                    </div>
                  </div>

                  {/* Text Card Second */}
                  <div className={`p-10 rounded-[40px] shadow-sm transition-all duration-500 hover:shadow-xl ${blog.darkCard ? 'bg-black text-white' : 'bg-white text-black border border-gray-100'}`}>
                    <div className="flex items-center gap-2 opacity-60 text-[10px] font-bold tracking-widest uppercase">
                      <span>{blog.tag}</span>
                      <span>/</span>
                      <span>{blog.date}</span>
                    </div>
                    <h3 className="text-2xl font-medium mt-6 leading-tight">{blog.title}</h3>
                  </div>
                </>
              ) : (
                <>
                  <div className={`p-10 rounded-[40px] shadow-sm transition-all duration-500 hover:shadow-xl ${blog.darkCard ? 'bg-black text-white' : 'bg-white text-black border border-gray-100'}`}>
                    <div className="flex items-center gap-2 opacity-60 text-[10px] font-bold tracking-widest uppercase">
                      <span>{blog.tag}</span>
                      <span>/</span>
                      <span>{blog.date}</span>
                    </div>
                    <h3 className="text-2xl font-medium mt-6 leading-tight">{blog.title}</h3>
                  </div>

                  <div className="relative overflow-hidden rounded-[40px] group cursor-pointer h-[400px]">
                    <img 
                      src={blog.image} 
                      alt="Blog visual" 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute bottom-8 left-8 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-lg">
                      <span className="text-2xl font-light text-black">+</span>
                    </div>
                  </div>
                </>
              )}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyBlog;