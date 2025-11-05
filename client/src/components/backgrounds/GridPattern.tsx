import { motion } from "framer-motion";

interface GridPatternProps {
  className?: string;
}

export default function GridPattern({ className = "" }: GridPatternProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(79, 70, 229, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(79, 70, 229, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
