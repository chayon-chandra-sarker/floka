import { motion } from "framer-motion";

const text = "Our approach is straightforward— prioritizing functionality, speed, and clarity for solutions.";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05, // word delay
    },
  },
};

const wordAnimation = {
  hidden: { opacity: 0, x: 40 }, // right থেকে আসবে
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const AnimatedText = () => {
  return (
    <div className="max-w-2xl">
      <motion.h2
        className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight flex flex-wrap gap-2"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {text.split(" ").map((word, i) => (
          <motion.span key={i} variants={wordAnimation}>
            {word}
          </motion.span>
        ))}
      </motion.h2>
    </div>
  );
};

export default AnimatedText;