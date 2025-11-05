import { motion } from "framer-motion";

interface FloatingOrbsProps {
  className?: string;
}

export default function FloatingOrbs({ className = "" }: FloatingOrbsProps) {
  const orbs = [
    { size: 400, color: "#4F46E5", delay: 0 },
    { size: 300, color: "#7C3AED", delay: 2 },
    { size: 350, color: "#6366F1", delay: 4 },
  ];

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color}30, transparent 70%)`,
          }}
          animate={{
            x: ["-20%", "120%"],
            y: ["-20%", "120%"],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            delay: orb.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
