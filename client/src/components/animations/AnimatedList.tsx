import { motion } from "framer-motion";

interface AnimatedListProps {
  items: string[];
  animation?: "slideUp" | "fadeIn";
  className?: string;
}

export default function AnimatedList({ items, animation = "slideUp", className = "" }: AnimatedListProps) {
  const variants = {
    slideUp: {
      hidden: { opacity: 0, y: 20 },
      visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.2,
          duration: 0.5,
        },
      }),
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: (i: number) => ({
        opacity: 1,
        transition: {
          delay: i * 0.2,
          duration: 0.5,
        },
      }),
    },
  };

  return (
    <ul className={`space-y-4 ${className}`}>
      {items.map((item, index) => (
        <motion.li
          key={index}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants[animation]}
          className="text-lg font-medium"
        >
          {item}
        </motion.li>
      ))}
    </ul>
  );
}
