import { motion } from "framer-motion";

interface LightRaysProps {
  className?: string;
  color?: string;
}

export default function LightRays({ className = "", color = "#4F46E5" }: LightRaysProps) {
  const rays = Array.from({ length: 8 });

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        {rays.map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[200%] w-1 origin-center"
            style={{
              background: `linear-gradient(to bottom, transparent, ${color}40, transparent)`,
              rotate: `${(360 / rays.length) * i}deg`,
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scaleY: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at center, ${color}15, transparent 70%)`,
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
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
