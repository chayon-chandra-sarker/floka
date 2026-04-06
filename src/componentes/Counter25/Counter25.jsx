import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Counter25 = () => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = 25;
    const duration = 1000;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, duration / end);

    return () => clearInterval(timer);
  }, [isInView]);

  return (
    <h3 ref={ref} className="text-7xl font-bold text-gray-900 flex items-center">
      <motion.span>{count}</motion.span>
      <span className="text-gray-300 ml-1">+</span>
    </h3>
  );
};

export default Counter25;