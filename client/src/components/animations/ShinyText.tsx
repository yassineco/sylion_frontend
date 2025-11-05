import { motion } from "framer-motion";

interface ShinyTextProps {
  text: string;
  speed?: number;
  className?: string;
}

export default function ShinyText({ text, speed = 3, className = "" }: ShinyTextProps) {
  return (
    <motion.span
      className={`inline-block bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#4F46E5] bg-clip-text text-transparent bg-[length:200%_auto] ${className}`}
      animate={{
        backgroundPosition: ["0% center", "200% center"],
      }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {text}
    </motion.span>
  );
}
