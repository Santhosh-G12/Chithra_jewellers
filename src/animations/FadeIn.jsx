// ScrollFadeInCard.js
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ScrollFadeInCard({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: true,   // Animate only once
    threshold: 0.1       // 10% of element in view triggers animation
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="my-8"
    >
      {children}
    </motion.div>
  );
}
