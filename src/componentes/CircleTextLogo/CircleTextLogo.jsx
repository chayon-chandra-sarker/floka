import React from "react";

const CircleTextLogo = () => {
  const text = "WANT IT TO SOUND PLAYFUL, LUXURIOUS, OR MORE • ";

  return (
    <div className="w-40 h-40 relative flex items-center justify-center">
      
      {/* Rotating Circular Text */}
      <div
        className="absolute w-full h-full"
        style={{ animation: "spin 12s linear infinite" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <path
              id="circlePath"
              d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0"
            />
          </defs>

          <text fill="black" fontSize="5" fontWeight="bold" letterSpacing="2">
            <textPath href="#circlePath" startOffset="0%">
              {text.repeat(3)}
            </textPath>
          </text>
        </svg>
      </div>

      {/* Center F Logo */}
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-200">
        <span className="italic font-bold text-2xl text-black select-none">F</span>
      </div>

      {/* Inline keyframes for spin */}
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default CircleTextLogo;