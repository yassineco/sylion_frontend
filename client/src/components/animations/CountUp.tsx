import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

interface CountUpProps {
  value: number;
  duration?: number;
  className?: string;
  suffix?: string;
}

export default function CountUp({ value, duration = 2, className = "", suffix = "" }: CountUpProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, value, { duration });
    return controls.stop;
  }, [value, duration, count]);

  return (
    <motion.span className={className}>
      {rounded as any}
      {suffix}
    </motion.span>
  );
}
