import React, { useEffect, useState } from "react";

const ProjectCompletCount = () => {
  const [count, setCount] = useState(0);
  const end = 2000; // final number
  const duration = 2000; // in ms

  useEffect(() => {
    let start = 0;
    const incrementTime = 10; // ms per tick
    const step = Math.ceil(end / (duration / incrementTime));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, incrementTime);

    return () => clearInterval(timer);
  }, []);

  // format for k+
  const displayCount = count >= 1000 ? `${(count / 1000).toFixed(0)}k+` : count;

  return (
    <div className="bg-[#f8f8f8] p-10 rounded-[32px] flex justify-between items-center group hover:bg-black transition-all">
      <p className="text-xs font-bold text-gray-400 group-hover:text-gray-500 uppercase max-w-[80px]">
        Projects completed
      </p>
      <span className="text-5xl font-bold italic group-hover:text-white transition-all">
        {displayCount}
      </span>
    </div>
  );
};

export default ProjectCompletCount;