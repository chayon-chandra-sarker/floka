import React, { useState } from "react";
import Container from "../Container/Container";

const VideoHero = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-[#f8f8f8] pt-0 mt-0">
      <Container>
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-xl bg-gray-900 group mt-0">
          
          {!isPlaying ? (
            // Thumbnail Section
            <div className="absolute inset-0 w-full h-full">
              
              <img
                src="https://i.ibb.co/5Wf1cMDC/10073.jpg"
                alt="Video Thumbnail"
                className="w-full h-full object-cover blur-[2px] transition duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="flex items-center gap-3 px-5 py-2 sm:px-6 sm:py-3 bg-white text-black rounded-full font-bold uppercase tracking-widest hover:bg-gray-200 transition-all transform hover:scale-110 shadow-2xl"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-black rounded-full flex items-center justify-center">
                    <svg
                      fill="white"
                      viewBox="0 0 24 24"
                      className="w-4 h-4 ml-0.5"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  Play Reel
                </button>
              </div>
            </div>
          ) : (
            // Video Section
            <div className="absolute inset-0 w-full h-full">
              
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/SF4aHwxHtZ0?autoplay=1"
                title="Video Player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              {/* Close Button */}
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white bg-black/60 px-3 py-1 rounded-full hover:bg-black transition"
              >
                ✕
              </button>
            </div>
          )}

        </div>
      </Container>
    </div>
  );
};

export default VideoHero;